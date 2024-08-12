const express=require('express');
const router=express.Router();
const contact=require('../controller/contact-control');



router.route('/contact').post(contact);



module.exports=router;