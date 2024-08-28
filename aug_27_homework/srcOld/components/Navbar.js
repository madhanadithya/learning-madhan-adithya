import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Product Management
      </Typography>
      <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>Home</Button>
      <Button color="inherit" component={Link} to="/create" startIcon={<AddCircleIcon />}>Create Product</Button>
      <Button color="inherit" component={Link} to="/products" startIcon={<ListIcon />}>Product List</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
