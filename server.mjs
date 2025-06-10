//Imports 
import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/conn.mjs';
import cors from "cors";
import postRoutes from "./routes/postRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import globalError from './middleware/globalError.mjs';

//Setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(cors()); //cross origin resource sharing
app.use(express.json());
connectDB();
app.use("/uploads", express.static("uploads"))

//Routes
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);


//Error handling middleware
app.use(globalError);

//Listener
app.listen(PORT, ()=>{
    console.log(`Server connected on Port: ${PORT}`)
})