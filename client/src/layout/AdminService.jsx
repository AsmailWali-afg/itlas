import { NavLink } from "react-router-dom";
import { Consumer } from "../context/authContext"
import '../pages/PageStyles/Service.css'
import URL from "../components/URL";

const AdminService=()=>{

    const {service,serviceDeta}=Consumer()
   


    const delet=async(id)=>{
        const responce=await fetch(`${URL}/api/auth/deleteService${id}`,{
            method:"DELETE",
        })
        if (responce.ok) {
            serviceDeta()
        }

    }






















        
    const Order=()=>{
        return(
            alert('Edit Will come latter')
            
        )
    };

    


return(
    <>
     <div className="Product">
    <NavLink to={`AddService`}>Add Product +</NavLink>
    </div>

    
    <div className="cardContainer ">
   


{
    service.map((deta,index)=>{
        return(
           

            <div  key={index} className="card">
            {/* <img src={`${URL}/upload/origenel/${deta.filepath[0]}`} alt="service" style={{width:'20rem'}}/> */}
            <img src={deta.cloudLink[0]} alt="" style={{width:'30rem', height:'20rem'}}/>
             <h1>{deta.name}</h1>
             <h2>{deta.price}</h2>
             <h2>{deta.discount}</h2>
             <button className='btn adminBtn' onClick={()=>delet(deta._id)}>Delete </button>
             <button className='btn adminBtn'  onClick={(e)=>Order(e)}>Edit </button>

             </div>

          

            
        )
    })
}


</div>

    </>
)
}

export default AdminService;