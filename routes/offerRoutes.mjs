import express from "express";
import offerControllers from "../controllers/offerControllers.mjs";
import auth from "../middleware/auth.mjs"

const router = express.Router();

// @route: POST /api/offers
// @desc: create offer route
// @access: Private
router.post("/", auth, offerControllers.createOffer)

// @route: GET /api/offers
// @desc: Get all offers
// @access: Public
router.get("/", offerControllers.readOffers);

// @route: PUT /api/offers
// @desc: Update one offer
// @access: Private
router.put("/:id", auth, offerControllers.updatedOffer)

// @route: DELETE /api/offers
// @desc: Delete one offer
// @access: Private
router.delete("/:id", auth, offerControllers.deleteOffer)

// @route: GET /api/offers/seed
// @desc: Seed DB with offer information
// @access: Public
router.get("/seed", offerControllers.seedOffers)


export default router;
