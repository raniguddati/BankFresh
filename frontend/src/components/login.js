import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css-styles/login.css';
import loginImage from '../assets/login_img.jpg';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();
  const [data, setData]=useState({
    email:'',
    password:'',
  })
  
  
  const handleLogin = async(e) => {
   e.preventDefault();

   const {email,password}=data;

   try {
    const response = await axios.post('/login', {
       email, password
    });

    if (response.data.error) {
      alert("Error: " + response.data.error);
    } 
    else {
      setData({email:"", password:""});
      navigate('/add-card');
    }      

  } catch (error) {
    console.error('Error logging in:', error);
    alert('Failed to log in. Please try again.');
  }
};


  return (
    <div className='main-container'>
    <form className='form-container' onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        className='email-input' type="email" placeholder="Enter your email" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
         
        <input
        className='password-input'
        type="password"
        placeholder="Create a password"
        value={data.password}
        onChange={(e)=>setData({...data, password:e.target.value})}/>

      <div className='btn-cont'>
        <button className='login-btn' type='submit'>Login</button>
      </div>
      <p>
        Don't have an account?{' '}
        <Link to="/signup" className='signup-btn'>
          <button className='signup-btn'>Sign up</button>
        </Link>
      </p> 
      </form>
      <div className='image-container'>
        <img
          src={loginImage}
          alt="Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Login;
