import express from "express";
import { createPost, getPosts } from "../controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);

export default router;
