import express from "express";
import postControllers from "../controllers/postControllers.mjs";
import auth from "../middleware/auth.mjs";

const router = express.Router();

// @route: POST /api/posts
// @desc: create post route
// @access: Private
router.post("/", auth, postControllers.createPost)

// @route: GET /api/posts
// @desc: Get all requests
// @access: Public
router.get("/", postControllers.readPosts);

// @route: PUT /api/posts/:id
// @desc: Update one post
// @access: Private
router.put("/:id", auth, postControllers.updatedPost)

// @route: DELETE /api/posts/:id
// @desc: Delete one post
// @access: Private
router.delete("/:id", auth, postControllers.deletePost)

// @route: GET /api/posts/seed
// @desc: Seed DB with post info
// @access: Public
router.get("/seed", postControllers.seedPosts)

export default router;