import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Email address must be valid !",
        ],
    },
    password: { type: String, required: true, minLength: 6 },
    location: {type: String, required: true}
});

export default mongoose.model("User", userSchema);