//Imports 
import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/conn.mjs';
import cors from "cors";
import userRoutes from "./routes/userRoutes.mjs";
import offerRoutes from "./routes/offerRoutes.mjs";
import requestRoutes from "./routes/requestRoutes.mjs";
import globalError from './middleware/globalError.mjs';

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
app.use('/api/offers', offerRoutes);
app.use('/api/requests', requestRoutes);


//Error handling middleware
app.use(globalError);

//Listener
app.listen(PORT, ()=>{
    console.log(`Server connected on Port: ${PORT}`)
})