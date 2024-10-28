import React from 'react';
import Footer from "../Components/Footer"
import AboutPics from "../Components/About/AboutPics"
import { Link } from 'react-router-dom';
import woman from "../Components/Gallery/IMG-20241024-WA0010.png";
import man from "../Components/Gallery/IMG-20241024-WA0015.png";

const About = () => {
  return (
    <div>

      <div className="aboutUs">
         
        <span className='boutus'>
        
        <h1 className='us'>About Us</h1>

        </span>

      </div>

      <div className="WhyUs">

          <div className="why">

            <h3>Who we are</h3>

            <h6>Where Every Style Finds Its Place</h6>

            <p>At Unisex saloon, our talented team of experienced stylists and beauticians is dedicated to understanding your unique needs. 
              Whether you’re looking for a chic haircut, vibrant color, a rejuvenating facial, or a relaxing massage, we’ve got you covered.
               We believe in the power of transformation and strive to create looks that reflect your personality and lifestyle.
             We use only the highest quality products to ensure that you receive exceptional care during your visit. 
             Our mission is to empower you to express yourself and leave our salon feeling refreshed and revitalized.</p>

             <Link to="/aboutMore" className='cta'>Read More !</Link> 

          </div>

          <div className="us">

             <img src={woman} className='womanImage' alt="lady" />

             <img src={man} className='manImage' alt="guy" />

          </div>

      </div>



      <div className="text3">
          <h2>Meet Our Team</h2>
          <p>Our talented stylists and technicians are dedicated proffesssionals with years of experience</p>
          <p>Meet our team and discover why Unisex Saloon is the perfect choice for your hair needs</p>
          <Link to="/appointments" className='cta'>Book Your Appointment  Now!!</Link>
         
                
        </div>
  
        <div className="pictures">
               <AboutPics />             
           </div>
      
    <div className="fooot">
      <Footer/>
    </div>
    </div>
  )
}

export default About
