import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/sidebar.css";

const Sidebar = ({ catalogId }) => {
  const navigate = useNavigate();

  const handleStudyCard = (cardId) => {
    navigate(`/catalogs/${catalogId}/cards/${cardId}`);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-buttons-wrapper">
        <button className="sidebar-action-button">Добавить карточку</button>
        <button className="sidebar-action-button">Редактировать</button>
      </div>
      <div className="sidebar-search-wrapper">
        <input
          type="text"
          className="sidebar-search-input"
          placeholder="Поиск"
        />
        <span className="sidebar-search-icon">
          <img
            src="../../../../../public/objectImage/search-icon.png"
            alt="Search"
          />
        </span>
      </div>
      <div className="sidebar-list">
        <div className="sidebar-scroll-panel">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="sidebar-list-item" key={index}>
              <div>
                <p className="sidebar-list-item-title">Карточка {index + 1}</p>
                <p>Описание...</p>
              </div>
              <button
                className="sidebar-list-item-button"
                onClick={() => handleStudyCard(index + 1)}
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
