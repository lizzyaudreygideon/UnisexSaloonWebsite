import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-text">Booking beauty... Please wait</p>
    </div>
  );
};

export default Loader;
