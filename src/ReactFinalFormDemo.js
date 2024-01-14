import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./apple.css";

import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { createRoot } from "react-dom/client";
import { CascadeSelect } from 'primereact/cascadeselect';

import { CountryService } from "./CountryService";
import { CollegeService } from "./CollegeService";
import "./FormDemo.css";

export const ReactFinalFormDemo = () => {
  const [countries, setCountries] = useState([]);
  const [Colleges, setColleges] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const countryservice = new CountryService();
  const collegeservice = new CollegeService();
  const [date, setDate] = useState(null);
 
  const [selectedstats, setSelectedstats] = useState(null);

  const fieldsData = [
    {"id": 1, "name": "Mechanical"},
        {"id": 2, "name": "Information Technology (IT)"},
        {"id": 3, "name": "Medical"},
        {"id": 4, "name": "Finance"},
        {"id": 5, "name": "Education"},
        {"id": 6, "name": "Engineering"},
        {"id": 7, "name": "Marketing"},
        {"id": 8, "name": "Art and Design"},
        {"id": 9, "name": "Science"},
        {"id": 10, "name": "Agriculture"},
        {"id": 11, "name": "Healthcare"},
        {"id": 12, "name": "Law"},
        {"id": 13, "name": "Environmental Science"},
        {"id": 14, "name": "Social Work"},
        {"id": 15, "name": "Media and Communication"},
        {"id": 16, "name": "Human Resources"},
        {"id": 17, "name": "Architecture"},
        {"id": 18, "name": "Telecommunications"},
        {"id": 19, "name": "Biotechnology"},
        {"id": 20, "name": "Pharmaceuticals"},
   
  ];
  const fieldsOptions = fieldsData.map(field => ({ label: field.name, value: field.id }));
 const Status = [
  {
    name: 'Student',
    cname: 'Student ',
  },
  {
    name: 'Work Permit',
    cname: 'Work Permit ',
   
    states: [
      {cname: 'W-Applied Status', code: 'C-MO'},
      {cname: 'Work Permit Holder', code: 'C-QU'}
    ],
    
  },
  {
    name: 'Permanent Resident',
    cname: 'Permanent Resident ',
    states: [
      {cname: 'PR-Applied Status', code: 'C-MO'},
      {cname: 'Permanent Resident', code: 'C-QU'}
    ],
  },
  {
    name: ' CanadianCitizen',
    cname: 'Canadian Citizen  ',
  },
];


  useEffect(() => {
    countryservice.getCountries().then((data) => setCountries(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    collegeservice.getColleges().then((data) => setColleges(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "Name is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.accept) {
      errors.accept = "You need to agree to the terms and conditions.";
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div className="form-demo">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex items-center flex-col pt-6 px-3">
          <i className="pi pi-check-circle text-5xl text-green-500"></i>
          <h5 className="text-xl">Registration Successful!</h5>
          <p className="leading-6 text-indent-1">
            Your account is registered under name <b>{formData.name}</b>; it'll
            be valid next 30 days without activation. Please check{" "}
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="flex justify-center" style={{ justifyContent: "center" }}>
        <div className="card">
          <h5 className="text-center text-lg">Register</h5>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              Fname: "",
              Lname: "",
              name: "",
              email: "",
              date: null,
              country: null,
              accept: false,
            }}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="p-fluid">
                <div style={{ display: "flex", gap: "10px" }}>
                  <Field
                    name="Fname"
                    render={({ input, meta }) => (
                      <div className="field" style={{ width: "50%" }}>
                        <span className="p-float-label">
                          <InputText
                            id="Fname"
                            {...input}
                            autoFocus
                            className={` ${
                              isFormFieldValid(meta) && "p-invalid"
                            }`}
                          />
                          <label
                            htmlFor="Fname"
                            className={`${isFormFieldValid(meta) && "p-error"}`}
                          >
                            First Name*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="Lname"
                    render={({ input, meta }) => (
                      <div className="field" style={{ width: "50%" }}>
                        <span className="p-float-label">
                          <InputText
                            id="Lname"
                            {...input}
                            className={` ${
                              isFormFieldValid(meta) && "p-invalid"
                            }`}
                          />
                          <label
                            htmlFor="Lname"
                            className={`${isFormFieldValid(meta) && "p-error"}`}
                          >
                            Last Name*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                </div>

                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText
                          id="email"
                          {...input}
                          className={`${isFormFieldValid(meta) && "p-invalid"}`}
                        />
                        <label
                          htmlFor="email"
                          className={`${isFormFieldValid(meta) && "p-error"}`}
                        >
                          Email*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="PhN"
                  render={({ input, meta }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <InputText
                          id="PhN"
                          {...input}
                          className={` ${
                            isFormFieldValid(meta) && "p-invalid"
                          }`}
                        />
                        <label
                          htmlFor="PhN"
                          className={`${isFormFieldValid(meta) && "p-error"}`}
                        >
                          Phone Number*
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
                <Field
                  name="dob"
                  render={({ input }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Calendar
                          id="dob"
                          {...input}
                          dateFormat="dd/mm/yy"
                          mask="99/99/9999"
                          showIcon
                        />
                        <label htmlFor="dob">Date of Birth</label>
                      </span>
                    </div>
                  )}
                />
                <Field
                  name="Add"
                  render={({ input, meta }) => (
                    <div className="field" style={{ width: "100%" }}>
                      <span className="p-float-label">
                        <InputText
                          id="Add"
                          {...input}
                          className={` ${
                            isFormFieldValid(meta) && "p-invalid"
                          }`}
                        />
                        <label
                          htmlFor="Add"
                          className={`${isFormFieldValid(meta) && "p-error"}`}
                        >
                          Address
                        </label>
                      </span>
                      {getFormErrorMessage(meta)}
                    </div>
                  )}
                />
            




                <Field
                  name="citys"
                  render={({ input }) => (
                    <div className="field">
                      <span className="p-float-label">
                        <Dropdown
                          id="citys"
                          {...input}
                          options={countries}
                          optionLabel="name"
                        />
                        <label htmlFor="citys">City</label>
                      </span>
                    </div>
                  )}
                />
              <Field
        name="status"
        render={({ input }) => (
          <div className="field">
            <span className="p-float-label">
              <CascadeSelect
                value={selectedstats}
                onChange={(e) => setSelectedstats(e.value)}
                options={Status}
                optionLabel="cname"
                optionGroupLabel="name"
                optionGroupChildren={['states', 'cities']}
                className="w-full md:w-14rem"
                breakpoint="767px"
                placeholder="Select a City"
                style={{ minWidth: '14rem' }}
              />
              <label htmlFor="status">Canadian Status</label>
            </span>
          </div>
        )}
      />

      {(() => {
    if (selectedstats && selectedstats.name === 'Student') {
          return (
            <span className="one">
               <Field
            name="college"
            render={({ input }) => (
              <div className="field">
                <span className="p-float-label">
                  <Dropdown
                    id="Colleges"
                    {...input}
                    options={Colleges}
                    // filter
                    optionLabel="name"
                  />
                  <label htmlFor="country">Institution Name</label>
                </span>
              </div>
            )}
          />
            <div style={{ display: "flex", gap: "10px" }}>
              <Field
                name="Cname"
                render={({ input, meta }) => (
                  <div className="field" style={{ width: "50%" }}>
                    <span className="p-float-label">
                      <InputText
                        id="Cname"
                        {...input}
                        className={` ${
                          isFormFieldValid(meta) && "p-invalid"
                        }`}
                      />
                      <label
                        htmlFor="Cname"
                        className={`${isFormFieldValid(meta) && "p-error"}`}
                      >
                        Course Name*
                      </label>
                    </span>
                    {getFormErrorMessage(meta)}
                  </div>
                )}
              />
              <Field
                name="Gradyear"
                render={({ input, meta }) => (
                  <div className="field" style={{ width: "50%" }}>
                    <span className="p-float-label">
                      <Calendar
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        view="month"
                        dateFormat="mm/yy"
                      />
                      <label
                        htmlFor="Gradyear"
                        className={`${isFormFieldValid(meta) && "p-error"}`}
                      >
                        Expected Graduation*
                      </label>
                    </span>
                    {getFormErrorMessage(meta)}
                  </div>
                )}
              />
            </div>
           
          </span>
          );
  } else if (selectedstats && selectedstats.name !== 'Student') {
          return (
            <Field
              name="fld"
              render={({ input, meta }) => (
                <div className="field" style={{ width: "100%" }}>
                  <span className="p-float-label">
                  <Dropdown
      id="fld"
      options={fieldsOptions}
      onChange={(e) => console.log(e.value)}  // Handle the selected value as needed
      placeholder="Select a Field"
      optionLabel="label"
      
      showClear
      filterBy="label"
    />
                    <label
                      htmlFor="fld"
                      className={`${isFormFieldValid(meta) && "p-error"}`}
                    >
                      Field*
                    </label>
                  </span>
                  {getFormErrorMessage(meta)}
                </div>
              )}
            />
          );
        }
      })()}

              

                

                <Field
                  name="accept"
                  type="checkbox"
                  render={({ input, meta }) => (
                    <div className="field-checkbox">
                      <Checkbox
                        inputId="accept"
                        {...input}
                        className={`${isFormFieldValid(meta) && "p-invalid"}`}
                      />
                      <label
                        htmlFor="accept"
                        className={`${isFormFieldValid(meta) && "p-error"}`}
                      >
                        I agree to the terms and conditions*
                      </label>
                    </div>
                  )}
                />

                <Button type="submit" label="Submit" className="mt-2" />
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Use createRoot instead of ReactDOM.render
root.render(<ReactFinalFormDemo />);
