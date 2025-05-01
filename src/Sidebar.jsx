import React from 'react';
import { Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { signOut } = useClerk(); 

  const handleLogout = () => {
    signOut();
    closeSidebar(); 
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>X</button>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bank">Bank</Link>
        </li>
        <li>
          <Link to="/phone">Phone</Link>
        </li>
        <li>
          <Link to="/balance">Balance</Link>
        </li>
        <li>
          <Link to="/phone-recharge">Phone Recharge</Link>
        </li>
        <li>
          <Link to="/electricity-bills">Electricity Bills</Link>
        </li>
        <li>
          <Link to="/wifi-dth">WiFi/DTH Recharge</Link>
        </li>
        <li>
          <Link to="/qr">QR Scanner</Link>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
