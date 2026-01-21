const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User.model');

const router = express.Router();
const saltRounds = 10;

// 1. POST auth/signup
// To create an account or sign up
router.post('/signup', (req, res) => {

  const { email, password, name } = req.body;

  // HTML validation: 
  // <input name="email" type="email" required placeholder="Email">
  // Backend validation:
  if ( email === '' || password === '' || name === '') {
    res.status(400).json({ message: 'Please fill up all required field' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ message: 'Provide a valid email address.' });
    return;
  }

  // Use regex to validate the password format
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }  

  User.findOne({ email })
    .then( (foundUser) => {
      
      if (foundUser) {
        res.json({ message: 'User already exists' });
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      return User.create({ email, password: hashedPassword, name });
  }).then( (createdUser) => {

    // You can do this:
    // const { email, name, _id } = createdUser;
    // const user = { email, name, _id };

    // Or this:
    res.json({
      _id: createdUser.id,
      email: createdUser.email,
      name: createdUser.name,
    }); // We should never pass the hashedPassword here
  }) 

});

// 2. POST auth/login
// To login
router.post('/login', (req, res) => {

  const { email, password } = req.body; // email: admin@ironhack.com | password: 12345

  if ( email === '' || password === '' ) {
    res.json({ message: 'Provide email and password' });
  }

  User.findOne({ email })
    .then( (foundUser) => {
      
      if (!foundUser) {
        // res.json({ message: 'Provide a valid email and password' });
        res.json({ message: 'User not found' });
        return;
      }

      // comparing 12345 with 5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5
      // This comparison is WRONG: ➡️ if ( password === foundUser.password )
      // This is correct ⬇️
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

      if (passwordCorrect) {
        
        // user is found and password is correct
        const { _id, email, name } = foundUser;
        const payload = { _id, email, name };

        // ✨ HERE WE CREATE THE JSON WEBTOKEN
        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        );

        res.json({ authToken: authToken });
        // Output:
        // "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTY5MjYzZGEyNjgzMjRjY2MwNjc2N2MiLCJlbWFpbCI6Im1pZ3VlbEBpcm9uaGFjay5jb20iLCJuYW1lIjoiTWlndWVsIElyb25oYWNrIiwiaWF0IjoxNzY4NDk4OTA1LCJleHAiOjE3Njg1MjA1MDV9.HWBDQI8zMzXnbUGf86GDBMyNtH1PWhKhWQfpfMOosuk"


      } else {
        res.json({ message: "Unable to authenticate" })
      }

    })


})


// 3. GET auth/verify
// To verify protected routes

module.exports = router;