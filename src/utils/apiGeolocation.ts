import type { LocationData } from "../types/location";

export async function getGeolocation(
  ipAddress: string,
  signal?: AbortSignal,
): Promise<LocationData> {
  const res = await fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_s6FkgMWTQvbjFjsy5nWRASLoLhijO&ipAddress=1.1.1.1",
    { signal },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch geolocation data");
  }

  return res.json();
}
