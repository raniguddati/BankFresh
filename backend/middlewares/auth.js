// middleware/auth.js

const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  console.log("req:", req);
  const token = req.header("Authorization");
  console.log("token:", token);

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
