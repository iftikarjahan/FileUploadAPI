const {StatusCodes}=require("http-status-codes");

const errorHandlingMiddleware=(err,req,res,next)=>{
    const customErrorObject={
        customStatusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        customErrorMesage:err.message || "Something went wrong....Please try again later"
    }
    if (err.name === 'ValidationError') {
        customErrorObject.customErrorMesage = Object.values(err.errors)
          .map((item) => item.message)
          .join(',')
        customErrorObject.customStatusCode = 400
      }
      if (err.code && err.code === 11000) {
        customErrorObject.customErrorMesage = `Duplicate value entered for ${Object.keys(
          err.keyValue
        )} field, please choose another value`
        customErrorObject.customStatusCode = 400
      }
      if (err.name === 'CastError') {
        customErrorObject.customErrorMesage = `No item found with id : ${err.value}`
        customErrorObject.customStatusCode = 404
      }
    res.status(customErrorObject.customStatusCode).json(customErrorObject.customErrorMesage);
}

module.exports=errorHandlingMiddleware;