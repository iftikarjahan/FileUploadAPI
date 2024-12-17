const express=require("express");
const router=express.Router();
const uploadFileController=require("../controllers/uploadFile");
const productsController=require("../controllers/productController");


router.route("/").get(productsController.getAllProductsController).post(productsController.createProductController);
router.route("/uploadImage").post(uploadFileController);

module.exports=router;

