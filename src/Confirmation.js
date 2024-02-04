// Confirmation.js
import React, { useEffect } from 'react';
import QRCode from 'qrcode.react';
import { photos } from './navbar'; // Import as a named export

export default function Confirmation({ qrCodeValue }) {
  useEffect(() => {
    console.log('QR Code Value:', qrCodeValue);
    // You can perform any additional actions with the updated qrCodeValue here
  }, [qrCodeValue]);

  return (
    <div>
      <QRCode value={photos[0].text} />

      {/* Access the 'text' property of the first item in the 'photos' array */}
    
      {/* Additional content for Confirmation component */}
    </div>
  );
}
