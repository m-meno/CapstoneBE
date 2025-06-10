import express from "express";
import userControllers from "../controllers/userControllers.mjs";
import auth from "../middleware/auth.mjs";

const router = express.Router()

// @route: POST /api/user/register
// @desc: register user route
// @access: Public
router.post("/register", userControllers.register);

// // @route: POST /api/user/login
// // @desc: user login
// // @access: Public
router.post("/login", userControllers.login);

// @route: GET /api/user/:id
// @desc: get user data
// @access: Private
router.get("/", auth, userControllers.getUser)


export default router;