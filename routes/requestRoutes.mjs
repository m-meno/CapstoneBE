import express from "express";
import requestControllers from "../controllers/requestControllers.mjs";

const router = express.Router();

// @route: /api/requests
// @desc: Get all requests
// @access: Public
router.get("/", requestControllers.readRequests);

// @route: 
// @desc:
// @access: 