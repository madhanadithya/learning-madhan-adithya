import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Select, MenuItem, Typography, Container, Paper, Box } from '@mui/material';

function Admin() {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurantName, setNewRestaurantName] = useState('');
  const [newRestaurantEmail, setNewRestaurantEmail] = useState('');
  const [newRestaurantStatus, setNewRestaurantStatus] = useState(true);
  const navigate = useNavigate();

  const fetchRestaurants = async () => {
    const token = localStorage.getItem('jwt');
    try {
      const response = await axios.get('http://localhost:1337/api/restaurants', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setRestaurants(response.data.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const addRestaurant = async () => {
    if (!newRestaurantName || !newRestaurantEmail) {
      console.error('Please fill in all fields');
      return;
    }

    const token = localStorage.getItem('jwt');
    try {
      await axios.post('http://localhost:1337/api/restaurants', {
        data: {
          name: newRestaurantName,
          email: newRestaurantEmail,
          status: newRestaurantStatus,
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setNewRestaurantName('');
      setNewRestaurantEmail('');
      setNewRestaurantStatus(true);
      fetchRestaurants();
    } catch (error) {
      console.error('Error adding restaurant:', error.response ? error.response.data : error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
  };

  return (
    <Container component={Paper} elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Admin Screen</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginBottom: '16px' }}>
        Logout
      </Button>
      <Box mb={2}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newRestaurantName}
          onChange={(e) => setNewRestaurantName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={newRestaurantEmail}
          onChange={(e) => setNewRestaurantEmail(e.target.value)}
        />
        <Select
          value={newRestaurantStatus}
          onChange={(e) => setNewRestaurantStatus(e.target.value === 'true')}
          fullWidth
          margin="normal"
        >
          <MenuItem value="true">Active</MenuItem>
          <MenuItem value="false">Inactive</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={addRestaurant} style={{ marginTop: '16px' }}>
          Add Restaurant
        </Button>
      </Box>
      <Typography variant="h6" gutterBottom>Restaurants List</Typography>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <li key={restaurant.id} style={{ marginBottom: '8px' }}>
              <Typography variant="body1">{restaurant.attributes.name}</Typography>
              <Link to={`/restaurants/${restaurant.id}`}>
                <Button variant="outlined" size="small">Details</Button>
              </Link>
            </li>
          ))
        ) : (
          <Typography>No restaurants found</Typography>
        )}
      </ul>
    </Container>
  );
}

export default Admin;
