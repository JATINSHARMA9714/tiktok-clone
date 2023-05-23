import express from "express";
import mongoose from 'mongoose';

//app configs
const app=express();
const port=process.env.PORT || 8000;
//middlewares


//db configs



//api endpoints
app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
})


//listeners
app.listen(port,()=>{
    console.log('Server is running on port '+port);
})