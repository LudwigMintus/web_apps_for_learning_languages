import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/notFoundPage.css";
import BackgroundShapes from '../catalogPage/backgroundShapes/BackgroundShapes'; // Подключение стилей

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Перенаправление на главную страницу
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Страница не найдена</p>
      <button className="not-found-button" onClick={handleGoHome}>
        На главную
      </button>
    </div>
);
};

export default NotFoundPage;
