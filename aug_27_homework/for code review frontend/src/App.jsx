import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import ProductList from "./pages/ProductList";
import ProductForm from "./components/ProductForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id/edit" element={<ProductForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
