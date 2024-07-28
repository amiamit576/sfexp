import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faKey, faEnvelope, faLock,faPhone,faGlobe,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import saffoLogo from '../assets/saffo logo.png';
import axios from 'axios'

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    employeeId: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: true,
    showPassword: false,
    countryCode: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
        const response = await axios.post('http://localhost:5001/api/auth/signin', formData);
        console.log(response.data);
        // Handle successful signup, e.g., redirect to sign-in page
        navigate('/signin');
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data); // Backend error message
          console.error(error.response.status); // HTTP status code
          console.error(error.response.headers); // Response headers
          alert('Error: ' + error.response.data.message); // Show backend error message
        } else if (error.request) {
          // The request was made but no response was received
          console.error(error.request);
          alert('No response received from server.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
          alert('An error occurred during signup. Please try again.');
        }
      }
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-box">
        <form onSubmit={handleFormSubmit}>
          <div className="login-container" />
          <div className="imgcontainer">
            <img
              src={saffoLogo}
              alt="saffoTech"
              className="avatar"
            />
          </div>
          <h1 id="title">SignUp</h1>
          <div className="input-group">
            <div className="input-field" id="nameField">
              <FontAwesomeIcon icon={faUserAlt} className='fontIcon'/>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faKey} className='fontIcon'/>
              <input
                type="text"
                name="employeeId"
                placeholder="Employee ID"
                value={formData.employeeId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field" id="emailField">
              <FontAwesomeIcon icon={faEnvelope} className='fontIcon'/>
              <input
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='fontIcon'/>
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field" id="confirmPasswordField">
              <FontAwesomeIcon icon={faLock} className='fontIcon' />
              <input
                type={formData.showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Labels for country code and phone number inputs */}
            <div className='TelephoneSection'>
              <div className="input-field">
                
                <FontAwesomeIcon icon={faGlobe} className='fontIcon' />
                <input
                  type="text"
                  name="countryCode"
                  id="countryCode"
                  className='CountryCode'
                  placeholder="+91"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faPhone} className='fontIcon' />   
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className='phoneNumber'
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-container">
            <label className="left-checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              /> Remember me
            </label>
            <label className="right-checkbox">
              <input
                type="checkbox"
                name="showPassword"
                checked={formData.showPassword}
                onChange={handleChange}
              /> Show password
            </label>
          </div>
          <div className="btn-field">
            <button type="submit" id="SignUpBtn">
              SignUp
            </button>
            <button type="button" id="SignInBtn" className="signup" onClick={() => navigate("/signin")}>
              <span>SignIn</span>
            </button>
          </div>
              <div className='btn-field  home'>
              {/* Replace the Home button with a Font Awesome icon */}
              <button type="button" id="Home" onClick={() => navigate("/")}>
                <FontAwesomeIcon icon={faArrowLeft} /> Home
              </button>
              </div>

        </form>
      </div>
    </div>
  );
}

export default Signup;
