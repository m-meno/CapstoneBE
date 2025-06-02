import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
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

requestSchema.index({datePosted: 1 });

export default mongoose.model("Request", requestSchema);