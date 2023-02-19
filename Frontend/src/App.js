import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CreateProduct from "./Pages/CreateProduct";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products/:category" />
        <Route element={<CreateProduct />} path="/dashboard/createProduct" />
      </Routes>
    </div>
  );
}

export default App;
