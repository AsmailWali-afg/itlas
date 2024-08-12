const contactModel=require('../model/contact-model')


const contact=async(req,res)=>{
    try {
        const deta=req.body;
        const detaSender=await contactModel.create(deta);
        res.status(200).json({msg:'Deta Added'})
    } catch (error) {
        console.log(error);
    }
};



module.exports=contact;