import React, { useState } from 'react';
import './ElectricityBillsRecharge.css';
import logo from '../../assets/T.jpg';

const ElectricityBills = ({ currentBalance, setCurrentBalance, setTransactionHistory }) => {
  const [consumerId, setConsumerId] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handlePayment = () => {
    if (!consumerId || !amount) {
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
      { type: 'Electricity Bill', amount: `₹${amount}`, to: consumerId, date: new Date().toLocaleString() }
    ]);

    setShowPopup(true);
    setError('');
    setConsumerId('');
    setAmount('');
  };

  return (
    <div className="bill-container">
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
      <h2>Electricity Bill Payment</h2>
      <form className="bill-form">
        <input
          type="text"
          placeholder="Consumer ID"
          value={consumerId}
          onChange={(e) => setConsumerId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error && <p className="bill-error">{error}</p>}
        <button type="button" onClick={handlePayment}>Pay Bill</button>
        {showPopup && (
          <div className="bill-success">
            <h3>Payment Successful!</h3>
            <p>₹{amount} has been deducted.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ElectricityBills;
