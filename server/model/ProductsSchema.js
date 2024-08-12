const mongoose=require('mongoose');




const producSchema=mongoose.Schema({
        name:String,
        price:Number,
        filepath:[String],
        cloudLink:[String],
        uploadDate:{
            type:Date,
            default:Date.now
        }
});




const product=mongoose.model('product',producSchema);

module.exports=product;