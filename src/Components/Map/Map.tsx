import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { use, useEffect, useRef } from "react";

type Props = {
  address: LocationData | null;
};

export default function Map({ address }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  // 1) Initialize the map
  useEffect(() => {
    if (!containerRef.current) return;
    const map = L.map(containerRef.current).setView([51.505, -0.09], 13);

    mapRef.current = map;
    // Add OpenStreetMap tiles
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const marker = L.marker([51.505, -0.09]);
    // Add a marker
    markerRef.current = marker;

    // Cleanup
    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, []);

  //2) Update map when address changes
  useEffect(() => {
    if (!address || mapRef.current || markerRef.current) return;

    const latitude = address.location.lat;
    const longitude = address.location.lon;

    mapRef.current.setView([latitude, longitude], 13);
    markerRef.current.setLatLng([latitude, longitude]);
  }, [address]);
  return (
    <div
      ref={containerRef}
      style={{
        height: "550px",
        width: "100%",
      }}
      className="-z-10"
    />
  );
}
