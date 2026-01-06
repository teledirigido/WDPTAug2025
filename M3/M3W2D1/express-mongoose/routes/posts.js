const express = require('express');
const router = express.Router(); 

// 1. Import the model into this file
const Post = require('../models/Post.model');

// 2. Create the route to handle the model

/* 
router.get Promise based
------------------------
router.get('/posts', (req, res) => {
  Post.find().then( posts => {
    res.json(posts);
  });
});
 
**/

/* router.get async/await based */
// Get all posts
router.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Get single post
router.get('/posts/:id', async (req,res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.json(post);
  } catch (error) {
    res.json(error)
  }
});

// Create a post
router.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  const newPost = await Post.create({ title, content });
  res.json(newPost);
});

// Delete a post
router.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.json({ 'message': `Post ${id} has been deleted` });
  } catch (message) {
    res.json(message);
  }
});

// Update a post
router.put('/posts/:id', async (req,res) => {
  // 1. read the post id
  const { id } = req.params;
  
  // 2. read the req.body with updated content
  const { title, content } = req.body;

  // 3. perform a Mongoose method to update the Post
  const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });

  res.json(updatedPost);

});

module.exports = router;