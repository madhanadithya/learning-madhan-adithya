import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // Red color
    },
    secondary: {
      main: '#1976d2', // Blue color for secondary elements
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
