import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
    setSuccessMessage('');

    try {
      const res = await axios.post("http://localhost:8080/users", formData);

      // Handle successful registration
      console.log('Registration successful:', res.data);
      setSuccessMessage('Registration successful! Please check your email for verification.');
      
      // Optionally redirect the user or clear the form
      // Example:
      // setFormData({ name: '', email: '', password: '' });
      // window.location.href = '/login';

    } catch (error) {
      // Handle error response
      if (error.response) {
        console.error('Registration error:', error.response.data);
        setErrorMessage('Registration failed. Please try again.');
      } else if (error.request) {
        console.error('No response received:', error.request);
        setErrorMessage('No response from server. Please try again later.');
      } else {
        console.error('Error:', error.message);
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
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
          <button type="submit" className="auth-button">Register</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="auth-footer">
          <span>Already have an account? </span>
          <a href="/login">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
