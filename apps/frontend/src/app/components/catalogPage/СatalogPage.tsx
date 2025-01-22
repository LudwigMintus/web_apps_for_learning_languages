import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackgroundShapes from "./backgroundShapes/BackgroundShapes";
import Header from "./header/Header";
import SearchBar from "./searchBar/SearchBar";
import ContentList from "./сontentList/ContentList";

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
      fetch(`/api/catalogs?search=${encodeURIComponent(searchQuery)}`)
        .then((response) => response.json())
        .then((data) => setCatalogs(data))
        .catch((error) => console.error("Error fetching catalogs:", error));
    }
  }, [location.search]);

  const handleSelectCatalog = (id) => {
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
          // Перезагрузка данных
        }}
        onAddCatalog={() => console.log("Добавить каталог")}
      />
      <ContentList catalogs={catalogs} onSelectCatalog={handleSelectCatalog} />
    </div>
  );
};

export default CatalogPage;
