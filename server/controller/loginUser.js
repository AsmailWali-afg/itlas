const user=require('../model/User-model');



const loginUser=async(req,res)=>{
    try {
        const useridentyfy=req.user;
        const tokean=req.tokean;

        const findUser=await user.findOne({_id:useridentyfy.id})


        res.status(200).json({user:findUser})
    

        
    } catch (error) {
        console.log(error);
    }
   

}



module.exports=loginUser;