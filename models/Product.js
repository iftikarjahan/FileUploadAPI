const mongoose=require("mongoose");

const ProductSchems=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Product",ProductSchems);

