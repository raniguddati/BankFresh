const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: false,
  })
);
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", false);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const userSchema = mongoose.model(
      "Test",
      new mongoose.Schema({ name: String })
    );
    await userSchema.findOne();

    mongoose.connection.on("connected", () => "connected.....");
    console.log(`Server is running on ${PORT}`);
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("ERROR connecting to database:", error);
  });
