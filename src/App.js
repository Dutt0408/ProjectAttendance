// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Confirmation from './Confirmation';
import Navbar from './navbar';


function App() {
  const [confirmationValue, setConfirmationValue] = useState('');

  return (
    <Routes>
      <Route
        path="/Confirmation"
        element={<Confirmation qrCodeValue={confirmationValue} />}
      />
      <Route
        path="/"
        element={<Navbar onConfirmation={(value) => setConfirmationValue(value)}      qrCodeValue={confirmationValue} />}
      />
     
    </Routes>
  );
}

export default App;
