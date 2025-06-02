import dotenv from "dotenv";
import User from "../models/userSchema.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


dotenv.config();

let register = async (req, res) => {
    //Destructure the req.body
    const { username, email, password } = req.body;

    //Check if user submitted all required information, if not return
    if(!username || !email || !password || !location) {
        return res.status(400).json({msg: "All fields are required."})
    };

    try {
    //Check if user exists already
    let user = await User.findOne({email});
    // If exists, return with error
    if (user) {
       return res.status(400).json({msg: "Email Already Exists"});
    }
    //Create a new user, do nost save to DB yet
    user = new User({username, email, password, location})

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    //Save user to create a unique mondoDB _id
    await user.save();

    const payload = {
        user: {
            id: user._id,
        },
    };

    jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 36000},
        (err, token) => {
            if (err) throw err;
            res.status(201).json({token});
        }
    );     
    } catch (err) {
        console.error(err)
    }
};