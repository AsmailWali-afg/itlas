import { useEffect, useState } from "react";
import '../pages/PageStyles/addService.css'
import URL from "../components/URL";

const AddService=()=>{
    const [form,setform]=useState({ name:'',price:0,});
    const [files,setfiles]=useState([]);
    const [product,setproduct]=useState([])




    const changeForm=(e)=>{
        const {name,value}=e.target;
        setform({...form,[name]:value})
    }

    const imageChange=(e)=>{
        setfiles([...files,e.target.files]);
    };




    // Functions

    const click= async(e)=>{
        e.preventDefault();

        const formData=new FormData();
        formData.append('name',form.name);
        formData.append('price',form.price);

        files.forEach((file)=>{   
            formData.append('images',file[0])

            }
        );

                    
    const responce=await fetch(`${URL}/api/auth/upload`,{
        method:'POST',
        body:formData
    });
    if (responce.ok) {
        const deta=await responce.json();
        showDeta();
        setform({name:'',price:0});
        setfiles('')
    }
    }








// for Showing

    

    const showDeta=async()=>{

        const responce=await fetch(`${URL}/api/auth/showImage`,{
            method:'GET',
        });
        if (responce.ok) {
            const resDeta=await responce.json();
            setproduct(resDeta.deta)
        }
    }

    useEffect(()=>{
        showDeta()
    },[])




    return(
        <>
        <h1>Add</h1>


        
        <form className="userTable" action="" onSubmit={(e)=>click(e)}>
            Name
            <input type="text" name='name' value={form.name} onChange={(e)=>changeForm(e)}/>
            Price
            <input type="number" name="price" value={form.price} onChange={(e)=>changeForm(e)}/>
            <div className="imgDiv">
            Image
            <input className="imginp" type="file" multiple  onChange={imageChange} />
            </div>
         
            <button className="btn" type="submit">Add</button>
        </form>






          { 
            
            product.map((deta,index)=>{
                return(
                  
                    
            <div  key={index} className="cardAdmin">
            {/* <img src={`${URL}/${deta.filepath[0]}`} alt="service" style={{width:'20rem'}}/> */}
             <img src={deta.cloudLink[0]} alt="service" style={{width:'20rem'}}/>

             <h1>{deta.name}</h1>
             <h2>{deta.price}</h2>
             <h2>{deta.discount}</h2>
       
             </div>
           
                )
            })

        } 


        </>
    )
}


export default AddService;