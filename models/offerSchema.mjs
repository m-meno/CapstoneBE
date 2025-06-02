import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
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
        required: true,
        location: Number,
    },
    img: {
        type: String,
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
});

offerSchema.index({datePosted: 1});

export default mongoose.model("Offer", offerSchema);