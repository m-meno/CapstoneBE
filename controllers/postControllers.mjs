import Post from "../models/postSchema.mjs";

let createPost = async (req, res) => {
    try {
        const data = {
            ...req.body,
            user: req.user,
        };

        if (req.file) {
            data.img = req.file.filename
        }

         
    const newPost = await Post.create(data);
    res.status(201).json(newPost)
      
    } catch (err) {
        console.error(err)
    } 
};

let readPosts = async (req, res) => {
    try {
        const { user } = req.query;
        if (user) {
            let getUserPosts = await Post.find({ user: req.query.user });
            res.json(getUserPosts)
        } else {
            const allPosts = await Post.find({});
            res.json(allPosts)
        }
    } catch (err) {
        console.error(err)
    }

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
    let deletePost = await Post.findByIdAndDelete(req.params.id);
    res.json(deletePost)
};


let seedPosts = async (req, res) => {
    try {
        await Post.deleteMany({});
        await Post.create()
        res.send("Seeded DB");
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Server Error" })
    }
}

export default { createPost, readPosts, readOnePost, updatedPost, deletePost, seedPosts };

