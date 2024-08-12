const contact=require('../model/contact-model')


const GetContact=async(req,res)=>{

    try {

        const deta=await contact.find();

        res.status(200).json({contact:deta})
    
        
    } catch (error) {
        console.log(error);
    }


}


module.exports=GetContact;