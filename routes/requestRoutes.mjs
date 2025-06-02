import express from "express";
import requestControllers from "../controllers/requestControllers.mjs";

const router = express.Router();

// @route: POST /api/requests
// @desc: create request route
// @access: Private
router.post("/", auth, requestControllers.createRequest)

// @route: GET /api/requests
// @desc: Get all requests
// @access: Public
router.get("/", requestControllers.readRequests);

// @route: PUT /api/requests
// @desc: Update one request
// @access: Private
router.put("/:id", auth, requestControllers.updatedRequest)

// @route: DELETE /api/requests
// @desc: Delete one request
// @access: Private
router.delete("/:id", auth, requestControllers.deleteRequest)