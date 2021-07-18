 //import cloudinary modules
 const cloudinary=require("cloudinary").v2; 
const multer=require("multer")
 const {CloudinaryStorage}=require("multer-storage-cloudinary")

//configure cloudinary
cloudinary.config({
    cloud_name:'dh8amkhcf',
         api_key:'836138837284545',
    api_secret:'qSgpQFN_fgL96slh_ikboYN2CRM'
 })
 //configure multer-storage-cloudinary
 const ClStorage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:async (req,file)=>{
        return{
              folder:"first",
             public_id:file.fieldname+'-'+Date.now()
        }

    }
 })
 //configure multer
const multerObj=multer({storage:ClStorage})

module.exports=multerObj;