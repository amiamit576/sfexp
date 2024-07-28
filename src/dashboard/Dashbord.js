// Dashbord.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashbordHeader from './DashbordHeader';
import DashBoardSidebar from './DashBoardSidebar';
import axiosInstance from '../utils/axiosInstance'; // Adjust import path as per your setup
import styles from './Dashbord.module.css';

function Dashbord() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState({ employeeId: '', username: '' });

  useEffect(() => {
    const employeeId = localStorage.getItem('employeeId');
    const username = localStorage.getItem('username');
    if (employeeId && username) {
      setUser({ employeeId, username });
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.get('/api/auth/logout', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        localStorage.removeItem('token'); // Clear token from local storage
        localStorage.removeItem('employeeId'); // Clear employeeId from local storage
        localStorage.removeItem('username'); // Clear username from local storage
        navigate('/signin');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Logout error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className="dbheadcontainer">
        <DashbordHeader 
          toggleSidebar={toggleSidebar} 
          handleLogout={handleLogout} 
          employeeId={user.employeeId} 
          username={user.username} 
        />
      </div>
      <div className="dbmaincontainer">
        {isSidebarVisible && <DashBoardSidebar handleLogout={handleLogout} />}
        {/* Other dashboard content */}
      </div>
    </div>
  );
}

export default Dashbord;
