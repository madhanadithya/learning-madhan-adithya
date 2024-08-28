import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("Available");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id && id !== "create") {
      axios
        .get(`/product/${id}`)
        .then((response) => {
          const { name, price, availability } = response.data;
          setName(name);
          setPrice(price);
          setAvailability(availability);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const productData = { name, price, availability };

    if (id && id !== "create") {
      axios
        .put(`/product/${id}`, productData)
        .then(() => {
          navigate("/products");
        })
        .catch((error) => console.error("Error updating product:", error));
    } else {
      axios
        .post("/product", productData)
        .then(() => {
          navigate("/products");
        })
        .catch((error) => console.error("Error creating product:", error));
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding={2}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          backgroundColor: "azure",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {id && id !== "create" ? "Update Product" : "Create a Product"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Availability"
                select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                SelectProps={{ native: true }}
                required
                variant="outlined"
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                {id && id !== "create" ? "Update Product" : "Create Product"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ProductForm;
