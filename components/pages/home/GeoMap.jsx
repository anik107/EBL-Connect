"use client";

import { Skeleton } from "@/components/ui/skeleton";
import GlobalContext from "@/contexts/context";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix default marker icon issue in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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

  const inputData = data?.post_geolocation ?? {};

  const mergedData = useMemo(() => {
    return allDivisions.map((division) => ({
      ...division,
      count: inputData[division.name] ?? 0,
    }));
  }, [inputData]);

  if (loading) {
    return (
      <Skeleton className="w-full aspect-square bg-slate-200 dark:bg-slate-700" />
    );
  }

  return (
    <MapContainer
      center={[23.8103, 90.4125]}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mergedData.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            {loc.count} posts
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
