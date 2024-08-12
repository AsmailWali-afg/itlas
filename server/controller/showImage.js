
const product=require('../model/ProductsSchema');
const showImage=async(req,res)=>{
    const detaBackend=await product.find();

    res.status(200).json({deta:detaBackend})

}


module.exports=showImage;