const user=require('../model/User-model')




const getAllUserDeta=async(req,res)=>{
    try {
        const allUsers=await user.find();

        res.status(200).json({user:allUsers});

    } catch (error) {
        console.log(error);
    }
}



module.exports=getAllUserDeta;