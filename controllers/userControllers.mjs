import dotenv from "dotenv";
import User from "../models/userSchema.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

let register = async (req, res) => {
    //Destructure the req.body
    const { username, email, password, location } = req.body;

    //Check if user submitted all required information, if not return
    if (!username || !email || !password || !location) {
        return res.status(400).json({ msg: "All fields are required." })
    };

    try {
        //Check if user exists already
        let user = await User.findOne({ email });
        // If exists, return with error
        if (user) {
            return res.status(400).json({ msg: "Email Already Exists" });
        }
        //Create a new user, do nost save to DB yet
        user = new User({ username, email, password, location })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        console.log({ username, email, location})
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
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.status(201).json({ token });
            }
        );
    } catch (err) {
        console.error(err)
    }
};

let login = async (req, res) => {
    const { email, password } = req.body;

    //make sure req.body has email and password 
    if (!email || !password) {
        return res.status(400).json({ msg: "All fields are required" })
    }
    try {
        //check if we have user in DB
        let user = await User.findOne({ email });
        //if they do NOT exist, return with an error
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        //Check to see if password matches, if not return with error
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }
        //create our payload - userId
        const payload = {
            user: {
                id: user._id
            },
        };

        jwt.sign(
            payload,
            process.env.jwtSecret,
            {
                expiresIn: 360000,

            },
            (err, token) => {
                if (err) throw err;

                //send jwt to the frontend
                res.status(201).json({ token })
            }
        )
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"});
    }
};

let getUser = async(req, res) => {
    let user = await User.findById(req.user)
    .select("-password")
    res.json(user)
}

export default { register, login, getUser };

