// Confirmation.js
import React from 'react';
import QRCode from 'qrcode.react';

export default function Confirmation({ qrCodeValue }) {
  console.log('QR Code Value:', qrCodeValue); //
  return (
    <div >
      <QRCode value="Applejvfkujshjkshgrjhrgjdfhjjfjjj" />
   
    </div>
  );
}

// ... (rest of the styles and code)
