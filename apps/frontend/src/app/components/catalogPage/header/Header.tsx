import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <h1>ЛОГО</h1>
        <p>типо просто лого</p>
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => navigate('/')}>
          Главная
        </button>
        <button className="nav-button" onClick={() => navigate('/catalogs')}>
          Мои каталоги
        </button>
        <button className="nav-button" onClick={() => navigate(-1)}>
          Назад
        </button>
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
};

export default Header;
