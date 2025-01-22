import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/sidebar.css";

const Sidebar = ({ catalogId }) => {
  const navigate = useNavigate();

  const handleStudyCard = (cardId: number) => {
    navigate(`/catalogs/${catalogId}/cards/${cardId}`); // Динамический маршрут
  };

  return (
    <div className="sidebar">
      <div className="buttons-wrapper">
        <button className="action-button">Добавить карточку</button>
        <button className="action-button">Редактировать</button>
      </div>
      <div className="search-wrapper">
        <input type="text" className="search-input-sidebar" placeholder="Поиск" />
        <span className="search-icon">
          <img src="../../../../../public/objectImage/search-icon.png" alt="Search" />
        </span>
      </div>
      <div className="list">
        <div className="scroll-panel">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="list-item" key={index}>
              <div>
                <p className="list-item-title">Карточка {index + 1}</p>
                <p>Описание...</p>
              </div>
              <button
                className="list-item-button"
                onClick={() => handleStudyCard(index + 1)} // Передаем ID карточки
              >
                Изучить
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
