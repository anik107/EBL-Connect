"use client";

import { Skeleton } from "@/components/ui/skeleton";
import GlobalContext from "@/contexts/context";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useContext, useMemo, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 23.8103, lng: 90.4125 };

const allDivisions = [
  { name: "Dhaka", lat: 23.8103, lng: 90.4125 },
  { name: "Chittagong", lat: 22.3569, lng: 91.7832 },
  { name: "Rajshahi", lat: 24.3745, lng: 88.6042 },
  { name: "Sylhet", lat: 24.8949, lng: 91.8687 },
  { name: "Khulna", lat: 22.8456, lng: 89.5403 },
  { name: "Barisal", lat: 22.701, lng: 90.3535 },
  { name: "Mymensingh", lat: 24.7471, lng: 90.4203 },
];

export default function GeoMap() {
  const { data, loading } = useContext(GlobalContext);
  const [activeMarker, setActiveMarker] = useState(null);

  const inputData = data?.post_geolocation ?? {};

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const mergedData = useMemo(() => {
    return allDivisions.map((division) => ({
      ...division,
      count: inputData[division.name] ?? 0,
    }));
  }, [inputData]);

  console.log({ mergedData });

  if (!isLoaded || loading) {
    return (
      <Skeleton className="w-full aspect-square bg-slate-200 dark:bg-slate-700" />
    );
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
      {mergedData.map((loc, idx) => (
        <Marker
          key={idx}
          position={{ lat: loc.lat, lng: loc.lng }}
          onClick={() => setActiveMarker(idx)}
        >
          {activeMarker === idx && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <strong>{loc.name}</strong>
                <p>{loc.count} posts</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
}
