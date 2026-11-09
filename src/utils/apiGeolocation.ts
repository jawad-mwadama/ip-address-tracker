export async function getGeolocation(ipAddress: string, signal?: AbortSignal) {
  const res = await fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_s6FkgMWTQvbjFjsy5nWRASLoLhijO&ipAddress=8.8.8.8",
    { signal },
  );
  if (!res.ok) throw Error("Failed to fetch geolocation data.");
  const data = await res.json();
  return data;
}
