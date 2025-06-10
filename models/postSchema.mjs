import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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