import React, { useState } from "react";
import './css/searchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button className="search-icon" onClick={handleSearch}>
        <img src="../../../../../public/objectImage/search-icon.png" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
