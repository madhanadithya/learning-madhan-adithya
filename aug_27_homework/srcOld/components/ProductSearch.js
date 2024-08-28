import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const ProductSearch = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [availability, setAvailability] = useState('');
  const [price, setPrice] = useState('');

  const handleSearch = () => {
    let url = '/api/products';

    if (availability) url += `/productsearch/availability/${availability}`;
    if (name) url += `/productsearch/name/${name}`;
    if (price) url += `/productsearch/price/${price}`;

    axios.get(url).then(response => {
      onSearch(response.data);
    }).catch(error => console.error('Error searching products:', error));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductSearch;
