const jwt=require('jsonwebtoken')



const userMiddleWare=async(req,res,next)=>{
    try {
        
        const barerTokean=req.header('Authorization');
        const tokean=barerTokean.replace('bearer','').trim();

        const user=jwt.verify(tokean,'asmail')
        req.user=user;
        req.tokean=tokean;


    } catch (error) {
        console.log(error);
    }

    next()


}


module.exports=userMiddleWare;