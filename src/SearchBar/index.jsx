import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
