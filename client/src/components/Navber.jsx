
import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { Consumer } from '../context/authContext';



const Navbar = () => {

  const {isLogin}=Consumer()

  return (
    <>
<nav className="navbar container">

      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src="./file.png" alt="" style={{width:'5rem', height:'5rem'}} />
        </NavLink>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
         
          <li className="navbar-item">
            <NavLink to="/services" className="navbar-link">
              Services
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>

        {
          isLogin ? 
          <li className="navbar-item">
          <NavLink to="/logout" className="navbar-link">
          Logout
          </NavLink>
          </li> : 

          
        <> <li className="navbar-item">
        <NavLink to="/Ragister" className="navbar-link">
        Ragister
        </NavLink>
        </li>
        <li className="navbar-item">
        <NavLink to="/Login" className="navbar-link">
        Login
        </NavLink>
        </li> 
        </>
        }
       

        

        
        </ul>
      </div>
    </nav>
    </>
  
  );
};

export default Navbar;