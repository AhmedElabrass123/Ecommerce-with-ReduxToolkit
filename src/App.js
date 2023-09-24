import React from "react";
import MyNav from "./components/MyNav";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:proId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
// /:cartId
