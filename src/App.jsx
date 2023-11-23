import React, { useState } from "react";
import WeatherContent from "./WeatherContent";
import useGetLocations from "./api/geocoding";
import SearchBar from "./SearchBar";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("Toulouse");
  const { locations, isLoading } = useGetLocations(searchQuery);

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <WeatherContent locations={locations} isLoading={isLoading} />
      )}
    </div>
  );
}

export default App;
