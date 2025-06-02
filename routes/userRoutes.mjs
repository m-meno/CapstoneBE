import express from "express";
import userControllers from "../controllers/userControllers.mjs";

const router = express.Router

// @route: POST /api/user/register
// @desc: register user route
// @access: Public
router.post("/register", userControllers.register);

// @route: POST /api/user/login
// @desc: user login
// @access: Public
router.post("/login", userControllers.login);

// @route: 
// @desc:
// @access: 

// @route: 
// @desc:
// @access: 

export default router;