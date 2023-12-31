const express = require("express");
const app = express();
const PORT = 8000;
const {connectMongoDb} =require('./connection');
const userRouter = require("./routes/user");
//connection of mongoose
connectMongoDb("URL to connect mongoDB");



//MiddleWare
app.use(express.urlencoded({ extended:false}));



//routes
app.use("/user", userRouter);



app.listen(PORT, ()=>{
    console.log("SERVER STARTED!");
});
