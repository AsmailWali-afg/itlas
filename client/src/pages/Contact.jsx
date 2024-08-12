
import { Consumer } from '../context/authContext';
import './PageStyles/ragister.css'
import React, { useState } from 'react';
import URL from '../components/URL';





const contact=()=>{
  

    const {user,isLoading}=Consumer();

    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        message: ''
      });





    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };










    const handleSubmit =async (event) => {
        event.preventDefault();

        const responce=await fetch(`${URL}/api/contact/contact`,{
          headers:{
            'Content-Type':'application/json'
          },
          method:'POST',
          body:JSON.stringify(formData)
        });
        if (responce.ok) {
          alert('Message Sent')
        }


        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };













    return<>

<div className="formMaincontainer container">

<div className="formPic">
<img src="./phone3.png" alt="" />
</div>


<div className='form-container'>
      <h2 className='ragisterHeader'>Contact</h2>

      <form  onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
   
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={'form-group'}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
    </div>

  );
    
    

    
    </>
    };
    
    
    export default contact;