const express=require('express');
const router=express.Router();
const getAllUserDeta=require('../controller/Get-User')
const userMiddle=require('../middleware/userMiddleware');
const admin=require('../middleware/admin');
const getAllContact=require('../controller/Get-contact')
const DeleteUser=require('../controller/DeleteUser')
const getSingleUser=require('../controller/Admin-getSingleUser');
const updateUser=require('../controller/Admin-updateUser');





router.route('/user').get(userMiddle,admin,getAllUserDeta);
router.route('/contact').get(userMiddle,admin,getAllContact);


router.route('/user/Delete/:id').delete(userMiddle,admin,DeleteUser);

router.route('/user/:id/edit').get(getSingleUser);

router.route('/user/:id/update').patch(updateUser)




module.exports=router;