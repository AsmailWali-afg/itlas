const {v2} =require('cloudinary')
const fs =require('fs')


    // Configuration
    v2.config({ 
        cloud_name: 'dsfujctlg', 
        api_key: '733371926987954', 
        api_secret:'oS4GgQO7JvVeT3oxVIjL_vWAtF0'
    });




       const uploadCloudnary=async(localFilePath)=>{
        try {

            if (!localFilePath) {
                return null
            }else{
               const response=await v2.uploader.upload(localFilePath,{
                    resource_type:'auto',
                });
                console.log('Success upload to Cloudnary',response.url);
                return  response.secure_url;
            }
            
        } catch (error) {
            fs.unlinkSync(localFilePath)
            console.log(error);
            return null;
        }

       }


module.exports=uploadCloudnary;


