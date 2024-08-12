import { createContext,useContext, useEffect, useState } from "react";
import URL from "../components/URL";

const storage=createContext();



const StorageProvider=({children})=>{

    const [tokean,settokean]=useState(localStorage.getItem('tokean'));
    const [user,setUser]=useState('');
    const [isLoading,setisLoading]=useState(true);
    const [service,setservice]=useState([]);

    const StoreTokeanLC=(tokeanls)=>{

    settokean(tokeanls)
    localStorage.setItem('tokean',tokeanls)
    };


    const logOut=()=>{
        settokean('');
        return localStorage.removeItem('tokean');
    }

    const isLogin=!!tokean;


    const loginUser=async()=>{

        setisLoading(true)
        const responce=await fetch(`${URL}/api/auth/user`,{
            headers:{
                Authorization:`bearer ${tokean}`
            },
            method:'GET',
        });


        if (responce.ok) {
            setisLoading(false)
            const userDeta=await responce.json();
            setUser(userDeta.user);
        }else{
            isLoading(false)
            console.log('Backend Error');
        }
    }





    const serviceDeta=async()=>{
        const responce=await fetch(`${URL}/api/auth/showImage`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })

        if (responce.ok) {
            const serviceDeta=await responce.json();
            setservice(serviceDeta.deta);
        } 
    }





    useEffect(()=>{
        loginUser();
        serviceDeta();
    },[])








    return<storage.Provider value={{StoreTokeanLC,isLogin,logOut,user,isLoading,service,tokean,serviceDeta}}>
       {children}
    </storage.Provider>

};







const Consumer=()=>{
    return useContext(storage);
};

export {Consumer,StorageProvider,storage};



