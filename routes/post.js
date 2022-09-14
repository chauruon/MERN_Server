import express from "express";

import {
    getPost,
    createPost,
} from "../controllers/post.js";

const router = express.Router();
// http://localhost:3000/
router.get(`/`,getPost);
router.get(`/`,createPost);

export default router;