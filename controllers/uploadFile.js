const path = require("path");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../error");
const cloudinary = require("cloudinary").v2;
const fs=require("fs");

const uploadFileController = async (req, res, next) => {
  let filetbup;
  // path from where I will upload the extracted file

  // check
  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Upload Image");
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError("Please upload image smaller 1MB");
  }
  filetbup = req.files.uploadedImage;
  const uploadPath = path.join(
    __dirname,
    "..",
    "public",
    "uploads",
    filetbup.name
  );
  await filetbup.mv(uploadPath);
  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${filetbup.name}` } });
};

const uploadFileControllerUsingCloudinary = async (req, res, next) => {
  // I am going to create a folder where I will store the file temporarily
  console.log(req.files);
  
  const result = await cloudinary.uploader.upload(
    req.files.uploadedImage.tempFilePath,
    {
      use_filename: true,
      folder: "FileUploadAPI",
    }
  );
  fs.unlinkSync(req.files.uploadedImage.tempFilePath);
  res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = uploadFileControllerUsingCloudinary;
