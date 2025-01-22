import React from "react";
import "./css/contentList.css";

const ContentList = ({ catalogs, onSelectCatalog }) => (
  <div className="content-list">
    {catalogs.map((catalog) => (
      <div
        key={catalog.id}
        className="content-item"
        onClick={() => onSelectCatalog(catalog.id)} // Передача ID каталога
        style={{ cursor: "pointer" }}
      >
        <h3>{catalog.name}</h3>
        <p>{catalog.description}</p>
      </div>
    ))}
  </div>
);

export default ContentList;
