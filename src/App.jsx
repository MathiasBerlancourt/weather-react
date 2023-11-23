import React, { useState } from "react";
import WeatherContent from "./WeatherContent";
import useGeoCoding from "./api/geocoding";
import SearchBar from "./SearchBar";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("Toulouse");
  const { locations, isLoading } = useGeoCoding(searchQuery);

  return (
    <div className="App">
      <SearchBar setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <WeatherContent locations={locations} />
      )}
    </div>
  );
}

export default App;
