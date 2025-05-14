import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';


const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1 className="mb-4 text-center">Welcome to our Webshop</h1>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
