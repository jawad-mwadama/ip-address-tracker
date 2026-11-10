import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { useEffect, useRef } from "react";

import type { LocationData } from "../../types/location";

type Props = {
  address: LocationData | null;
};

export default function Map({ address }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const mapRef = useRef<L.Map | null>(null);

  const markerRef = useRef<L.Marker | null>(null);

  // Initialize the map once
  useEffect(() => {
    if (!containerRef.current) return;

    const map = L.map(containerRef.current).setView([51.505, -0.09], 13);

    mapRef.current = map;

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const marker = L.marker([51.505, -0.09]).addTo(map);

    markerRef.current = marker;

    return () => {
      map.remove();

      mapRef.current = null;
      markerRef.current = null;
    };
  }, []);

  // Update the map whenever new location data arrives
  useEffect(() => {
    if (!address || !mapRef.current || !markerRef.current) return;

    const latitude = address.location.lat;
    const longitude = address.location.lng;

    mapRef.current.setView([latitude, longitude], 13);

    markerRef.current.setLatLng([latitude, longitude]);
  }, [address]);

  return (
    <div
      ref={containerRef}
      className="relative z-0 w-full"
      style={{ height: "550px" }}
    />
  );
}
