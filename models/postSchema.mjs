import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Offer", "Request"]
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        location: Number
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    img: {
        type: String,
    },

});

postSchema.index({datePosted: 1 });

export default mongoose.model("Post", postSchema);