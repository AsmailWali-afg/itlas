const mongoose=require('mongoose');




const serviceSchema=mongoose.Schema({
    name:String,
    price:Number,
    photo:String,
    discount:Number,
});




const service=mongoose.model('service',serviceSchema);



module.exports=service;