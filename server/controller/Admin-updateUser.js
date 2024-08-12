const user=require('../model/User-model');




const updateUser=async(req,res)=>{

    const body=req.body;
    const id=req.params.id;
   

    const update=await user.updateOne({_id:id},{$set:body});

    res.status(200).json({masg:'Updated'});

    

}



module.exports=updateUser;