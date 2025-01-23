// CatalogPage.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackgroundShapes from "./backgroundShapes/BackgroundShapes";
import Header from "./header/Header";
import SearchBar from "./searchBar/SearchBar";
import ContentList from "./сontentList/ContentList";
import { getCollections } from "../../api/apiService";

const CatalogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [catalogs, setCatalogs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("q") || "";
    setQuery(searchQuery);

    if (searchQuery) {
      getCollections() // Используем API функцию
        .then((data) => setCatalogs(data))
        .catch((error) => console.error("Error fetching catalogs:", error));
    }
  }, [location.search]);

  const handleSelectCatalog = (id: string) => {
    navigate(`/catalogs/${id}`); // Навигация на динамический маршрут
  };

  return (
    <div className="catalog-page">
      <BackgroundShapes />
      <Header />
      <SearchBar
        initialQuery={query}
        onSearch={(newQuery) => {
          setQuery(newQuery);
        }}
        onAddCatalog={() => console.log("Добавить каталог")}
      />
      <ContentList catalogs={catalogs} onSelectCatalog={handleSelectCatalog} />
    </div>
  );
};

export default CatalogPage;
