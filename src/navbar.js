import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./apple.css";
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { ReactFinalFormDemo } from './ReactFinalFormDemo';
import QRCode from 'qrcode.react';

function PhoneNumberCheck({ onConfirmation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = async (values) => {
    const phoneNumber = values.PhoneNumber;
    setPhoneNumber(phoneNumber);

    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbw_fjR821w3K0svIiBv4ELBqKVq0oya3_7-ZZpka0EbLAe_vbD3zApepes_RsKPg19I/exec?PhoneNumber=${phoneNumber}`);
      const data = await response.json();

      if (data.exists) {
        console.log("Phone number exists. Redirecting to ReactFinalForm.");
        onConfirmation(phoneNumber);
      } else {
        console.log("Phone number does not exist. Continue with the current component.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          PhoneNumber: '',
        }}
        render={({ handleSubmit }) => (
          <form
            
            action="https://script.google.com/macros/s/AKfycbw_fjR821w3K0svIiBv4ELBqKVq0oya3_7-ZZpka0EbLAe_vbD3zApepes_RsKPg19I/exec"
            method="post"
            className="p-fluid netlify"
            style={{ marginTop: '24em' }}
          >
            <Field
              name="PhoneNumber"
              render={({ input }) => (
                <div className="field">
                  <span className="p-float-label">
                    <InputText
                      id="PhoneNumber"
                      {...input}
                      onChange={(e) => {
                        input.onChange(e);
                        setPhoneNumber(e.target.value);
                        onConfirmation(e.target.value); // Update QR code live
                      }}
                    />
                    <label htmlFor="PhoneNumber">Enter Your Phone Number</label>
                  </span>
                  <QRCode value={phoneNumber} />
                </div>
              )}
            />

            <Button type="submit" label="Attend Sabha" className="mt-2" />
          </form>
        )}
      />
    </div>
  );
}

export default PhoneNumberCheck;

