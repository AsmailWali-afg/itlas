
import './PageStyles/ragister.css'
import React, { useState } from 'react';
import {Consumer} from '../context/authContext';
import URL from '../components/URL';

const Login=()=>{


  const {StoreTokeanLC}=Consumer();

    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };




    const handleSubmit =async (event) => {
      try {
        event.preventDefault();
        setFormData({
          email: '',
          password: ''
        });

      



        const responce=await fetch(`http://localhost:5000/api/auth/login`,{
          headers:{
            'Content-Type':'application/json'
          },
          method:'POST',
          body:JSON.stringify(formData)
        });

  

        if (responce.ok) {
          const deta=await responce.json();
          console.log(deta);
          if (deta.tokean) {
            StoreTokeanLC(deta.tokean);
            alert('Login sucsess')
          }else{
            alert('Login failed')
          }

          
          
          
        } else{
        console.log('Backend Error Login');
        }


      } catch (error) {
        console.log(error);
      } 
    }








    return<>


<div className="formMaincontainer container">

<div className="formPic">
<img src="./main.png" alt="" />
</div>

    
<div className='form-container'>
      <h2 className='ragisterHeader'>Login</h2>

    
      <form  onSubmit={handleSubmit}>

     

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
       
       

        <div className={'form-group'}>
          <label htmlFor="message">Passord:</label>

          <input type="text"     id="message"
            name="password"
            value={formData.password}
            onChange={handleInputChange}/>

        </div>
        
        <div className='form-group'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>

  );
    
    
    </>
    };
    
    
    export default Login;