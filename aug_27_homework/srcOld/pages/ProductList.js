import React, { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import ProductSearch from '../components/ProductSearch';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    }).catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/products/${id}`).then(() => {
      setProducts(products.filter(product => product._id !== id));
    }).catch(error => console.error('Error deleting product:', error));
  };

  const handleSearch = (searchResults) => {
    setProducts(searchResults);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductSearch onSearch={handleSearch} />
      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
};

export default ProductList;
