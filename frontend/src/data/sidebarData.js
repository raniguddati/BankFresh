
import {FaChartLine, FaExchangeAlt,FaCreditCard,FaUser, FaCog,FaSignOutAlt } from 'react-icons/fa';

export const sidebarLinks = [
    { id: 1, title: 'Dashboard', icon: <FaChartLine />, link:"/dashboard" },
    { id: 2, title: 'Transactions', icon: <FaExchangeAlt />,link:"/transactions"},
    { id: 3, title: 'Cards', icon: <FaCreditCard />,link:"/cards"},
    { id: 4, title: 'Account', icon: <FaUser />,link:"/account" },
    { id: 5, title: 'Settings', icon: <FaCog />,link:"/settings"},
    { id: 6, title: 'Log Out', icon: <FaSignOutAlt />,link:"/logout" },
  ];