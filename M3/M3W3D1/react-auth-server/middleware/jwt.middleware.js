const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  
  try {
    // token reads the header authorization request
    const token = req.headers.authorization.split(" ")[1];

    // payload verifies with jwt.verify the token with the TOKEN_SECRET
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    
    // we add a property called "payload", add it into request and assign the value of payload. 
    req.payload = payload;

    console.log(req.payload);

    next();
  } catch (error) {
    res.json('Token not provided, expired or not valid');
  }

}

module.exports = {
  isAuthenticated
}