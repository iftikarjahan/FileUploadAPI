const {StatusCodes}=require("http-status-codes");

const notFound=(req,res,next)=>{
    res.status(StatusCodes.NOT_FOUND).send("The address you eneterd is not valid. Route does not exist");
}

module.exports=notFound;