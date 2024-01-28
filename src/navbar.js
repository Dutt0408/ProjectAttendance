
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./apple.css";
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ReactFinalFormDemo } from './ReactFinalFormDemo';
import Confirmation from './Confirmation';

function PhoneNumberCheck() {
  const [redirectToFinalForm, setRedirectToFinalForm] = useState(false);

  const onSubmit = async (values) => {
    const PhoneNumber = values.PhoneNumber;

    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbxNtu82rVyogIhCyZZmDlc-AdTVsu8_xz2dCt-E8WRcQo51Bcdmg9nt9gPIyE6Thns3/exec?PhoneNumber=${PhoneNumber}`);
      const data = await response.json();

      if (data.exists) {
        console.log("Phone number exists. Redirecting to ReactFinalForm.");
        setRedirectToFinalForm(true);
        return Confirmation ;
      
      } else {
        console.log("Phone number does not exist. Continue with the current component.");
        return <ReactFinalFormDemo />;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Conditional rendering based on the state
  if (redirectToFinalForm) {
    return <ReactFinalFormDemo />;
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          PhoneNumber: '',
        }}
        render={({ handleSubmit }) => (
          <form action="https://script.google.com/macros/s/AKfycbxNtu82rVyogIhCyZZmDlc-AdTVsu8_xz2dCt-E8WRcQo51Bcdmg9nt9gPIyE6Thns3/exec" method="post" className="p-fluid netlify">
            <Field
              name="PhoneNumber"
              render={({ input }) => (
                <div className="field">
                  <span className="p-float-label">
                    <InputText id="PhoneNumber" {...input} />
                    <label htmlFor="PhoneNumber">Phone Number*</label>
                  </span>
                </div>
              )}
            />
            <Button type="submit" label="Check Phone Number" className="mt-2" />
          </form>
        )}
      />
    </div>
  );
}

export default PhoneNumberCheck;