import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import CatalogPage from "../components/catalogPage/СatalogPage";
import CatalogCardPage from "../components/catalogCardPage/СatalogCardPage";
import GameCard from "../components/gameCrad/GameCard";
import AuthPage from "../components/authorization/authentication/AuthPage";
import RegistrationPage from "../components/authorization/registration/RegistrationPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "../components/notFoundPage/NotFoundPage"; // Компонент 404

const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      {/* Защищённые маршруты */}
      <Route
        path="/catalogs"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <CatalogPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/catalogs/:catalogId"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <CatalogCardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/catalogs/:catalogId/cards/:cardId"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <GameCard />
          </ProtectedRoute>
        }
      />
      {/* Маршрут для неизвестных путей */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
