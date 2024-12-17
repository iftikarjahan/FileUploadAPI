const express=require("express");
const router=express.Router();
const uploadFileController=require("../controllers/uploadFile");

router.route("/uploadImage").post(uploadFileController);

module.exports=router;
