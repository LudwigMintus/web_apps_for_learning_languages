import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/tagButtons.css';

const TagButtons = () => {
  const navigate = useNavigate();

  const handleTagClick = (tag: string) => {
    navigate(`/catalogs?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="tag-buttons">
      <button className="tag-button" onClick={() => handleTagClick('Французский')}>
        Французский
      </button>
      <button className="tag-button" onClick={() => handleTagClick('Английский')}>
        Английский
      </button>
      <button className="tag-button" onClick={() => handleTagClick('Программирование')}>
        Программирование
      </button>
      <button className="tag-button" onClick={() => handleTagClick('Математика')}>
        Математика
      </button>
      <button className="tag-button" onClick={() => handleTagClick('История')}>
        История
      </button>
      <button className="tag-button" onClick={() => handleTagClick('Наука')}>
        Наука
      </button>
    </div>
  );
};

export default TagButtons;
