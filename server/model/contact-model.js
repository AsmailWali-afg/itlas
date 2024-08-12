const mongoose=require('mongoose');



const contactSchema=mongoose.Schema({
    name:{
        type:String,
        default:'No Name',
        require
    },

    email:String,
    message:String
});


const contact=mongoose.model('contact',contactSchema);

module.exports=contact;