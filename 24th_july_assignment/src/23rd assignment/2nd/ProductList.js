import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <div className="container">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p className="rating"><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
