import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
