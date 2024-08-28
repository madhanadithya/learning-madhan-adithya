import React, { useState } from 'react';
import { TextField, Button, Grid, Tabs, Tab, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const availabilityOptions = [
  { label: 'Available', value: 'Available' },
  { label: 'Not Available', value: 'Not Available' },
];

const ProductSearch = ({ onSearch }) => {
  const [value, setValue] = useState('availability');
  const [searchParams, setSearchParams] = useState({
    availability: '',
    name: '',
    price: '',
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = () => {
    let url = '/product';
    switch (value) {
      case 'availability':
        if (searchParams.availability) url += `/productsearch/availability/${searchParams.availability}`;
        break;
      case 'name':
        if (searchParams.name) url += `/productsearch/name/${searchParams.name}`;
        break;
      case 'price':
        if (searchParams.price) url += `/productsearch/price/${searchParams.price}`;
        break;
      default:
        break;
    }

    axios.get(url).then(response => {
      onSearch(response.data);
    }).catch(error => console.error('Error searching products:', error));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Tabs value={value} onChange={handleChange} aria-label="search criteria" centered>
        <Tab value="availability" label="Availability" />
        <Tab value="name" label="Name" />
        <Tab value="price" label="Price" />
      </Tabs>
      <Grid container spacing={2} style={{ marginTop: 20, justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <Grid item xs={12} sm={6}>
          {value === 'availability' && (
            <Autocomplete
              options={availabilityOptions}
              getOptionLabel={(option) => option.label}
              value={availabilityOptions.find(option => option.value === searchParams.availability) || null}
              onChange={(event, newValue) => setSearchParams({ ...searchParams, availability: newValue ? newValue.value : '' })}
              renderInput={(params) => <TextField {...params} label="Availability" fullWidth />}
              disableClearable
            />
          )}
          {value === 'name' && (
            <TextField
              fullWidth
              label="Name"
              value={searchParams.name}
              onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
            />
          )}
          {value === 'price' && (
            <TextField
              fullWidth
              label="Price"
              type="number"
              value={searchParams.price}
              onChange={(e) => setSearchParams({ ...searchParams, price: e.target.value })}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" onClick={handleSearch} startIcon={<SearchIcon />}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductSearch;
