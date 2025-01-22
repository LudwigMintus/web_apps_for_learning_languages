import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import CatalogPage from "../components/catalogPage/СatalogPage";
import CatalogCardPage from "../components/catalogCardPage/СatalogCardPage";
import GameCard from "../components/gameCrad/GameCard";
import AuthPage from "../components/authorization/authentication/AuthPage";
import RegistrationPage from "../components/authorization/registration/RegistrationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalogs" element={<CatalogPage />} />
      <Route path="/catalogs/:catalogId" element={<CatalogCardPage />} /> {/* Динамический маршрут */}
      <Route path="/catalogs/:catalogId/cards/:cardId" element={<GameCard />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
};

export default AppRoutes;

