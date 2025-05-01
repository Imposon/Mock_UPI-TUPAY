import React, { useState } from 'react';
import './phone.css';
import logo from '../../assets/T.jpg';

const Phone = ({ currentBalance, setCurrentBalance, setTransactionHistory }) => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(null);

  const handlePayment = () => {
    setError('');

    if (!phoneNumber || !amount) {
      setError('Please fill all fields!');
      return;
    }

    if (parseFloat(amount) > currentBalance) {
      setError('Insufficient balance!');
      return;
    }

    const newBalance = currentBalance - parseFloat(amount);
    setPaymentAmount(amount);
    setCurrentBalance(newBalance);

    setTransactionHistory(prev => [
      ...prev,
      {
        type: 'Phone Transfer',
        amount: `₹${amount}`,
        to: phoneNumber,
        date: new Date().toLocaleString(),
      },
    ]);

    setShowPopup(true);
    setAmount('');
    setPhoneNumber('');
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="phone-container">
      <img src={logo} alt="TU PAY Logo" className="logo-image" />
      <h2 style={{ textAlign: 'center' }}>Transfer to Phone Number</h2>
      <form className="phone-form">
        <input
          type="text"
          placeholder="Receiver's Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount to Transfer"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handlePayment}>Confirm Payment</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Payment Successful!</h3>
            <p>₹{paymentAmount} has been deducted from your balance.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Phone;
