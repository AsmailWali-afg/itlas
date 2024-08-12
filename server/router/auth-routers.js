const express=require('express');
const router=express.Router()
const ragister=require('../controller/ragister-control')
const login=require('../controller/login-control');
const validateSchema=require('../validator/user-validator');
const validate=require('../middleware/vilidator');
const schema=require('../validator/login-validators');
const userMiddleWare=require('../middleware/userMiddleware');
const user=require('../controller/loginUser');
const service=require('../controller/service');
const serviceDeta=require('../controller/Get-Service');
const uploader=require('../controller/Uploader');
const upload=require('../middleware/multer-Middleware')
const showImage=require('../controller/showImage');
const deleteService=require('../controller/deleteService')
const showSingleImage=require('../controller/showSingleImage')


router.route('/upload').post(upload.array('images',10),uploader);
router.route('/showImageSinglePro:id').get(showSingleImage);
router.route('/showImage').get(showImage);

router.route('/deleteService:id').delete(deleteService);







router.route('/ragister').post(validate(validateSchema),ragister);
router.route('/login').post(validate(schema),login);
router.route('/user').get(userMiddleWare,user);//get Deta from login user



router.route('/service').post(service);
router.route('/serviceDeta').get(serviceDeta);








module.exports=router;