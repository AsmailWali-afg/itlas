
// const imge=require('../model/imageSchema');
// const cloud=require('../utils/cloudnary');
const product=require('../model/ProductsSchema');
const uploadCloudnary =require('../utils/cloudnary');
const path =require('path')
const sharp =require('sharp')

const upload=async(req,res)=>{
    try {
      
        const {name,price}=req.body;

        const image=req.files.map((file,index)=>{
            let origenalPath='';
            let resizeImg='';

            // Resizing Image
            const resize=async()=>{

            origenalPath=path.join(__dirname,'../upload/origenal',file.filename);
            resizeImg=path.join(__dirname,'../upload/resize',file.filename);
            try {
                sharp(origenalPath)
               .resize(300,200)
               .toFile(resizeImg)
           } catch (error) {
               console.log(error);
           }

            }
            resize()
            // ///////
            return `${file.filename}`;
        });




                       // Uploadin to Cloudnary

        const cloudLink=req.files.map(async(file,index)=>{
            try {

                const imgUrls=await uploadCloudnary(file.path);
                
                return imgUrls
            
            } catch (error) {
                console.log(error);
            }
               
                    
        });
              /////////
            const pr=await Promise.all(cloudLink);
      
       

        const deta=await product.create({
              name:name,
              price:price,
              filepath:image,
              cloudLink:pr
            });

            res.status(200).json({product:deta})








          



    } catch (error) {
        console.log(error);
    }
}

module.exports=upload;