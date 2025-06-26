"use client";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 23.8103, lng: 90.4125 }; // Default center: Dhaka

const locations = [
  { name: "Dhaka", count: 30, lat: 23.8103, lng: 90.4125 },
  { name: "Chittagong", count: 17, lat: 22.3569, lng: 91.7832 },
  { name: "Rajshahi", count: 8, lat: 24.3745, lng: 88.6042 },
  { name: "Sylhet", count: 9, lat: 24.8949, lng: 91.8687 },
  { name: "Khulna", count: 5, lat: 22.8456, lng: 89.5403 },
  { name: "Barisal", count: 3, lat: 22.701, lng: 90.3535 },
  { name: "Mymensingh", count: 4, lat: 24.7471, lng: 90.4203 },
];

export default function GeoMap() {
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // .env.local
  });

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
      {locations.map((loc, idx) => (
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
