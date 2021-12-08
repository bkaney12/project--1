import React from "react";
import { Route, Routes } from "react-router";
import CartPage from "../pages/CartPage";
import MainPage from "../pages/MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
