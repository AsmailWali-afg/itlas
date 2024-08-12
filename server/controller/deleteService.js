const product=require('../model/ProductsSchema');






const deleteService=async(req,res)=>{
    try {
        const id=req.params.id;
        const deletePro=await product.deleteOne({_id:id});
        res.status(200).json({deta:deletePro});


    } catch (error) {
        console.log(error);
    }
};


module.exports=deleteService;