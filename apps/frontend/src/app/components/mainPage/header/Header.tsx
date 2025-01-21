import React from 'react';
import './css/header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>ЛОГО</h1>
      <p>типо просто лого</p>
    </div>
    <div className="auth-buttons">
      <button className="button register">Регистрация</button>
      <button className="button login">Вход</button>
    </div>
  </header>
);

export default Header;
