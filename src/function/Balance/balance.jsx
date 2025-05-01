import React from 'react';
import './balance.css';

const Balance = ({ currentBalance, transactionHistory }) => {
  const sortedTransactions = [...transactionHistory].reverse();

  return (
    <div className="balance-container">
      <h2>Your Current Balance</h2>
      <p className="balance-amount">{currentBalance} points</p>

      <div className="transaction-history">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>To/From</th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-transactions">No transactions yet</td>
              </tr>
            ) : (
              sortedTransactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.to || 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Balance;
