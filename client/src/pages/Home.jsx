import { NavLink } from "react-router-dom";





const Home=()=>{
  
    return(
        <>
         
         <div className="formMaincontainer container">

          <div className="leftHome">
          <h2 className='ragisterHeader'>Wellcome</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus aspernatur consequatur laudantium corrupti ut eius quidem facere laborum veritatis labore laboriosam voluptatibus, placeat impedit reprehenderit eveniet quas nobis commodi.

            </p>
           
            <NavLink className='btn serviceOrderBtn' to='/contact'>Contact</NavLink>
          </div>
        

        <div className="formPic">
        <img src="./youtube2.png" alt="" style={{width:'60rem', height:'40rem'}} />
        </div>


        </div>
        </>
    )

}


export default Home;