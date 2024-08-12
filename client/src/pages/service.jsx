import { useEffect } from 'react';
import { Consumer } from '../context/authContext';
import './PageStyles/Service.css';
import {NavLink} from 'react-router-dom';

const service=()=>{
    const {service,serviceDeta}=Consumer();


    useEffect(()=>{
        serviceDeta()
    },[])







    return<>


<div className="cardContainer ">


    {
        service.map((deta,index)=>{
            // console.log(deta.filepath[0]);
            return(

                <div  key={index} className="card">
                 {/* <img src={`${URL}/upload/resize/${deta.filepath[0]}`} alt={deta.filename}/> */}
                 <img src={deta.cloudLink[0]} alt="" style={{width:'30rem', height:'20rem' }} />
                 <h1>{deta.name}</h1>
                 <h2>{deta.price}</h2>
                 <h2>{deta.discount}</h2>
                 <NavLink to={`${deta._id}/order`} className='btn serviceOrderBtn'>Order Now</NavLink>
                 </div>

             
            )
        })
    }

</div>







</>}    









    export default service;