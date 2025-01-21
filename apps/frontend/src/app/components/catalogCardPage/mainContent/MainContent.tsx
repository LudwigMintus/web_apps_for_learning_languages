import React from "react";
import "./css/mainContent.css";

const MainContent = () => (
  <div className="main-component">
    <h2>Создать новый модуль</h2>
    <input type="text" placeholder="Введите название" className="input-field" />
    <input type="text" placeholder="Добавьте описание" className="input-field" />
    <div className="tags">
      <button className="tag-button">не помню что</button>
      <button className="tag-button">не помню что</button>
    </div>
    <div className="module-list">
      {Array.from({ length: 3 }).map((_, i) => (
        <div className="module-item" key={i}>
          <input type="text" placeholder="Название" className="module-input" />
          <button className="module-action">○</button>
        </div>
      ))}
    </div>
  </div>
);

export default MainContent;
