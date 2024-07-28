import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import saffoLogo from '../assets/saffo logo.png';
import './Signin.css';
import axios from 'axios';

function SignIn() {
  const [formValues, setFormValues] = useState({
    employeeId: "",
    password: "",
    rememberMe: true,
    showPassword: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/signin', {
        employeeId: formValues.employeeId,
        password: formValues.password
      });
      console.log(response.data);

      if (response.data.success) {
        // Handle successful signin, e.g., save the token and redirect
        navigate('/dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        alert('Error: ' + error.response.data.message);
      } else if (error.request) {
        console.error(error.request);
        alert('No response received from server.');
      } else {
        console.error('Error', error.message);
        alert('An error occurred during signin. Please try again.');
      }
    }

    console.log("Sign In:", formValues);
  };

  return (
    <main>
      <div className="container">
        <div className="form-box">
          <form onSubmit={handleSignIn}>
            <div className="login-container" />
            <div className="imgcontainer">
              <img src={saffoLogo} alt="saffoTech" className="avatar" />
            </div>
            <h1 id="title">SignIn</h1>
            <div className="input-group">
              <div className="input-field">
                <FontAwesomeIcon icon={faKey} className='fontIcon'/>
                <input
                  type="text"
                  placeholder="Employee ID"
                  name="employeeId"
                  value={formValues.employeeId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className='fontIcon'/>
                <input
                  type={formValues.showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-container">
              <label className="left-checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formValues.rememberMe}
                  onChange={handleInputChange}
                />{" "}
                Remember me
              </label>
              <label className="right-checkbox">
                <input
                  type="checkbox"
                  name="showPassword"
                  checked={formValues.showPassword}
                  onChange={handleInputChange}
                />{" "}
                Show password
              </label>
            </div>
            <p className="forgetPsw">
              Forget password <a href="#" onClick={() => navigate("/resetpsw")}>Click Here</a>
            </p>
            <div className="btn-field">
              <button type="button" id="SignUpBtn" onClick={() => navigate("/signup")}>
                SignUp
              </button>
              <button type="submit" id="SignInBtn" className="signup">
                <span>SignIn</span>
              </button>
            </div>
            <div className='btn-field  home'>
              <button type="button" id="Home" onClick={() => navigate("/")}>
                <FontAwesomeIcon icon={faArrowLeft} /> Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
