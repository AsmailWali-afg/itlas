const product=require('../model/ProductsSchema');


const showSingleImage=async(req,res)=>{
    try {
        const id=req.params.id;

        const producDeta=await product.findOne({_id:id})
        res.status(200).json({deta:producDeta})
        
    } catch (error) {
        console.log(error);
    }
}


module.exports=showSingleImage;