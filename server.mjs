//Imports 
import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/conn.mjs';
import cors from "cors";
import userRoutes from "./routes/userRoutes.mjs" 


//Setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
pp.use(cors()); //cross origin resource sharing
app.use(express.json());
connectDB();

//Routes
app.use('/api/user', userRoutes);


//Error handling middleware

//Listener
app.listen(PORT, ()=>{
    console.log(`Server connected on Port: ${PORT}`)
})