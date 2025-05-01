import React from 'react';

const RBIChatbot = () => {
  return (
    <div style={{
      background: '#e3f2fd',
      padding: '1rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '400px'
    }}>
      <h3>💡 RBI UPI Safety Guidelines</h3>
      <ul style={{ paddingLeft: '1rem' }}>
        <li>Never share your UPI PIN or OTP with anyone.</li>
        <li>Only scan QR codes from trusted sources.</li>
        <li>Always verify the recipient's name before sending money.</li>
        <li>Enable app lock and device security.</li>
        <li>Report frauds immediately to your bank or NPCI.</li>
      </ul>
    </div>
  );
};

export default RBIChatbot;
