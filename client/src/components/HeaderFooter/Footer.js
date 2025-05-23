// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Silas Tackle Shop. All rights reserved.</p>
        <small>Built with React & Bootstrap</small>
      </div>
    </footer>
  );
};

export default Footer;
