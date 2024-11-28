import React from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import {  FaPersonWalkingArrowRight } from 'react-icons/fa6';
import { useState } from 'react';
import {SidebarData} from './NavBarData';
import { IconContext } from 'react-icons';
import logo from '../Gallery/Untitled_design-removebg-preview.png';
// import { useLocation } from 'react-router-dom';

function NavBar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [navbar, setNavbar] = useState(false);

    // const location = useLocation();

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
        setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    // const hideLogo = () => {
    //     // Check if current path matches '/contact'
    //     if (location.pathname === '/contact' || '/gallery') {
    //         return { display: 'none' }; // or any other style you want
    //     }
    //     return {}; // return empty object for default styling
    // };

  return (

    <>

    <IconContext.Provider value={{color:'#F8F9FA', className:'icons'}}>
      
      <div className={navbar ? 'navbar active' : 'navbar'}>
        <Link to="#" className='menu-bars'>
         <RiMenu3Line onClick={showSidebar}  />
          <span onClick={showSidebar} >Menu </span>
        </Link>

        <div >

          <Link to='/'>
             <img src={logo} alt="" className="logo" />
          </Link>

        </div>

        <div className="textbox">
            <Link to="/appointments" className='text'>Book Now < FaPersonWalkingArrowRight size = {'1.5em'} style={{color:'#3A1078'}}/> </Link>            
        </div>

      </div>

       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             
             <ul className="nav-menu-items"  onClick={showSidebar} >

                 <li className="navbar-toogle">
                    <Link to="#" className="menu-bars" >
                       <AiOutlineClose />
                    </Link>                    
                 </li>

                 {SidebarData.map((item,index) => {
                    return(
                      <li key = {index} className={item.cName}>
                       <Link to={item.path}>
                         {item.icon}
                         <span>{item.title}</span>
                       </Link>

                      </li>  
                    )
                 })}

             </ul>
            
          </nav>
    </IconContext.Provider> 
    </>
  )
}

export default NavBar
