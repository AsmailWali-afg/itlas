const z=require('zod');



const validateSchema=z.object({
    name:z.string({required_error:'plzz Enter the Name'})
    .trim()
    .min(3,{message:'Name Cant be At least 3 Character.'})
    .max(10,{message:'Name cant be more then 10 Letters'}),


    email:z.string({required_error:'Email cant be Emty'})
    .max(30,{message:'Email can not be more then 20 Letters'})
    .min(3,{message:'Email cant be least then 3 letters'})
    .trim(),

    phone:z.string({required_error:'Name cant be Emty'})
    .min(3,{message:'phone Cant be less then 3 letters'})
    .max(11,{message:'Phone cant more then 10 letters'})
    .trim(),

    password:z.string({required_error:'Password cant be Emty'})
    .max(15,{message:'password cant be more then 15 letters'})
    .min(3,{message:'password cant be less then 3 letters'})
    .trim()

});





module.exports=validateSchema;