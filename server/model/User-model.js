const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt')


const userSchema=mongoose.Schema({
    name:{
        type:String,
        require,
    },
    email:String,
    phone:Number,
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    },
    teacher:{
        type:Boolean,
        default:false
    },
    student:{
        type:Boolean,
        default:true
    },
    image:{
        type:Buffer,
    },
});



userSchema.pre('save',async function(next) {
    try {
        let password=this.password;
        let salt=await bcrypt.genSalt(10);
        let bcryptPassword=await bcrypt.hash(password,salt);
        this.password=bcryptPassword;
        next();


    } catch (error) {
        console.log(error);
    }
 
}
);
















userSchema.methods.genrateTokean=async function(){
    return jwt.sign({
        id:this._id.toString(),
        password:this.password,
        isAdmin:this.isAdmin,
        isTeacher:this.teacher
    },
    token_key=process.env.KEY)


};









const user=mongoose.model('user',userSchema);


module.exports=user;