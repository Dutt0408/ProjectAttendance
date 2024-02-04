import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./apple.css";
import "./Images.css"
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


import QRCode from 'qrcode.react';
export const photos = [
      {
          
          text: "Hello"
      },
  ];


function PhoneNumberCheck({ onConfirmation }) {
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const Qrclick = () => {
    setShowQRCode(!showQRCode);
  };
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
       <div className="header">
        <img className="imgheader" src="https://na.baps.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.79f635ad.jpg&w=3840&q=75" alt="HeaderImage"  />
        <div className="header-text">
        <h1 className="RegText">Sabha Attendance</h1>
        </div>
      </div>
      <div className="InputForm">

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
                    <label htmlFor="PhoneNumber">Enter Your Phone Number </label>

                  </span>
                
                </div>
              )}
            />
<div className="btncontainer">
        <div className="btncontainerr">
          <Button type="submit" label="Attend Sabha" className="mt-2 btnspecific" />
          </div>
          <div className="btncontainerr1">
          <Button type="button" className="mt-2 btnspecificc" onClick={Qrclick}>
            <FontAwesomeIcon className="Bcode" icon={faQrcode} />
            
          </Button>
          </div>
      
            
           
            </div>
            
          </form>
          
       
        )}
        
      />
       </div>

       {showQRCode && (
      <div className="Qr">
        <QRCode value={phoneNumber} />
        <Button type="button" className=" dwn" onClick={Qrclick}>
            <FontAwesomeIcon  icon={faArrowDown} />
            
          </Button>
      </div>
    )}


      <div className="footer">
        <div className="textsfoot">
       
        <li className="Fmail" >
  <a className="Fmail" href="mailto:coming2canada@samp.ca">
    <FontAwesomeIcon icon={faEnvelope} />
    &nbsp; coming2canada@samp.ca
  </a>
</li>

          <li className="FText">
  
  
  <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html" className="FText">
    <FontAwesomeIcon icon={faGraduationCap} />
    &nbsp; Learning Institutes
  </a>
</li>

        </div>
        <img src="https://www.neasdentemple.org/footer/bapsLogo.png" alt="FooterImage" />
      </div>
    </div>
  );
}

export default PhoneNumberCheck;

