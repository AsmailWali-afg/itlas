const user=require('../model/User-model');



const ragister=async(req,res)=>{
    try {
        const{name,email,phone,password,image}=req.body;
        const exist=await user.findOne({email})


        if (exist) {
            res.status(200).json({msg:'user Exist'}) 
            console.log('user exist');
        }

        else{
            const detaSender=await user.create({name,email,phone,password,image});
            res.status(200).json({tokean:await detaSender.genrateTokean()}) 
        }


    } catch (error) {
        console.log(error);
    }
};



module.exports=ragister