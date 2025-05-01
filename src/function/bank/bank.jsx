import React, { useState } from 'react';
import './bank.css';
import logo from '../../assets/T.jpg';  // Correct path to logo image

const Bank = ({ currentBalance, setCurrentBalance, setTransactionHistory }) => {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(null);

  const handlePayment = () => {
    if (!accountNumber || !ifscCode || !amount) {
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

    setTransactionHistory((prevHistory) => [
      ...prevHistory,
      { type: 'Bank Transfer', amount: `₹${amount}`, to: accountNumber, date: new Date().toLocaleString() }
    ]);

    setShowPopup(true);
    setError('');
    setAmount('');
    setAccountNumber('');
    setIfscCode('');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bank-container">
      <img src={logo} alt="TU PAY Logo" className="logo-image" />
      <h2 style={{ textAlign: 'center' }}>Transfer to Bank Account</h2>
      <form className="bank-form">
        <input
          type="text"
          placeholder="Receiver's Bank Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver's IFSC Code"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount to Transfer"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}

        <button type="button" onClick={handlePayment}>Confirm Payment</button>

        {/* Success message under button */}
        {showPopup && (
          <div className="success-message">
            <h3>Payment Successful!</h3>
            <p>₹{paymentAmount} has been deducted from your balance.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Bank;
