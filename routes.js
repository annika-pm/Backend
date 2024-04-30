
const express = require('express');
const router = express.Router();
const Author = require('./author.model');
const Blog = require('./blog.model');


router.post('/blog', async (req, res) => {
  try {
    const { title, blogContent, authorName } = req.body;
    const blog = new Blog({ title, blogContent, authorName });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
