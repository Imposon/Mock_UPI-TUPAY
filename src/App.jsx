import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn, SignUp, UserButton } from '@clerk/clerk-react';
import Sidebar from './Sidebar';

import Mainpage from './Mainpage/mainpage';
import Bank from './function/bank/bank';
import Phone from './function/phone/phone';
import Balance from './function/Balance/balance';
import PhoneRecharge from './function/billPayments/PhoneRecharge';
import ElectricityBills from './function/billPayments/ElectricityBills';
import WifiDthRecharge from './function/billPayments/WifiDthRecharge';
import QR from './Mainpage/qr';

const App = () => {
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Public Routes */}
      <SignedOut>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<SignIn redirectUrl="/" />} />
          <Route path="/signup" element={<SignUp redirectUrl="/" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </SignedOut>

      <SignedIn>
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            cursor: 'pointer',
            zIndex: 1000, 
          }}
          onClick={toggleSidebar}
        >
          <div style={{ width: '30px', height: '3px', backgroundColor: 'black', margin: '6px 0' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'black', margin: '6px 0' }}></div>
          <div style={{ width: '30px', height: '3px', backgroundColor: 'black', margin: '6px 0' }}></div>
        </div>

        {/* Sidebar Component */}
        <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/bank" element={<Bank currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} transactionHistory={transactionHistory} setTransactionHistory={setTransactionHistory} />} />
          <Route path="/phone" element={<Phone currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} transactionHistory={transactionHistory} setTransactionHistory={setTransactionHistory} />} />
          <Route path="/balance" element={<Balance currentBalance={currentBalance} transactionHistory={transactionHistory} />} />
          <Route path="/phone-recharge" element={<PhoneRecharge currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} transactionHistory={transactionHistory} setTransactionHistory={setTransactionHistory} />} />
          <Route path="/electricity-bills" element={<ElectricityBills currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} transactionHistory={transactionHistory} setTransactionHistory={setTransactionHistory} />} />
          <Route path="/wifi-dth" element={<WifiDthRecharge currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} transactionHistory={transactionHistory} setTransactionHistory={setTransactionHistory} />} />
          <Route path="/qr" element={<QR />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </SignedIn>
    </>
  );
};

export default App;
