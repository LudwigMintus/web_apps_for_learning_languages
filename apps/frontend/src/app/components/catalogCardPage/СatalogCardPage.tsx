import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContent from "./mainContent/MainContent";
import Sidebar from "./sidebar/Sidebar";
import BackgroundShapes from "../catalogPage/backgroundShapes/BackgroundShapes";
import Header from "../catalogPage/header/Header";

const CatalogCardPage = () => {
  const { catalogId } = useParams(); // Получение catalogId из маршрута
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    if (catalogId) {
      fetch(`/api/catalogs/${catalogId}`)
        .then((response) => response.json())
        .then((data) => setCatalog(data))
        .catch((error) => console.error("Error fetching catalog:", error));
    }
  }, [catalogId]);

  return (
    <div className="catalog-card-page">
      <BackgroundShapes />
      <Header />
      {catalog ? (
        <>
          <Sidebar />
          <MainContent />
        </>
      ) : (
        <p>Загрузка каталога...</p>
      )}
    </div>
  );
};

export default CatalogCardPage;
