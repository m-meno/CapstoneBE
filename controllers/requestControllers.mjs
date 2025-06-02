import Request from "../models/requestSchema.mjs";

let createRequest = async (req, res) => {
    const newRequest = await Request.insertOne(req.body);

    res.status(201).json(newRequest)
};

let readRequests = async (req, res) => {
    const allRequests = await Request.find({});
    res.json(allRequests)
};

let updatedRequest = async (req, res) => {
    let updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.json(updatedRequest);
};


let deleteRequest = async (req, res) => {
    let deleteRequest = Request.findByIdAndDelete(req.params.id);
    res.json(deleteRequest)
}

export default { createRequest, readRequests, updatedRequest, deleteRequest };

