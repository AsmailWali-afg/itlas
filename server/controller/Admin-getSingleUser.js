


const user=require('../model/User-model')




const Getsingle=async(req,res)=>{
    try {
        const Userid=req.params;


        const singleuser=await user.findOne({_id:Userid.id});

        res.status(200).json({deta:singleuser})

    } catch (error) {
        console.log(error);
    }
}



module.exports=Getsingle;