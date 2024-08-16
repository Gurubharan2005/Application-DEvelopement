import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.get('http://localhost:8080/user', {
        params: {
          uname: formData.email,
          pass: formData.password
        }
      });

      // Handle successful login response
      console.log('Login successful:', response.data);

      // You can store the token or user data in localStorage or context
      // localStorage.setItem('token', response.data.token);

      // Redirect to the home page
      navigate('/'); // Redirect to the home page

    } catch (error) {
      // Handle error response
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Login error:', error.response.data);
        setErrorMessage('Login failed. Please check your credentials and try again.');
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
        setErrorMessage('No response from server. Please try again later.');
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome</h1>
        <FontAwesomeIcon icon={faEnvelope} />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="login-footer">
          <a href="#">Forgot password?</a>
          <span> | </span>
          <Link to="/register" className="link">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
