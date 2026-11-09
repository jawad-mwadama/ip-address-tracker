// import { useState } from "react";
import { useEffect, useState } from "react";

import { getGeolocation } from "./utils/apiGeolocation";
import Map from "./components/Map/Map";
import Results from "./components/Results/Results";
import SearchBar from "./components/Search/SearchBar";

type LocationData = {
  ip: string;
  location: {
    country: string;
    city: string;
    lat: number;
    lon: number;
  };
  isp: string;
};

export default function App() {
  // 1 initializing state to match the data structure
  const [address, setAddress] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //abort controller cleans up the fetch if the component unmounts mid request
    const controller = new AbortController();

    async function fetchGeoLocationData(ipAddress: string) {
      try {
        setLoading(true);
        setError(null);

        const data = await getGeolocation("8.8.8.8");
        console.log(data);

        // 2. Store the returned object in state
        setAddress(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchGeoLocationData("8.8.8.8");

    // Cleanup function
    return () => controller.abort();
  }, []);

  // 3. Handle loading and error states before rendering the object
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!address) return <p>No user data found.</p>;

  return (
    <main className="w-full">
      <SearchBar onSearch={setAddress} />
      <Results address={address} />
      <Map address={address} />
    </main>
  );
}
