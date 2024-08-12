import { useEffect, useState } from 'react';
import './PageStyles/AdUser.css';
import { Consumer } from '../context/authContext';
import { Link, NavLink } from 'react-router-dom'
import URL from '../components/URL';




const AdminUser=()=>{

    const [users,setUsers]=useState([]);
   
    const {tokean}=Consumer();


    const GetUser=async()=>{
        try {

            const responce=await fetch(`${URL}/api/admin/user`,{
                headers:{
                    Authorization:`bearer ${tokean}`
                },
                method:'GET',
            })
    
            if (responce.ok) {
                const deta=await responce.json();
                setUsers(deta.user)
            }
            
        } catch (error) {
            console.log(error);
        }
      
    }


    useEffect(()=>{
        GetUser();
    },[])






    const delet=async(id)=>{




        const responce=await fetch(`${URL}/api/admin/user/Delete/${id}`,{
            headers:{
                Authorization:`bearer ${tokean}`
            },
            method:'DELETE',
        });

        if (responce.ok) {
            GetUser()
            alert('Delete')

        }
        


    };



    

   








    return(
    <>


        <table className='userTable'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>


                </tr>
            </thead>


            {
            users.map((deta,index)=>{
                return <tbody key={index} className='cardTable'>
                <tr>
                    <td>{index}</td>
                    <td>{deta.name}</td>
                    <td>{deta.email}</td>
                    <td>{deta.phone}</td>
                    <td><NavLink className='btn2' to={`${deta._id}/edit`}>Edit</NavLink></td>

                    <td><button className='btn' onClick={()=>delet(deta._id)}>Delete</button></td>


                </tr>
            </tbody>
            })
        }


         
        </table>

      

    </>
    )

}


export default AdminUser;