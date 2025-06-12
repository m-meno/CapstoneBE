import express from "express";
import postControllers from "../controllers/postControllers.mjs";
import auth from "../middleware/auth.mjs";
import upload from "../middleware/multer.mjs";


const router = express.Router();

// @route: POST /api/post
// @desc: create post route
// @access: Private
router.post("/", auth, upload.single('img'), postControllers.createPost)

// @route: GET /api/post
// @desc: Get all posts or get all posts from one user
// @access: Public
router.get("/", postControllers.readPosts);


// @route: GET /api/post/:id
// @desc: Get one post
// @access: Public
router.get("/:id", postControllers.readOnePost);

// @route: PUT /api/post/:id
// @desc: Update one post
// @access: Private
router.put("/:id", auth, upload.single('img'), postControllers.updatedPost)

// @route: DELETE /api/post/:id
// @desc: Delete one post
// @access: Private
router.delete("/:id", auth, postControllers.deletePost)

// @route: GET /api/post/seed
// @desc: Seed DB with post info
// @access: Public
router.get("/seed", postControllers.seedPosts)

export default router;