import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import {
  FaMoneyCheckAlt,
  FaMobileAlt,
  FaWallet,
  FaGift,
  FaTrophy,
  FaQrcode,
  FaComments,
  FaWifi
} from 'react-icons/fa';

import logo from '../assets/T.jpg';
import qr from '../assets/qr.jpg';
import bg from '../assets/Bg.png';
import RBIChatbotModal from '../function/RBIChatbotModal';

import './mainpage.css';

const Mainpage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const tiltElements = document.querySelectorAll('.right-panel');
    VanillaTilt.init(tiltElements, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    });
  }, []);

  return (
    <>
      <div
        className="mainpage-wrapper"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(224,247,250,0.85), rgba(227,242,253,0.85)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Main Content */}
        <section className="main-section">
          <div className="section-content" style={{ flexDirection: 'column', alignItems: 'center' }}>
            <div className="logo-hover-container">
              <div className="logo-inner">
                <img src={logo} alt="TU PAY Logo" className="logo-front" />
                <img src={qr} alt="QR Code" className="logo-back" />
              </div>
            </div>
            <h1 style={{ fontSize: '3.5rem', marginTop: '2rem', color: '#0d47a1' }}>
              Welcome to TU-PAY
            </h1>
            <p style={{ fontSize: '1.5rem', color: '#1565c0' }}>
              Your personal banking dashboard
            </p>
          </div>
        </section>

        {/* Bank Transfer Section */}
        <section className="main-section">
          <div className="section-content">
            <div className="left-panel" style={{ flexDirection: 'column' }}>
              <Link to="/bank" style={{ textDecoration: 'none' }}>
                <motion.div className="option-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <FaMoneyCheckAlt className="option-icon" />
                  <h3>Transfer to Bank</h3>
                  <p>Send money securely to any bank account.</p>
                </motion.div>
              </Link>

              <Link to="/phone" style={{ textDecoration: 'none' }}>
                <motion.div className="option-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <FaMobileAlt className="option-icon" />
                  <h3>Transfer to Phone</h3>
                  <p>Send money to any registered mobile number.</p>
                </motion.div>
              </Link>
            </div>

            <div className="right-panel">
              <h2>Bank Transfers</h2>
              <p>You can securely send money to any bank account from your wallet balance.</p>
            </div>
          </div>
        </section>

        {/* Balance Section */}
        <section className="main-section">
          <div className="section-content">
            <div className="left-panel">
              <Link to="/balance" style={{ textDecoration: 'none' }}>
                <motion.div className="option-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <FaWallet className="option-icon" />
                  <h3>Check Balance</h3>
                  <p>Track your current wallet balance and transactions.</p>
                </motion.div>
              </Link>
            </div>
            <div className="right-panel">
              <h2>Wallet Overview</h2>
              <p>Monitor your balance and history in one place.</p>
            </div>
          </div>
        </section>

        {/* Bill Payments */}
        <section className="main-section">
          <div className="section-content">
            <div className="left-panel credits-panel">
              <Link to="/phone-recharge" style={{ textDecoration: 'none' }}>
                <motion.div className="option-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <FaMobileAlt className="option-icon" />
                  <h3>Phone Recharge</h3>
                  <p>Instant prepaid and postpaid recharges.</p>
                </motion.div>
              </Link>

              <Link to="/electricity-bills" style={{ textDecoration: 'none' }}>
                <motion.div className="option-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <FaWallet className="option-icon" />
                  <h3>Electricity Bills</h3>
                  <p>Pay your electricity bills on time and hassle-free.</p>
                </motion.div>
              </Link>

              <Link to="/wifi-dth" style={{ textDecoration: 'none' }}>
                <motion.div className="option-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <FaWifi className="option-icon" />
                  <h3>WiFi/DTH Recharge</h3>
                  <p>Recharge your home broadband or DTH services easily.</p>
                </motion.div>
              </Link>
            </div>

            <div className="right-panel">
              <h2>Bill Payments</h2>
              <p>Use TU-PAY to pay utility bills, recharge phones, and subscribe to broadband/DTH services effortlessly and securely.</p>
            </div>
          </div>
        </section>

        {/* QR & Chatbot Section */}
        <section className="main-section">
          <div className="section-content">
            <div className="left-panel credits-panel">
              <Link to="/qr" style={{ textDecoration: 'none' }}>
                <motion.div className="option-box" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <FaQrcode className="option-icon" />
                  <h3>QR Code Scanner</h3>
                  <p>Scan merchant QR codes to pay instantly using UPI.</p>
                </motion.div>
              </Link>

              <motion.div
                className="option-box"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsChatOpen(true)}
              >
                <FaComments className="option-icon" />
                <h3>UPI Safety Bot</h3>
                <p>Ask anything about safe UPI usage – powered by RBI guidelines.</p>
              </motion.div>
            </div>

            <div className="right-panel">
              <h2>Secure Payments & Guidance</h2>
              <p>Use the QR Scanner for fast payments and consult our RBI chatbot to ensure safe digital transactions.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} This website is made by Aditya Sinha and it is for educational purposes only.</p>
      </div>

      {isChatOpen && <RBIChatbotModal onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default Mainpage;
