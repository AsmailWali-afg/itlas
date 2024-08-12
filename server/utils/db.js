const mongoose=require('mongoose')

const URL=process.env.MONGODB_URL;

const mongodb=async()=>{
    try {
       await mongoose.connect(URL);
        console.log('mongoose connected');
        
    } catch (error) {
        console.log(`DetaBASE ${error}`);
    }
};



module.exports=mongodb;
