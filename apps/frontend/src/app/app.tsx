import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import MainPage from './components/mainPage/MainPage';
import CatalogPage from './components/catalogPage/СatalogPage';
import CatalogCardPage from './components/catalogCardPage/СatalogCardPage';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
