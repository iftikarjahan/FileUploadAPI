const path=require("path");
const {StatusCodes}=require("http-status-codes");


const uploadFileController=async (req,res,next)=>{
    let filetbup;
    // path from where I will upload the extracted file
    
    // check
    if(!req.files || Object.keys(req.files).length===0){
        return res.status(StatusCodes.NOT_FOUND).send("No files were uploaded");
    }
    filetbup=req.files.uploadedImage;
    const uploadPath=path.join(__dirname,"..","public","uploads",filetbup.name);
    await filetbup.mv(uploadPath); 
    res.status(StatusCodes.OK).json({image:{src:`/uploads/${filetbup.name}`}})
}


module.exports=uploadFileController;

