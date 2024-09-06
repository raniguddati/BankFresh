import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css-styles/signup.css";
import loginImage from "../assets/login_img.jpg";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;
    var req = {
      name,
      email,
      password,
    };
    console.log("req", req);
    await axios
      .post("/signup", req, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if (response.data.error) {
          alert("Error: " + response.data.error);
        } else {
          setData({ name: "", email: "", password: "", confirmPassword: "" });
          alert("Signed up successfully");
          navigate("/login");
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div className="main-container">
      <form className="signup-form-container" onSubmit={handleSignup}>
        <h2>Sign up</h2>

        <input
          className="username-input"
          type="text"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          className="email-input"
          type="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          className="password-input"
          type="password"
          placeholder="Create a password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          className="password-confirm-input"
          type="password"
          placeholder="Confirm password"
          value={data.confirmPassword}
          onChange={(e) => {
            setData({ ...data, confirmPassword: e.target.value });
            setPasswordsMatch(true);
            setRegistrationError(null);
          }}
        />
        {!passwordsMatch && <p>Passwords do not match</p>}

        <div className="btn-cont">
          <button className="s-signupbtn" type="submit">
            Signup
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <button className="s-loginbtn">Login</button>
          </Link>
        </p>
      </form>
      <div className="image-container">
        <img
          src={loginImage}
          alt="Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Signup;
