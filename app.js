const express=require("express");
const app=express();
const connectDB=require("./db/connect");
const errors=require("./error");
const notFoundMiddleware=require("./middlewares/notFound");
const errorHandlingMiddleware=require("./middlewares/errorHandling");

require("dotenv").config();

app.get("/",(req,res,next)=>{
    res.send("File Upload APIii");
})

app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);

const PORT=process.env.PORT || 3300;

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connected to DB👻");  
        app.listen(PORT,()=>{
            console.log(`Server is listening on port ${PORT}...`);
        }) 
    } catch (error) {
        console.log("Error🚩🚩: ",error);
        
    }
}

start();

