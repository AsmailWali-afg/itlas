import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import './PageStyles/SingleProduct.css'
import URL from '../components/URL';


const SingleProduct=()=>{

    const [product,setproduct]=useState([])
    const id=useParams().id;
    const [images,setimages]=useState([])



    const showDeta=async()=>{

        const responce=await fetch(`${URL}/api/auth/showImageSinglePro${id}`,{
            method:'GET',
        });
        if (responce.ok) {
            const resDeta=await responce.json();
            // setproduct(resDeta.deta);
            setimages(resDeta.deta.cloudLink)
        }
    }

    useEffect(()=>{
        showDeta()
    },[])







    const order=(e)=>{
        e.preventDefault();
        alert('successfully Order')
    }




    return(
        <>
    

            <div className="singleProduct">
                <div className="leftSingle">
                    {
                        images.map((deta,index)=>{

                            return(
                                <div key={index} className="singleImages">
                                <img src={`${deta}`} style={{width:'15rem',height:'15rem'}} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="rightSingle">
                    <h1>Name:{product.name}</h1>
                    <h1>Price:{product.price}</h1>
                    <button className="btn" onClick={(e)=>order(e)}>Order</button>
                </div>
            </div>
        </>
      

          
    )
};


export default SingleProduct;