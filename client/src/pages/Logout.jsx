import { Navigate } from "react-router-dom";
import {Consumer} from '../context/authContext'
import { useEffect } from "react";



const Logout=()=>{

    
    const {logOut}=Consumer()

    useEffect(()=>{
        logOut();
    },[])




    return<>
    <Navigate to='/login'/>
    </>

}

export default Logout;