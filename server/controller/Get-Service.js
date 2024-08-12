const service=require('../model/service-model')


const serviceDeta=async(req,res)=>{
    
    try {

        const getDeta=await service.find();
        res.status(200).json({deta:getDeta});


    } catch (error) {
        console.log(error);
    }
}



module.exports=serviceDeta