//Imports 
import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/conn.mjs';


//Setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
connectDB();

//Routes

//Error handling middleware

//Listener
app.listen(PORT, ()=>{
    console.log(`Server connected on Port: ${PORT}`)
})