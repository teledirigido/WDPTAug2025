const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Here we define a new structure schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  publishedDate: {
    type: Date,
    default: Date.now
  }
});

// Here we create a new model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;