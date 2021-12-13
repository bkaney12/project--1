import React from "react";
import { Route, Routes } from "react-router";
import CartPage from "../pages/CartPage";
import DetailsPage from "../pages/DetailsPage";
import FavPage from "../pages/FavPage";
import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/favorites" element={<FavPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
