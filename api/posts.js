const express = require('express');
const { getAllPosts } = require('../db');
const postsRouter = express.Router();

module.exports = postsRouter;

postsRouter.get("/", async (req, res) => {
    const posts = await getAllPosts()
    res.send({ posts });
});