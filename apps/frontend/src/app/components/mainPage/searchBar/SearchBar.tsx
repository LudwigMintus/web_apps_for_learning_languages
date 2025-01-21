import React from 'react';
import './css/searchBar.css';

const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Поиск" className="search-input" />
    <button className="search-icon">
      <img src="../../../../../public/objectImage/search-icon.png" alt="Search" />
    </button>
  </div>
);

export default SearchBar;
