// DashbordHeader.js
import React from 'react';
import saffoLogo from "../assets/saffo logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'; 
import './DashBordheader.css';

function DashbordHeader({ toggleSidebar, handleLogout, employeeId, username }) {
  console.log(employeeId, username);
  return (
    <div className='Dbheader-container'>
      <div className='Dbheader-logo-container'>
        <FontAwesomeIcon icon={faBars} className='Dbh-icon' onClick={toggleSidebar} />  
        <img src={saffoLogo} alt="Saffo Logo" className='Dbh-logo'/> 
      </div> 

      <div className="Dbheader-user-info">
        <span className="Dbheader-username">{username}</span>
        <span className="Dbheader-employee-id">{employeeId}</span>
        <button className='Dbh-logout-button' onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} className='Dbh-logout-icon' />
          Logout
        </button>
      </div>
    </div>
  );
}

export default DashbordHeader;
