import Offer from "../models/offerSchema.mjs"

let createOffer = async (req, res) => {
    const newOffer = await Offer.insertOne(req.body);

    res.status(201).json(newOffer)
};

let readOffers = async (req, res) => {
    const allOffers = await Offer.find({});
    res.json(allOffers)
};

let updatedOffer = async (req, res) => {
    let updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.json(updatedOffer);
};


let deleteOffer = async (req, res) => {
    let deleteOffer = Offer.findByIdAndDelete(req.params.id);
    res.json(deleteOffer)
}

export default { createOffer, readOffers, updatedOffer, deleteOffer };