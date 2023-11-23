import { useState } from "react";
import WeatherContent from "./WeatherContent";
import axios from "axios";
import useGeoCoding from "./api/geocoding";
import { useEffect } from "react";

import SearchBar from "./SearchBar";

import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  setSearchQuery("Toulouse");
  console.log("test usegeocoding:", useGeoCoding(searchQuery));
  return (
    <div className="App">
      <SearchBar />
      <WeatherContent />
    </div>
  );
}

export default App;
