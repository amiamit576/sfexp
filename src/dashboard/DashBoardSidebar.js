import React, { useState } from 'react';
import './DashBoardsidebar.css';
import { FaTachometerAlt, FaUser, FaClock, FaClipboardList, FaSignOutAlt, FaFileAlt, FaPowerOff, FaSearch,FaAngleDown,FaAngleUp } from 'react-icons/fa';

const DashBoardSidebar = ({handleLogout}) => {
  const [openDropdown, setOpenDropdown] = useState({
    profile: false,
    leave: false,
    offboard: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleDropdownClick = (section) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const sidebarItems = [
    { name: "Dashboard", icon: <FaTachometerAlt className="dbside-logo-icon" />, dropdown: false },
    { name: "Profile", icon: <FaUser className="dbside-logo-icon" />, dropdown: true, items: ["Family Details", "Employee", "Download Documents", "Change Password", "Profile"] },
    { name: "Inout", icon: <FaClock className="dbside-logo-icon" />, dropdown: false },
    { name: "Attendance", icon: <FaClipboardList className="dbside-logo-icon" />, dropdown: false },
    { name: "Leave", icon: <FaFileAlt className="dbside-logo-icon" />, dropdown: true, items: ["Apply Leave", "Approval Manager"] },
    { name: "OffBoard", icon: <FaSignOutAlt className="dbside-logo-icon" />, dropdown: true, items: ["Exit request"] },
  ];

  return (
    <div className="dbsideBarContainer">
      <div className="dbsearch">
      
        <input
          type="text"
          placeholder="Search..."
          className="dbsSearchinput"
          value={searchTerm}
          onChange={handleSearch}

        />
          <FaSearch className="dbside-logo-icon" />
      </div>
      {sidebarItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        (item.dropdown && item.items.some(subItem => subItem.toLowerCase().includes(searchTerm)))
      ).map((item, index) => (
        <div key={index}>
          <div className="dbsideSection" onClick={() => item.dropdown && handleDropdownClick(item.name.toLowerCase())}>
            {item.icon}
            <span>{item.name} {item.dropdown && (openDropdown[item.name.toLowerCase()] ? <FaAngleDown  className='dsbAngle'/> : <FaAngleUp className='dsbAngle' />)}</span>
          </div>
          {item.dropdown && openDropdown[item.name.toLowerCase()] && (
            <ul className="dbside-list-container">
              {item.items.filter(subItem => subItem.toLowerCase().includes(searchTerm)).map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="dbsideSection dbsideLogout" onClick={handleLogout}>
        <FaPowerOff className="dbside-logo-icon logout" />
        <span className='dbhlogout'>Logout</span>
      </div>
    </div>
  );
};

export default DashBoardSidebar;