import Post from "../models/postSchema.mjs";

let createPost = async (req, res) => {
    const newPost = await Post.create({
        ...req.body,
        user: req.user,
    });
    res.status(201).json(newPost)
};

let readPosts = async (req, res) => {
    const allPosts = await Post.find({});
    res.json(allPosts)
};

let readOnePost = async (req, res) => {
    const onePost = await Post.findById(req.params.id);
    res.json(onePost)
}

let updatedPost = async (req, res) => {
    let updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.json(updatedPost);
};


let deletePost = async (req, res) => {
    let deletePost = Post.findByIdAndDelete(req.params.id);
    res.json(deletePost)
}

let seedPosts = async (req, res) => {
    try {
        await Post.deleteMany({});
        await Post.create()
        res.send("Seeded DB");
    } catch(err){
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
}

export default { createPost, readPosts, readOnePost, updatedPost, deletePost, seedPosts };

