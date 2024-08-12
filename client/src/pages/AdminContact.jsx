import { useEffect, useState } from "react";
import { Consumer } from "../context/authContext";
import './PageStyles/AdUser.css';
import URL from "../components/URL";



const AdminContact=()=>{

    const [contact,setcontact]=useState([]);

    const {tokean}=Consumer();
    // console.log(tokean);
  

    const getContact=async()=>{

        const response=await fetch(`${URL}/api/admin/contact`,{
            headers:{
                Authorization:`bearer ${tokean}`
            },
            method:'GET',
        })
    
    
        if (response.ok) {
            console.log(response);
            const deta=await response.json()
            setcontact(deta.contact);
        }}


        useEffect(()=>{
            getContact();
        },[])




    return(
        <>
        
        <h1>Contact page</h1>


        

        <table className='userTable'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    {/* <th>Edit</th> */}
                    {/* <th>Delete</th> */}


                </tr>
            </thead>


            {
            contact.map((deta,index)=>{
                return <tbody key={index} className='cardTable'>
                <tr>
                    <td>{deta.name}</td>
                    <td>{deta.email}</td>
                    <td>{deta.message}</td>
                    {/* <td><button className='btn' onClick={(e)=>delet(e)}>Delete</button></td> */}

                </tr>
            </tbody>
            })
        }


         
        </table>



        </>
    )
}

export default AdminContact;