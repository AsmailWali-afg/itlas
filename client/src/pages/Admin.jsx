import React from 'react';
import './PageStyles/Admin.css';
import {NavLink, Outlet} from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin-panel'>

      <div className='sidebar'>
        <div className='header '>
        <img src="../admin.png" alt="" style={{width:'4rem', height:'4rem'}}/>
          Admin Panel
        </div>
        <ul>
          <li><NavLink to="/Admin/user">Users</NavLink></li>
          <li><NavLink to="/Admin/contact">Contact</NavLink></li>
          <li><NavLink to="/Admin/service">Service</NavLink></li>

        </ul>
      </div>



      <div className='main-content'>
        <div className='header'>
          Welcome User
        </div>

        <div>

          <Outlet/>

        </div>

      </div>


    </div>


  );
};

export default Admin;











