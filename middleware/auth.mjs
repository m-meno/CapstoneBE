import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

export default async function (req, res, next) {
    //get token from header 
    let token = req.header("token");

    //check if token exists, if not, response with error
    if (!token) {
        res.status(401).json({msg: "No token, auth denied"})
    }
    try {
        const decoded = jwt.verify(token, process.env.jwtSecret);

        req.user = decoded.user.id;
      
        next(); //go to your route
    } catch (err) {
        console.log(err.message);
        res.status(401).json({msg: "Invalid Token"})
    }
}