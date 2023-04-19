import "./App.scss";
import "swiper/css";

import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const VoucherPage = lazy(() => import("./pages/VoucherPage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <span className="loadingCircle"></span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/voucher" element={<VoucherPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
