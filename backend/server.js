const express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
require('dotenv').config();
const app=express();
app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is running on 5000`);
    });
app.use(cors());
app.use(express.json());
const url=process.env.ATLAS_URI;
mongoose.connect(url,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true});
const connection=mongoose.connection;
connection.once('open',()=>{
console.log('database successfully connected');
})
const signupRouter=require('./routes/signup');
const loginRouter=require('./routes/login');
app.use('/signup',signupRouter);
app.use('/login',loginRouter);