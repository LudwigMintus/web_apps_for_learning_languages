import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundShapes1 from "./backgroundShapes/BackgroundMainRightSideBottom";
import BackgroundShapes2 from "./backgroundShapes/BackgroundMainLeftSideBottom";
import BackgroundShapes3 from "./backgroundShapes/BackgroundMainLeftSideTopOtherWindows";
import Header from "./header/Header";
import SearchBar from "./searchBar/SearchBar";
import TagButtons from "./tagButtons/TagButtons";

const MainPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    navigate(`/catalog?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="main-page">
      <BackgroundShapes1 />
      <BackgroundShapes2 />
      <BackgroundShapes3 />
      <Header />
      <SearchBar onSearch={handleSearch} />
      <TagButtons onTagClick={handleSearch} />
    </div>
  );
};

export default MainPage;
