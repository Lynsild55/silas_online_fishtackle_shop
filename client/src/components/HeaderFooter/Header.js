// src/components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-primary text-white p-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Silas Tackle Shop</h1>
        <nav>
          <a href="/" className="text-white mx-2">Home</a>
          <a href="/shop" className="text-white mx-2">Shop</a>
          <a href="/contact" className="text-white mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
