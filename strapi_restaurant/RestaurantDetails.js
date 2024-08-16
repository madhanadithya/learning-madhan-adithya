import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, FormControlLabel, Checkbox, Typography, Container, Paper, Box } from '@mui/material';

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchRestaurantDetails();
  }, [id]);

  const fetchRestaurantDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}`);
      const { data } = response.data;
      setRestaurant(data);
      setName(data.attributes.name);
      setEmail(data.attributes.email);
      setStatus(data.attributes.status);
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:1337/api/restaurants/${id}`, {
        data: {
          name,
          email,
          status
        }
      });
      fetchRestaurantDetails();
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:1337/api/restaurants/${id}`);
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <Container component={Paper} elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>Restaurant Details</Typography>
      <Box mb={2}>
        <Typography variant="h6"><strong>Name:</strong> {restaurant.attributes?.name}</Typography>
        <Typography variant="h6"><strong>Email:</strong> {restaurant.attributes?.email}</Typography>
        <Typography variant="h6"><strong>Status:</strong> {restaurant.attributes?.status ? 'Active' : 'Inactive'}</Typography>
      </Box>

      <Box display="flex" gap={2} mb={2}>
        <Button variant="contained" color="primary" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel Edit' : 'Edit'}
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="outlined" onClick={() => navigate('/admin')}>
          Go Back
        </Button>
      </Box>

      {isEditing && (
        <Box mt={2}>
          <Typography variant="h6" gutterBottom>Edit Restaurant</Typography>
          <TextField
            label="Restaurant Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Restaurant Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox checked={status} onChange={(e) => setStatus(e.target.checked)} />}
            label="Status"
          />
          <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginTop: '16px' }}>
            Save Changes
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default RestaurantDetails;
