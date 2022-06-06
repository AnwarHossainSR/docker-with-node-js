import PostModel from "../models/PostModel.js";

// Creat new Post
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get post

export const getPosts = async (req, res) => {
  try {
    return res.status(200).json(await PostModel.find());
  } catch (error) {
    res.status(500).json(error);
  }
};
