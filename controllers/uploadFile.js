const path=require("path");
const {StatusCodes}=require("http-status-codes");
const CustomError=require("../error")


const uploadFileController=async (req,res,next)=>{
    let filetbup;
    // path from where I will upload the extracted file
    
    // check
    if (!req.files) {
        throw new CustomError.BadRequestError('No File Uploaded');
      }
      const productImage = req.files.image;
      if (!productImage.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError('Please Upload Image');
      }
      const maxSize = 1024 * 1024;
      if (productImage.size > maxSize) {
        throw new CustomError.BadRequestError('Please upload image smaller 1MB');
      }
    filetbup=req.files.uploadedImage;
    const uploadPath=path.join(__dirname,"..","public","uploads",filetbup.name);
    await filetbup.mv(uploadPath); 
    res.status(StatusCodes.OK).json({image:{src:`/uploads/${filetbup.name}`}})
}


module.exports=uploadFileController;

