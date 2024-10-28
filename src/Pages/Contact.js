import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    

     <div class="video">
            <img src="https://i.pinimg.com/564x/7c/e6/6d/7ce66d031fecb5629d63cd8e1a2f50b3.jpg" alt="logo"/>
            <div class="overlay">
                <div class="container">
                    {/* <p class="h2-bottom">Our mandate is to leave you satisfied</p>
                     */}
                    <h2>contact us</h2>
                   
                    <div class="social">
                       <Link to='#' className='soci'> <FaIcons.FaFacebookF/> </Link>
                       <Link to='#' className='soci'> <FaIcons.FaTwitter/>  </Link>
                       <Link to='#' className='soci'> <FaIcons.FaInstagram/></Link>
                       <Link to='#' className='soci'> <FaIcons.FaLinkedinIn/></Link>
                       <Link to='#' className='soci'> <FaIcons.FaPinterest/></Link>
                    </div>
                    <form>
                        <input type="text" name="name" placeholder=" your name"/>
                        <input type="email" name="email" placeholder="your email"/>
                        <input type="tel" name="phone" placeholder="your phone"/>
                        {/* <input type="url" name="website" placeholder="your website"/> */}
                        <input type="text" name="subject" placeholder="subject"/>
                        <textarea placeholder="your message"></textarea>
                        <button><div>send
                            <i class="fa fa-arrow-right"></i></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>    
   )
}

export default Contact
