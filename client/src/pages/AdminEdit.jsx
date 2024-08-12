import { useEffect, useState } from "react"
import { json, useParams } from "react-router-dom";
import URL from "../components/URL";





const AdminEdit=()=>{

    const [update,setupdate]=useState({
        name:'',
        email:'',
        isAdmin:''
    });

    const id=useParams();




    const SingleDeta=async()=>{
        const responce=await fetch(`${URL}/api/admin/user/${id.id}/edit`,{
            method:'GET',
        })
        if (responce.ok) {
            const deta=await responce.json();
            setupdate(deta.deta)

        }



    };

    useEffect(()=>{
        SingleDeta();
    },[])















    const inpChanger=(e)=>{
        const {name,value}=e.target;
        setupdate({...update,[name]:value})

    }






    const updateUser=(e)=>{
        e.preventDefault();

    const updateUse=async()=>{

        const responce=await fetch(`${URL}/api/admin/user/${id.id}/update`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(update)
        })

        if (responce.ok) {
            console.log(responce);
        }};




    updateUse();
    
    }





    return(<>
    

    <div className="container">
        <h1 >Edit Deta</h1>

        <form action="" onSubmit={(e)=>updateUser(e)}>
            <label htmlFor="Name:">Name</label>
        <input type="text" name="name" value={update.name} onChange={(e)=>inpChanger(e)} placeholder="Enter name"/>
        <label htmlFor="Name:">email</label>

        <input type="text" name="email" value={update.email} onChange={(e)=>inpChanger(e)}  placeholder="Enter Email"/>
        <label htmlFor="Name:">Admin</label>

        <input type="text" name="isAdmin" value={update.isAdmin} onChange={(e)=>inpChanger(e)}  placeholder="Enter IsAdmin"/>
        <button type="submit">Update</button>
        </form>

        

        </div>

    </>)

}


export default AdminEdit