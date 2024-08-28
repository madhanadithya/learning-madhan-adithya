import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#004d00' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Product List
        </Button>
        <Button color="inherit" component={Link} to="/create">
          Create Product
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
