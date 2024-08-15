
import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Consumer } from '../context/authContext';
import { useState } from 'react';
import './hambarger.css'

const Navbar = () => {

  const {isLogin}=Consumer()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>



  <nav className="navbar container">

      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="./file.png" alt="" style={{width:'5rem', height:'5rem'}} />
        </NavLink>

        <ul className="navbar-menu">
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>

            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
         
       
            <NavLink to="/services" className="navbar-link">
              Services
            </NavLink>
        
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>

        {
          isLogin ? 
          
          <NavLink to="/logout" className="navbar-link">
          Logout
          </NavLink>
           : 

          
        <> 
        <NavLink to="/Ragister" className="navbar-link">
        Ragister
        </NavLink>
       
       
        <NavLink to="/Login" className="navbar-link">
        Login
        </NavLink>
     
        </>
        }
        </div>
       

        
       <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
        
        </ul>
      </div>
    </nav>
    </>
  
  );
};

export default Navbar;