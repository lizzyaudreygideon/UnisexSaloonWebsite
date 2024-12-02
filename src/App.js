import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Importing components
import Services from './Pages/Services';
import Appointments from './Pages/Appointments';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Banner from './Pages/Home';
import Products from './Pages/Products';
import sampleProducts from '../src/Components/Products/ProductData';
import NavBar from './Components/NavBar/NavBar';
import AboutMore from './Components/About/AboutMore';
import CartPage from './Components/Products/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="main">
        <header>
          <NavBar cart={cart} />
        </header>

        <div className="main-two">
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/products"
              element={<Products products={sampleProducts} onAddToCart={handleAddToCart} />}
            />
            <Route path="/cart" 
            element={<CartPage cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/aboutMore" element={<AboutMore />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
