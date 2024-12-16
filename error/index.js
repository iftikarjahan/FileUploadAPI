const BadRequestError=require("./BadRequestError");
const CustomAPIError=require("./CustomAPIError");
const NotFoundError=require("./NotFoundError");
const UnauthenticatedError=require("./UnauthenticatedError");

module.exports={
    BadRequestError,
    CustomAPIError,
    NotFoundError,
    UnauthenticatedError
}