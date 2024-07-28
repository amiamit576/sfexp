// Dashbord.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashbordHeader from './DashbordHeader';
import DashBoardSidebar from './DashBoardSidebar';
import axiosInstance from '../utils/axiosInstance'; // Adjust import path as per your setup
import styles from './Dashbord.module.css';

function Dashbord() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState({ employeeId: '', username: '' });

  const handleSignIn = async (credentials) => {
    try {
      const response = await axiosInstance.post('/api/signin', credentials);
      if (response.data.success) {
        const { employeeId, username } = response.data.data;
        console.log(employeeId)
        setUser({ employeeId, username });
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.get('/api/auth/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        localStorage.removeItem('token'); // Clear token from local storage
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
        <DashbordHeader toggleSidebar={toggleSidebar} handleLogout={handleLogout} handleSignIn={handleSignIn}/>
      </div>
      <div className="dbmaincontainer">
        {isSidebarVisible && <DashBoardSidebar handleLogout={handleLogout} />}
        {/* Other dashboard content */}
      </div>
    </div>
  );
}

export default Dashbord;
