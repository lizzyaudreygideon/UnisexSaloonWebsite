import React from 'react';
import {Link}from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <div className="footer">

      <div className="foot1">

          <h1>SATISFACTION GUARANTEED</h1>

          <div className="line"></div>  
      
      </div> 

      <div className="bet2">

         {/* <div className="foot2">

          <h3>Keep Exploring</h3>

            <div className="nav">

              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/appointments">Appointments</Link>
              
            </div>
         </div> */}

         <div className="foot3">
          <h3>Connect with Us</h3>
            <p> Phone : +263 77 346 8060 / +263 78 826 2049 </p>
            <p> Email : a4@gmail.com</p>
            <p>Location : 1098 Aspindale Park,Harare</p>
            <div class="social">
                       <Link to='#' className='soci'> <FaIcons.FaFacebookF/> </Link>
                       <Link to='#' className='soci'> <FaIcons.FaTwitter/>  </Link>
                       <Link to='#' className='soci'> <FaIcons.FaInstagram/></Link>
                       <Link to='#' className='soci'> <FaIcons.FaLinkedinIn/></Link>
                       <Link to='#' className='soci'> <FaIcons.FaPinterest/></Link>
                    </div>
         </div>

         <div className="foot4">
        <h2>Stay in the know</h2>
        <p>To stay in the loop of UniSex workshops, tutorials,discounts and hair care tips, sign up for our Newsletter here!</p>
         <span className="coms">
           <label>
             <input type="email" placeholder='Email Adress' />
           </label>
           <button type="submit" className='newsletter'>Sign Up</button>
          </span>
      </div>

      </div>

      

      <div className="line"></div>

      <div className="foot5">
         <p>Ⓒ Unisex Hair Saloon, 2024 | All Rights Reserved </p>
         <p>@uleezProducts | Terms & Conditions | Privacy Policy </p>
      </div>
     </div>
  )
}

export default Footer
