import React from 'react'
import {Link}from 'react-router-dom';

// importing components
import Footer from "../Components/Footer"

// importing pictures
import Natural  from "../Components/Gallery/natural.jpg";
import Relaxed from "../Components/Gallery/relaxed.jpg";
import Protect from "../Components/Gallery/free-photo-of-portrait-of-a-woman.jpeg";
import Shampoo from "../Components/Gallery/istockphoto-1321544366-612x612.png"


const Banner = () => {
  return (
    <>
    <div className='Home'>

      <div className="naration">
      <h1>Welcome to Unisex hair saloon,</h1> 
      <h1>Where Style Meets Comfort!</h1>

        <p>At unisex hair saloon, we believe that great hair knows no gender! 
      Our unisex hair saloon offers a modern, inclusive space where everyone 
      can feel confident and pampered. Whether you are looking for a sleek haircut,
       build color transformation, or a refreshing blowout, our talented team of stylists is here to bring your vision to life</p>

       <div className="Homebox">
            <Link to="/appointments" className='text'>Book Appointment </Link>            
          </div>
       </div>

       
    </div>

    <div className='home'>
       
       <div  className='home1'>
      <h1>We Make Changes Happen!</h1>

      <p>Ready for a transformation? At Unisex Saloon, we believe in the power of change
        whether it’s a bold new haircut, a fresh color, or a sleek style upgrade, 
        we’re here to make your vision come to life. Our expert stylists are passionate
       about helping you embrace your unique look with confidence and flair.
       We specialize in crafting personalized experiences, offering cutting-edge techniques that
       bring out the best in your hair. Whether it’s subtle tweaks or a dramatic makeover, 
       we make sure every change feels empowering and exciting.
       Come in and discover how we can help you shine with a whole new look—because at Unisex Saloon,
        we make changes happen! </p>
        </div>

        <div className='home2'>
        <img src={Shampoo} alt="shampoo" />
        </div>
      
    </div>

    <div className="hair-care-regimen">

        <h1 className='care'>Hair Care Regimen</h1>

      <div className="care">

       <span>
         <div className="back"></div>
         <img src={Natural} alt="" className="regimen" />
         <h3>Natural Hair</h3>
        </span> 

       <span>
         <div className="back"></div>
         <img src={Relaxed} alt="" className="regimen" />
         <h3>Relaxed hair</h3>
       </span> 

       <span>
         <div className="back">
         </div><img src={Protect} alt="" className="regimen" />
         <h3> Hairstyles </h3>
       </span> 

      </div>  

    </div>  
     
     {/* footer */}
     <div className="fooot">
      <Footer/>
     </div>
    </>
  )
}

export default Banner
