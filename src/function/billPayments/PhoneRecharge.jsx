import React, { useState } from 'react';
import './PhoneRecharge.css';
import logo from '../../assets/T.jpg';

const PhoneRecharge = ({ currentBalance, setCurrentBalance, setTransactionHistory }) => {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleRecharge = () => {
    if (!phone || !amount) {
      setError('Please fill all fields!');
      return;
    }

    if (parseFloat(amount) > currentBalance) {
      setError('Insufficient balance!');
      return;
    }

    const newBalance = currentBalance - parseFloat(amount);
    setCurrentBalance(newBalance);
    setTransactionHistory(prev => [
      ...prev,
      { type: 'Phone Recharge', amount: `₹${amount}`, to: phone, date: new Date().toLocaleString() }
    ]);

    setShowPopup(true);
    setError('');
    setPhone('');
    setAmount('');
  };

  return (
    <div className="recharge-container">
      <img
  src={logo}
  alt="Logo"
  style={{
    width: '220px',        
    height: 'auto',       
    marginBottom: '20px',
    borderRadius: '10px' 
  }}
/>
      <h2>Phone Recharge</h2>
      <form className="recharge-form">
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error && <p className="error-text">{error}</p>}
        <button type="button" onClick={handleRecharge}>Recharge</button>
        {showPopup && (
          <div className="success-popup">
            <h3>Recharge Successful!</h3>
            <p>₹{amount} has been deducted.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PhoneRecharge;
