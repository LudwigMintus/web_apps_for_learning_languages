import React from 'react';
import './css/searchBar.css';

const SearchBar = () => (
  <div className="search-panel">
    <div className="search-wrapper">
      <input type="text" placeholder="Поиск" className="search-input" />
      <button className="search-icon">
        <img src="../../../../../public/objectImage/search-icon.png" alt="Search Icon" />
      </button>
    </div>
    <button className="add-button">Добавить</button>
  </div>
);

export default SearchBar;
