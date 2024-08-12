const z=require('zod');



const schema=z.object({
    email:z.string({required_error:'Fill Email'})
    .trim()
    .max(30,{message:'Email cant be more then 20 letters'})
    .min(7,{message:'Email cant be less then 10 letters'}),


    password:z.string({required_error:'Password Cant be Emty'})
    .trim()
    .max(15,{message:'password cant be more then 15 letters'})
    .min(3,{message:'Passsowrd cant be less then 3 letters'})
});





module.exports=schema;