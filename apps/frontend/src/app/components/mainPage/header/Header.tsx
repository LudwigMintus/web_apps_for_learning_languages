import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <header className="header">
      <div className="logo">
        <h1>ЛОГО</h1>
        <p>типо просто лого</p>
      </div>
      <div className="auth-buttons">
        <button
          className="button register"
          onClick={() => handleNavigate('/register')}
        >
          Регистрация
        </button>
        <button
          className="button login"
          onClick={() => handleNavigate('/auth')}
        >
          Вход
        </button>
      </div>
    </header>
  );
};

export default Header;
