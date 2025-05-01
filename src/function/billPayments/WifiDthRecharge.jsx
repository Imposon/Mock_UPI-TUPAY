import React, { useState } from 'react';
import './WifiDthRecharge.css';
import logo from '../../assets/T.jpg';

const WifiDthRecharge = ({ currentBalance, setCurrentBalance, setTransactionHistory }) => {
  const [subscriberId, setSubscriberId] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleRecharge = () => {
    if (!subscriberId || !amount) {
      setError('Please fill all fields!');
      return;
    }

    if (parseFloat(amount) > currentBalance) {
      setError('Insufficient balance!');
      return;
    }

    setCurrentBalance(currentBalance - parseFloat(amount));
    setTransactionHistory(prev => [
      ...prev,
      { type: 'WiFi/DTH Recharge', amount: `₹${amount}`, to: subscriberId, date: new Date().toLocaleString() }
    ]);

    setShowPopup(true);
    setError('');
    setSubscriberId('');
    setAmount('');
  };

  return (
    <div className="dth-container">
      <img src={logo} alt="Logo" className="dth-logo" />
      <h2>WiFi / DTH Recharge</h2>
      <form className="dth-form">
        <input
          type="text"
          placeholder="Subscriber ID"
          value={subscriberId}
          onChange={(e) => setSubscriberId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error && <p className="dth-error">{error}</p>}
        <button type="button" onClick={handleRecharge}>Recharge</button>
        {showPopup && (
          <div className="dth-success">
            <h3>Recharge Successful!</h3>
            <p>₹{amount} has been deducted.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default WifiDthRecharge;
