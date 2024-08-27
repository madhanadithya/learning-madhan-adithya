import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('Available');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`/api/products/${id}`).then(response => {
        const { name, price, availability } = response.data;
        setName(name);
        setPrice(price);
        setAvailability(availability);
      }).catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, price, availability };

    if (id) {
      axios.put(`/api/products/${id}`, productData).then(() => {
        navigate('/products');
      }).catch(error => console.error('Error updating product:', error));
    } else {
      axios.post('/api/products', productData).then(() => {
        navigate('/products');
      }).catch(error => console.error('Error creating product:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Availability"
            select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            SelectProps={{
              native: true,
            }}
            required
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            {id ? 'Update Product' : 'Create Product'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForm;
