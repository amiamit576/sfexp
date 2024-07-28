import React, { useState } from 'react';
import './DashBoardsidebar.css';
import { FaTachometerAlt, FaUser, FaClock, FaClipboardList, FaSignOutAlt, FaFileAlt, FaPowerOff,FaAngleUp,FaAngleDown} from 'react-icons/fa';

const DashBoardSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState({
    profile: false,
    leave: false,
    offboard: false,
  });

  const handleDropdownClick = (section) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="dbsideBarContainer">
      <div className="dbsideSection">
        <FaTachometerAlt className="dbside-logo-icon" />
        <span>Dashboard</span>
      </div>

      <div className="dbsideSection" onClick={() => handleDropdownClick('profile')}>
        <FaUser className="dbside-logo-icon" />
        <span>Profile {openDropdown.profile ? <FaAngleDown  className='dsbAngle'/> : <FaAngleUp className='dsbAngle' />}</span>
      </div>
      {openDropdown.profile && (
        <ul className="dbside-list-container">
          <li>Family Details</li>
          <li>Employee</li>
          <li>Download Documents</li>
          <li>Change Password</li>
          <li>Profile</li>
        </ul>
      )}

      <div className="dbsideSection">
        <FaClock className="dbside-logo-icon" />
        <span>Inout</span>
      </div>

      <div className="dbsideSection">
        <FaClipboardList className="dbside-logo-icon" />
        <span>Attendance</span>
      </div>

      <div className="dbsideSection" onClick={() => handleDropdownClick('leave')}>
        <FaFileAlt className="dbside-logo-icon" />
        <span>Leave {openDropdown.leave ? '↑' : '↓'}</span>
      </div>
      {openDropdown.leave && (
        <ul className="dbside-list-container">
          <li>apply Leave</li>
          <li>Approval Manager</li>
        </ul>
      )}

      <div className="dbsideSection" onClick={() => handleDropdownClick('offboard')}>
        <FaSignOutAlt className="dbside-logo-icon" />
        <span>OffBoard {openDropdown.offboard ? '↑' : '↓'}</span>
      </div>
      {openDropdown.offboard && (
        <ul className="dbside-list-container">
          <li>Exit request</li>
        </ul>
      )}

      <div className="dbsideSection dbsideLogout">
        <FaPowerOff className="dbside-logo-icon logout" />
        <span className='dbhlogout'>Logout</span>
      </div>
    </div>
  );
};

export default DashBoardSidebar;
