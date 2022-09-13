import PostMessage from "../models/postMessage.js";

export const getPost = async (req,res) => {
    try {
        const postMassge = await PostMessage.find();
        console.log("🚀 ~ file: post.js ~ line 6 ~ getPost ~ postMassge", postMassge)
        res.status(200).json(postMassge)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
};

export const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (e) {
        res.status(409).json({message: e.message})
    }
}