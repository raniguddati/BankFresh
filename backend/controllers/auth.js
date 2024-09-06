const User = require("../models/user");
const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        reject(error);
      }

      bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
          reject(error);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
const registerUser = async (req, res) => {
  console.log(req);
  debugger;
  try {
    const { name, email, password } = req.body;

    if (name === "" || email === "" || password === "") {
      return res.json({
        status: "FAILED",
        message: "Empty input fields",
      });
    } else if (!/^[a-zA-A ]*$/.test(name)) {
      return res.json({
        status: "FAILED",
        message: "Invalid name entered",
      });
    }

    // Check email uniqueness
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.json({
        status: "FAILED",
        message: "Email is already in use",
      });
    }
    const hashedPassword = await hashPassword(password);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.json(user);
  } catch (error) {}
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existedUser = await User.findOne({ email });

    if (!existedUser) {
      return res.json({ error: "No user found" });
    }

    const passwordsMatch = await comparePassword(
      password,
      existedUser.password
    );
    if (passwordsMatch) {
      try {
        res.json("passwords match");
      } catch (error) {
        console.log("Error", error);
      }
    }
  } catch (error) {}
};

const getUserData = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user data based on user ID
    const userData = await User.findById(userId);

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    // Send relevant user data to the client
    res.json({
      isNewUser: userData.isNewUser,
      cards: userData.cards,
      cardTransactions: userData.cardTransactions,
      savings: userData.savings,
      investments: userData.investments,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
