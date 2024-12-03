import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

// Importing components
import Loader from './Components/Loader/Loader';
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
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // React Router hooks for navigation detection
 
  const location = useLocation();

  // Handle loader on initial load and route changes
  useEffect(() => {
    setLoading(true); // Show loader on navigation start
    const timer = setTimeout(() => setLoading(false), 1500); // Simulate a delay of 1.5 seconds
    return () => clearTimeout(timer);
  }, [location.pathname]); // Triggered on route change

  // Initial page load logic
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simulate a delay of 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
            <Route
              path="/cart"
              element={<CartPage cart={cart} onRemoveFromCart={handleRemoveFromCart} />}
            />
            <Route path="/aboutMore" element={<AboutMore />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
