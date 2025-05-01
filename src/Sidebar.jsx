import React from 'react';
import { Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react'; // Import Clerk's `useClerk` hook
import './Sidebar.css'; // Add styles for the sidebar

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { signOut } = useClerk(); // Get the signOut function from Clerk

  const handleLogout = () => {
    signOut();
    closeSidebar(); // Close the sidebar when logout occurs
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
        {/* Add the Logout Button */}
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
