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

let seedRequests = async (req, res) => {
    try {
        await Request.deleteMany({});
        await Request.create()
        res.send("Seeded DB");
    } catch(err){
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
}

export default { createRequest, readRequests, updatedRequest, deleteRequest, seedRequests };

