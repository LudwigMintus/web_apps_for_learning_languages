import React from 'react';
import './css/header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>ЛОГО</h1>
      <p>типо просто лого</p>
    </div>
    <div className="nav-buttons">
      <button className="nav-button">Главная</button>
      <button className="nav-button">Мои каталоги</button>
      <button className="nav-button">Назад</button>
    </div>
    <div className="user-info">
      <img
        className="user-avatar"
        //src="/path/to/avatar.png"
        //alt="User Avatar"
      />
    </div>
  </header>
);

export default Header;
