import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
};

export default ProductCard;
