import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/tagButtons.css';

const TagButtons = () => {
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    navigate(`/catalog?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="tag-buttons">
      <button className="tag-button" onClick={() => handleTagClick('АУ')}>
        я лох
      </button>
      <button className="tag-button" onClick={() => handleTagClick('Английский')}>
        Английский
      </button>
      <button className="tag-button" onClick={() => handleTagClick('Программирование')}>
        Программирование
      </button>
      <button className="tag-button" onClick={() => handleTagClick('ЫЫ')}>
        Похуй
      </button>
      <button className="tag-button" onClick={() => handleTagClick('ЫЫ')}>
        Нахуй
      </button>
      <button className="tag-button" onClick={() => handleTagClick('ЫЫ')}>
        Зоебись
      </button>
    </div>
  );
};

export default TagButtons;
