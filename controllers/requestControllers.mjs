import Request from "../models/requestSchema.mjs";

let readRequests = async (req, res) => {
    const allRequests = await Request.find({});
    res.json(allRequests)
}

let deleteRequest = async (req, res) => {
    let deleteRequest = Request.findByIdAndDelete(req.params.id);
    res.json(deleteRequest)
}

export default {readRequests, deleteRequest};

