const serviceDeta=require('../model/service-model')





const service=async(req,res)=>{
    try {
        const deta=req.body;
        const addingPruduct=await serviceDeta.create(deta);

        res.status(200).json({msg:'Deta Added'})

    } catch (error) {
        console.log(error);
    }
}


module.exports=service;