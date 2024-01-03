import React from "react";
import Main from "./page/Main";
import GlobalStyle from "./css/GlobalStyle";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./page/ProductDetail";
import Header from "./components/public/Header";
import BagPage from "./page/BagPage";
import FoodPage from "./page/FoodPage";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<ProductDetail />} />
        <Route path="/bag" element={<BagPage />} />
        <Route path="food" element={<FoodPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
