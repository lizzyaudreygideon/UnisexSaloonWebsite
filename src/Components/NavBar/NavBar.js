import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaPersonWalkingArrowRight } from 'react-icons/fa6';
import { SidebarData } from './NavBarData';
import { IconContext } from 'react-icons';
import logo from '../Gallery/Untitled_design-removebg-preview.png';

function NavBar({ cart }) { // Accept cart as a prop
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  // Calculate total items and cost
  const totalItems = cart.length;
  

  return (
    <>
      <IconContext.Provider value={{ color: '#F8F9FA', className: 'icons' }}>
        <div className={navbar ? 'navbar active' : 'navbar'}>
          <Link to="#" className="menu-bars">
            <RiMenu3Line onClick={showSidebar} />
            <span onClick={showSidebar}>Menu</span>
          </Link>

          <div>
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>
          </div>

          <div className="textbox">
            <Link to="/appointments" className="text">
              Book Now <FaPersonWalkingArrowRight size={'1.5em'} style={{ color: '#3A1078' }} />
            </Link>
          </div>

         
        </div>
         {/* Cart Summary */}
          <div className="cart-summary">
        <Link to="/cart" className="cart-link">
          🛒<span className="cart-counter">{totalItems}</span>
        </Link>
        </div>


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
