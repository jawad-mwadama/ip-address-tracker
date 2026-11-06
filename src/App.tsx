import Map from "./Components/Map/Map";
import Results from "./Components/Results/Results";
import SearchBar from "./Components/Search/SearchBar";

export default function App() {
  return (
    <main className="w-full">
      <SearchBar />
      <Results />
      <Map />
    </main>
  );
}
