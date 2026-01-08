const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Here we define a new structure schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  publishedDate: {
    type: Date,
    default: Date.now
  },
  author: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

// Here we create a new model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;

// Model: Capital first letter singular
// Collection: All lowercase plural
// Eg: Post -> posts
// Eg: Mushroom -> mushrooms