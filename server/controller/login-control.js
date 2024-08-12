const user=require('../model/User-model');
const bcrypt=require('bcrypt');


const login=async(req,res)=>{
    try {
        const{email,password}=req.body;

        const userCheak=await user.findOne({email});


        if(!userCheak){
            res.status(200).json({msg:'Not Found'})
        }else{ 
            

            const passwordCheck=await bcrypt.compare(password,userCheak.password);
           
            if (passwordCheck) {
                res.status(200).json({tokean:await userCheak.genrateTokean()})
            }else{
                res.status(200).json({deta:null})

            }
        }

 
    } catch (error) {
        console.log(`Login Error ${error}`);
    }
}

module.exports=login;