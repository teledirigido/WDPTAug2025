const express = require('express');
const router = express.Router(); 
const Author = require('../models/Author.model');

// Implement an endpoint to create a new author
router.post('/author', async (req, res) => {

  const { username, email } = req.body;

  const newAuthor = await Author.create({ username, email });
  res.json(newAuthor);

});

module.exports = router;