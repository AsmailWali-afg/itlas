const user=require('../model/User-model')




const DeleteUser=async(req,res)=>{
    try {
        const Userid=req.params;


        const deleteDeta=await user.deleteOne({_id:Userid.id});

        res.status(200).json({msg:'delete'})

    } catch (error) {
        console.log(error);
    }
}



module.exports=DeleteUser;