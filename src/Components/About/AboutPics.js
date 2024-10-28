import React from 'react';
import { Pics } from './About';

const AboutPics = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Pics.map((item) => (
          <div key={item.id} className="carousel-slide">
            <div className="image-container">
              <img 
                src={require(`./Gallery2/${item.image}`)} 
                alt={item.description} 
                className="carousel-image"
              />
              <p className="carousel-description">{item.description}</p>
            </div>
          </div>
        ))}
        {/* Duplicate the slides for seamless looping */}
        {Pics.map((item) => (
          <div key={`duplicate-${item.id}`} className="carousel-slide">
            <div className="image-container">
              <img 
                src={require(`./Gallery2/${item.image}`)} 
                alt={item.description} 
                className="carousel-image"
              />
              <p className="carousel-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPics;