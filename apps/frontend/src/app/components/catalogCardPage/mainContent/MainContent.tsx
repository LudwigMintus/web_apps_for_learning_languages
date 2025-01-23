import React from "react";
import "./css/mainContent.css";

const MainContent = () => (
  <div className="main-content-component">
    <h2>Создать новый модуль</h2>
    <input type="text" placeholder="Введите название" className="main-content-input-field" />
    <input type="text" placeholder="Добавьте описание" className="main-content-input-field" />
    <div className="main-content-tags">
      <button className="main-content-tag-button">не помню что</button>
      <button className="main-content-tag-button">не помню что</button>
    </div>
    <div className="main-content-module-list">
      {Array.from({ length: 3 }).map((_, i) => (
        <div className="main-content-module-item" key={i}>
          <input
            type="text"
            placeholder="Название"
            className="main-content-module-input"
          />
          <button className="main-content-module-action">○</button>
        </div>
      ))}
    </div>
  </div>
);

export default MainContent;
