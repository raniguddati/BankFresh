const express = require("express");
const router = express.Router();
const cors = require("cors");
const { registerUser, loginUser, getUserData } = require("../controllers/auth");
const authenticateToken = require("../middlewares/auth");

//middleware

router.use(
  cors({
    credentials: false,
    origin: "http://localhost:3000",
  })
);

router.post("/signup", registerUser);
router.post("/login", loginUser);

router.get("/user-data", authenticateToken, getUserData);

module.exports = router;
