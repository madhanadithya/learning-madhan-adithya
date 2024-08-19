import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Category">Category</Link></li>
        <li><Link to="http://localhost:3001/admin/addProduct">Add Product</Link></li>
        <li><Link to="/ShowProducts">Show Products</Link></li>
        <li><Link to="/AddUsers">Add User</Link></li>
        <li><Link to="/ShowUsers">Show Users</Link></li>
        <li><Link to="/role">Role</Link></li>

        <li><Link to="/lazy">Lazy</Link></li>

        
      </ul>
    </nav>
  );
};

export default Navbar;
