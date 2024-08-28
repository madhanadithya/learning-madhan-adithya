// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import CreateProduct from "./pages/CreateProduct";
// import ProductList from "./pages/ProductList";
// import ProductForm from "./components/ProductForm";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import CssBaseline from "@mui/material/CssBaseline";

// import "./App.css";
// import ResumeUpload from "./components/ResumeUpload";
// import VideoUpload from "./components/VideoUpload";
// import ImageUpload from "./components/ImageUpload";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Navbar />
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/create" element={<CreateProduct />} />
//           <Route path="/products" element={<ProductList />} />
//           <Route path="/product/:id/edit" element={<ProductForm />} />

//           <Route path="/profile/upload" element={<ImageUpload />} />
//           <Route path="/resume/upload" element={<ResumeUpload />} />
//           <Route path="/video/upload" element={<VideoUpload />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

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
import UploadPage from "./pages/UploadPage";

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
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
