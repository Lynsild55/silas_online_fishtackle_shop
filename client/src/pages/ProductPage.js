import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong>: ${product.price}<br />
              <small>{product.description}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPage;
