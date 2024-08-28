import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper, Typography, Box } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductSearch from "../components/ProductSearch";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/product")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/product/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleSearch = (searchResults) => {
    setProducts(searchResults);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: "1000px",
          width: "100%",
          backgroundColor: "azure",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Product List
        </Typography>
        <br />
        <ProductSearch onSearch={handleSearch} />
        <br />
        <ProductTable products={products} onDelete={handleDelete} />
      </Paper>
    </Box>
  );
};

export default ProductList;
