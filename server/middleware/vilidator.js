


const validate=(schema)=>async(req,res,next)=>{
    try {
        const isValid=await schema.parseAsync(req.body);
        req.body=isValid;
        next()
    } catch (err) {
        console.log(err.errors[0].message);

    }
};



module.exports=validate;