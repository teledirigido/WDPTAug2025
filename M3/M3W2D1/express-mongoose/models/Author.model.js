const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Here we define a new structure schema
const authorSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;