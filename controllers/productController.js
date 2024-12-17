const Product=require("../models/Product");
const {StatusCodes}=require("http-status-codes");

const getAllProductsController=async (req,res,next)=>{
    const allProducts=await Product.find({});
    res.status(StatusCodes.OK).send({allProducts});
}

const createProductController=async(req,res,next)=>{
    const createdProduct=await Product.create({...req.body});
    res.status(StatusCodes.CREATED).json({createdProduct});
}

module.exports={
    getAllProductsController,
    createProductController
}