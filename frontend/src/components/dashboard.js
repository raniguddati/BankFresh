
import Sidebar from '../layouts/sidebar';
import TopContent from '../layouts/topcontent';
import MainContent from '../layouts/maincontent';
import '../css-styles/dashboard.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NewUserContent from '../layouts/newuser_maincontent';
const Dashboard = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/user-data');

        const { isNewUser } = response.data; 

        setUserData(response.data);
        setIsNewUser(isNewUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="dash-main-container">
      <div className='sidebar-container '>
        <Sidebar />
      </div>
      <div className='topcontent-container'>
        <TopContent />
      </div>
      <div className='maincontent-container'>
        {isNewUser ? (
          <NewUserContent />
        ) : (
          <MainContent />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
