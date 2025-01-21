import React from 'react';
import './css/sidebar.css';

const Sidebar = () => (
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
              <p className="list-item-title">Название</p>
              <p>Описание, бла бла бла ...</p>
            </div>
            <button className="list-item-button">Изучить</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Sidebar;
