require('dotenv').config();
const express=require('express');
const app=express();
const mongodb=require('./utils/db');
const router = require('./router/auth-routers');
const contact=require('./router/contact-router');
const cors=require('cors')
const admin=require('./router/Admin-route');
const path=require('path')




app.use(express.json());



// app.use(express.static('/upload',express.static(path.join(__filename,'upload'))));
app.use('/upload/origenal',express.static(path.join(__dirname, 'upload/origenal')));
app.use('/upload/resize',express.static(path.join(__dirname, 'upload/resize')));










const corseOptions={
    origin:'https://itlas.vercel.app/',
    methods:'GET,POST,DELETE,PATCH,PUT,HEADT',
    Credential:true
};

app.use(cors(corseOptions));




app.use('/api/auth',router); 
app.use('/api/contact',contact)
app.use('/api/admin',admin)




app.get('/',(req,res)=>{
    res.send('Home page')
})



mongodb().then(()=>{
    const port=process.env.port || 5000;

    app.listen(port,()=>{
        console.log(`Listen to port ${port}`);
    });
    
})

