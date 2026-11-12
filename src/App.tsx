import { useEffect, useState } from "react";
import type { LocationData } from "./types/location";
import { getGeolocation } from "./utils/apiGeolocation";

import Map from "./components/Map/Map";
import Results from "./components/Results/Results";
import SearchBar from "./components/Search/SearchBar";

export default function App() {
  const [ipAddress, setIpAddress] = useState("");

  const [address, setAddress] = useState<LocationData | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGeoLocationData() {
      try {
        setLoading(true);
        setError(null);

        const data = await getGeolocation(ipAddress, controller.signal);

        setAddress(data);

        // console.log(data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGeoLocationData();

    return () => controller.abort();
  }, [ipAddress]);

  return (
    <main className="relative inset-0 w-full overflow-hidden">
      <SearchBar
        onSearch={setIpAddress}
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
      />

      {loading && <p className="absolute text-center">Updating location...</p>}

      <p className="absolute text-center text-red-500">Error: {error}</p>

      {ipAddress.length > 2 && <Results address={address} />}

      <Map address={address} />
    </main>
  );
}
