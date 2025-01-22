import React, { useState, useEffect } from "react";
import "./css/searchBar.css";

const SearchBar = ({ initialQuery, onSearch, onAddCatalog }) => {
  const [query, setQuery] = useState(initialQuery || "");

  useEffect(() => {
    setQuery(initialQuery || "");
  }, [initialQuery]);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-wrapper">
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
      <button className="add-button" onClick={onAddCatalog}>
        Добавить
      </button>
    </div>
  );
};

export default SearchBar;
