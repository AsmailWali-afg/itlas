


const Admin=async(req,res,next)=>{
  
    try {
        const deta=req.user;

        if (deta.isAdmin) {
            next()
        }else{
            console.log('Not User'); 
        }
    } catch (error) {
        console.log(error);
    }

}



module.exports=Admin;