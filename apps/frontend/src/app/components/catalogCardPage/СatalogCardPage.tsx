import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContent from "./mainContent/MainContent";
import Sidebar from "./sidebar/Sidebar";
import BackgroundShapes from "../catalogPage/backgroundShapes/BackgroundShapes";
import Header from "../catalogPage/header/Header";
import { getCollections } from "../../api/apiService";

const CatalogCardPage = () => {
  const { catalogId } = useParams<{ catalogId: string }>();
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    if (catalogId) {
      getCollections() // Используем API функцию для получения каталога
        .then((collections) => {
          const catalog = collections.find((c) => c.id === catalogId);
          setCatalog(catalog || null);
        })
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
