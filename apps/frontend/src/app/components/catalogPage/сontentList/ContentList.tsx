import React from 'react';
import './css/contentList.css';

const ContentList = () => (
  <div className="content-list">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="content-item">
        <h3>{i + 1}. Бла бла бла</h3>
        <p className={i === 2 ? "highlighted-text" : ""}>
          много умных слов неведомых мне <br />
          бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла блабла бла бла бла бла
        </p>
      </div>
    ))}
  </div>
);

export default ContentList;
