import { Consumer } from '../context/authContext';
import './PageStyles/ragister.css'
import React, { useState } from 'react';
import URL from '../components/URL'



const Ragister=()=>{

    const {StoreTokeanLC}=Consumer();


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
       });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };











    const handleSubmit =async (event) => {
      event.preventDefault();

      const responce=await fetch(`${URL}/api/auth/ragister`,{
        headers:{
          'Content-Type':'application/json'
        },
        method:'POST',
        body:JSON.stringify(formData)
      });

    
      if (responce.ok) {
        const deta=await responce.json();
        StoreTokeanLC(deta.tokean);
        alert('Ragister sucsess')
      }

        setFormData({
          name: '',
          phone: '',
          email: '',
          password: ''
        });
      };





    return<>
    

      <div className="formMaincontainer container">

      <div className="formPic">
      <img src="./main.png" alt="" />
      </div>

        <div className='form-container'>
      <h2 className='ragisterHeader'>Ragister</h2>

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
          <label htmlFor="lastName">Email:</label>
          <input
            type="email"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Phone:</label>
          <input
            type="text"
            id="email"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className={'form-group'}>
          <label htmlFor="message">Passord:</label>

          <input type="text"     id="message"
            name="password"
            value={formData.password}
            onChange={handleInputChange}/>

        </div>




        <div className='form-group'>
          <button type="submit">Ragister</button>
        </div>
      </form>
    </div>

    </div>

  );



    </>
    };
    
    
    export default Ragister;