import express from "express";
import postControllers from "../controllers/postControllers.mjs";
import auth from "../middleware/auth.mjs";

const router = express.Router();

// @route: POST /api/post
// @desc: create post route
// @access: Private
router.post("/", auth, postControllers.createPost)

// @route: GET /api/post
// @desc: Get all posts
// @access: Public
router.get("/", postControllers.readPosts);

// @route: GET /api/post/:id
// @desc: Get one post
// @access: Public
router.get("/:id", postControllers.readOnePost);

// @route: PUT /api/post/:id
// @desc: Update one post
// @access: Private
router.put("/:id", auth, postControllers.updatedPost)

// @route: DELETE /api/post/:id
// @desc: Delete one post
// @access: Private
router.delete("/:id", auth, postControllers.deletePost)

// @route: GET /api/post/seed
// @desc: Seed DB with post info
// @access: Public
router.get("/seed", postControllers.seedPosts)

export default router;