import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import saffoLogo from "../assets/saffo logo.png";
import "./ResetPsw.css";
import { useNavigate } from "react-router-dom";

function ResetPsw() {
  const navigate = useNavigate();
  return (
    <main>
      <form action="">
        <div className="resetformContainer">
          <div className="imgcontainer">
            <img
              src={saffoLogo}
              alt="saffoTech"
              className="avatar"
            />
          </div>
          <div className="psw" id="password">
      
            <input
              type="password"
              placeholder="Enter Your Password"
              required=""
            />
            <FontAwesomeIcon icon={faLock} className='resetFontICon'/>
     
          </div>
          <div className="confirmPsw" id="confirmPassword">
            <input
              type="password"
              placeholder="Confirm Your Password"
              required=""
            />
            <FontAwesomeIcon icon={faLock} className='resetFontICon'/>
          </div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
          <button type="button" className="btn btn-cancel" onClick={() => navigate("/signin")}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}

export default ResetPsw;
