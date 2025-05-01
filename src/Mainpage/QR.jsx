import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QR = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    const handleScanSuccess = (result) => {
      console.log('QR Code Scanned:', result);
      scanner.clear().then(() => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      });
    };

    const handleScanFailure = (error) => {
      console.warn('Scan failed:', error);
    };

    scanner.render(handleScanSuccess, handleScanFailure);

    return () => {
      scanner.clear().catch((error) => {
        console.error('Failed to clear scanner.', error);
      });
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>QR Code Scanner</h2>
      <p>Align the QR code inside the box to scan.</p>
      <div id="reader" style={{ width: '300px', margin: '0 auto' }}></div>
    </div>
  );
};

export default QR;
