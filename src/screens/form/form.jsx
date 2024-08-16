import React, { useEffect, useState } from "react";
import Summary from "./FormSummary";
import { useCreateLoanMutation } from "../../slices/loanApiSlice";
const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    ssn: "",
    phoneHome: "",
    address1: "",
    zipCode: "",
    driversLicense: "",
    driversLicenseState: "",
    requestedAmount: "",
    loanPurpose: "",
    credit: "",
    ownHome: "",
    timeWithEmployer: "",
    employerName: "",
    monthsAtCompany: "",
    incomeType: "",
    annualIncome: "",
    monthlyIncome: "",
    payDate1: "",
    payFrequency: "",
    directDeposit: "",
    bankName: "",
    bankAccountType: "",
    bankABA: "",
    bankAccountNumber: "",
  });

  const [showSummary, setShowSummary] = useState(false);
  const [dataToSend, { isLoading, error }] = useCreateLoanMutation();
  const [currentSection, setCurrentSection] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [progress, setProgress] = useState(0);

  // error validate
  const validateSection = () => {
    const errors = {};

    if (currentSection === 0) {
      if (!formData.firstName) {
        errors.firstName = "First Name should be filled first";
      }
      if (!formData.lastName) {
        errors.lastName = "First Name should be filled first";
      }
      if (!formData.email) {
        errors.email = "Please enter a valid email address.";
      }
      if (!formData.dob) {
        errors.dob = "Please enter your  Date of Birth before proceeding";
      }
      if (!formData.ssn) {
        errors.ssn = "SSN should be filled first";
      }
      if (!formData.phoneHome) {
        errors.phoneHome =
          "Phone number should be in the format (XXX) XXX-XXXX.";
      }
      if (!formData.address1) {
        errors.address1 =
          "Address can contain letters, numbers, commas, and hyphens.";
      }
      if (!formData.zipCode) {
        errors.zipCode =
          "Zip Code should be 5 digits or 5+4 digits (e.g., 12345 or 12345-6789).";
      }
      if (!formData.driversLicense) {
        errors.driversLicense = "Driver's License should be filled.";
      }
      if (!formData.driversLicenseState) {
        errors.driversLicenseState = "Driver's License State should be filled.";
      }
      if (!formData.loanPurpose) {
        errors.loanPurpose = "Loan Purpose should be filled .";
      }
    } else if (currentSection === 1) {
      if (!formData.annualIncome) {
        errors.annualIncome = "Annual Income should be filled.";
      }

      if (!formData.timeWithEmployer) {
        errors.timeWithEmployer =
          "Time with employer should be filled before proceeding.";
      }

      if (!formData.requestedAmount) {
        errors.requestedAmount = "Requested Amount should be filled .";
      }
      if (!formData.timeWithEmployer) {
        errors.monthlyIncome = "Time with employer should be filled .";
      }
      if (!formData.employerName) {
        errors.employerName = "Employer Name should be filled .";
      }
      if (!formData.annualIncome) {
        errors.annualIncome = "Annual income should be filled .";
      }
      if (!formData.monthsAtCompany) {
        errors.monthsAtCompany = "Months at Company should be filled";
      }
      // if (!formData.monthlyIncome) {
      //   errors.monthlyIncome = "Monthly Income  should be filled";
      // }
      if (!formData.payDate1) {
        errors.payDate1 = "Pay Date1  should be filled";
      }
    } else if (currentSection === 2) {
      if (!formData.bankName) {
        errors.bankName = "Bank Name must be filled first.";
      }
      if (!formData.bankABA) {
        errors.bankABA = "Bank ABA should be filled.";
      }
    }

    return errors;
  };

  // -------------------------
  const handleNext = () => {
    // Validate the current section
    const errors = validateSection();

    // If no errors, proceed to the next section
    if (Object.keys(errors).length === 0) {
      setFormErrors({}); // Clear any previous errors
      setCurrentSection(currentSection + 1);
      setProgress(progress + 33.33); // Update progress
    } else {
      // If there are errors, set them in the state
      setFormErrors(errors);
    }
  };
  const handlePrev = () => {
    setCurrentSection(currentSection - 1);
    setProgress(progress - 33.33);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    const errors = validateSection();

    // If no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      setFormErrors({}); // Clear any previous errors
      const response = await dataToSend(formData);
      console.log("response...", response);
      console.log("Form data submitted:", formData);

      // Optionally, handle the submission response
      if (response.success) {
        // Handle successful submission, e.g., navigate to a success page or show a success message
      } else {
        // Handle submission failure, e.g., show an error message
      }

      setShowSummary(true); // Show summary after submission
    } else {
      // If there are errors, set them in the state
      setFormErrors(errors);
    }
  };

  return (
    <div className="pb-[124px] font-sans min-h-screen flex flex-col items-center bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-700">Personal Loan Form</h1>
      </header>

      <div className=" max-w-5xl mx-auto p-4 bg-white shadow-md rounded-md">
        {/* Stepper Progress Bar */}
        <div className="flex items-start max-w-screen-lg ml-[100px] mx-auto mb-6">
          <div className="w-full">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
                  currentSection >= 1 ? "bg-red-700" : "bg-red-700"
                }`}
              >
                <span className="text-base text-white font-bold">1</span>
              </div>
              <div
                className={`w-full h-1 mx-4 rounded-lg ${
                  currentSection >= 1 ? "bg-red-700" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-bold text-red-700">
                Personal Info
              </h6>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
                  currentSection >= 2
                    ? "bg-red-700"
                    : currentSection === 1
                    ? "bg-gray-300"
                    : "bg-gray-300"
                }`}
              >
                <span className="text-base text-white font-bold">2</span>
              </div>
              <div
                className={`w-full h-1 mx-4 rounded-lg ${
                  currentSection >= 2 ? "bg-red-700" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-bold text-red-700">Loan Info</h6>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
                  currentSection >= 3
                    ? "bg-red-700"
                    : currentSection === 2
                    ? "bg-red-700"
                    : "bg-gray-300"
                }`}
              >
                <span className="text-base text-white font-bold">3</span>
              </div>
              <div
                className={`w-full h-1 mx-4 rounded-lg ${
                  currentSection >= 3 ? "bg-red-700" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-bold text-red-700">Income Info</h6>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
                  currentSection === 4
                    ? "bg-red-700"
                    : currentSection === 3
                    ? "bg-red-700"
                    : "bg-gray-300"
                }`}
              >
                <span className="text-base text-white font-bold">
                  {currentSection === 4 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    "4"
                  )}
                </span>
              </div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-bold text-red-700">Complete</h6>
            </div>
          </div>
        </div>

        <form id="loanForm " onSubmit={handleSubmit}>
          {Object.keys(formErrors).length > 0 && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
              <p>{Object.values(formErrors)[0]}</p>
            </div>
          )}
          {currentSection === 0 && (
            <fieldset className="form-section border border-gray-500 p-8 rounded-[12px]">
              <legend className="text-lg text-gray-700 font-semibold mb-4 p-[10px] ">
                Personal Information
              </legend>
              {/* Personal Info Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    min="5"
                    max="50"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your first name
                  </small>
                </div>

                <div>
                  <label htmlFor="lastName" className="block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your last name
                  </small>
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Enter your email address
                  </small>
                </div>
                <div>
                  <label htmlFor="dob" className="block mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Enter your date of birth (MM/DD/YYYY)
                  </small>
                </div>
                <div>
                  <label htmlFor="ssn" className="block mb-2">
                    SSN
                  </label>
                  <input
                    type="number"
                    id="ssn"
                    name="ssn"
                    value={formData.ssn}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Enter your Social Security Number (SSN).
                  </small>
                </div>
                <div>
                  <label htmlFor="phoneHome" className="block mb-2">
                    Home Phone
                  </label>
                  <input
                    type="text"
                    id="phoneHome"
                    name="phoneHome"
                    value={formData.phoneHome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Enter your home phone number.
                  </small>
                </div>
                <div>
                  <label htmlFor="address1" className="block mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">Enter your address.</small>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block mb-2">
                    Zip Code
                  </label>
                  <input
                    type="number"
                    min="2"
                    max="5"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">Enter your zip code</small>
                </div>
                <div>
                  <label htmlFor="driversLicense" className="block mb-2">
                    Driver's License
                  </label>
                  <input
                    type="number"
                    id="driversLicense"
                    name="driversLicense"
                    value={formData.driversLicense}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Enter a number between 1 and 100.
                  </small>
                </div>
                <div>
                  <label htmlFor="driversLicenseState" className="block mb-2">
                    Driver's License State
                  </label>
                  <input
                    type="text"
                    id="driversLicenseState"
                    name="driversLicenseState"
                    value={formData.driversLicenseState}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your Driving License State
                  </small>
                </div>
              </div>
            </fieldset>
          )}
          {/* Income Information Section */}
          {currentSection === 1 && (
            <fieldset className="form-section border border-gray-500 p-8 rounded-[10px]">
              <legend className="text-lg text-gray-700 font-semibold mb-4 p-[10px]">
                Income Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* New fields start here */}
                <div>
                  <label htmlFor="loanPurpose" className="block mb-2">
                    Loan Purpose
                  </label>
                  <select
                    id="loanPurpose"
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  >
                    <option value="Debtconsolidation">
                      Debt Consolidation
                    </option>
                    <option value="Creditcard">Credit Card</option>
                    <option value="Homeimprovement">Home Improvement</option>
                    <option value="Studentloanconsolidation">
                      Student Loan Consolidation
                    </option>
                    <option value="Majorpurchase">Major Purchase</option>
                    <option value="Car">Car</option>
                    <option value="Greenloan">Green Loan</option>
                    <option value="Business">Business</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Relocation">Relocation</option>
                    <option value="Medical">Medical</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                  </select>
                  <small className="text-gray-600">
                    Enter the purpose of the loan.
                  </small>
                </div>
                <div>
                  <label htmlFor="annualIncome" className="block mb-2">
                    Annual Income
                  </label>
                  <input
                    type="number"
                    id="annualIncome"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Enter your annual income
                  </small>
                </div>
                {/* <div>
                  <label htmlFor="employmentStatus" className="block mb-2">
                    Employment Status
                  </label>
                  <input
                    type="text"
                    id="employmentStatus"
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="workPhone" className="block mb-2">
                    Work Phone
                  </label>
                  <input
                    required
                    type="text"
                    id="workPhone"
                    name="workPhone"
                    value={formData.workPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Enter your Phone Number
                  </small>
                </div> */}
                {/* <div>
                  <label htmlFor="position" className="block mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div> */}
                <div>
                  <label htmlFor="timeWithEmployer" className="block mb-2">
                    Time with Employer
                  </label>
                  <input
                    type="number"
                    id="timeWithEmployer"
                    name="timeWithEmployer"
                    value={formData.timeWithEmployer}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your time with employer
                  </small>
                </div>
                <div>
                  <label htmlFor="requestedAmount" className="block mb-2">
                    Requested Amount
                  </label>
                  <input
                    type="number"
                    id="requestedAmount"
                    name="requestedAmount"
                    value={formData.requestedAmount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your Requested Amount
                  </small>
                </div>
                <div>
                  <label htmlFor="credit" className="block mb-2">
                    Credit Score
                  </label>
                  <select
                    id="credit"
                    name="credit"
                    value={formData.credit}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  >
                    <option value="Excellent">Excellent</option>
                    <option value="Verygood">Very Good</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                    <option value="Verypoor">Very Poor</option>
                    <option value="Unsure">Unsure</option>
                  </select>
                  <small className="text-gray-600">
                    Please select your credit score
                  </small>
                </div>

                <div>
                  <label htmlFor="ownHome" className="block mb-2">
                    Own Home
                  </label>
                  <select
                    id="ownHome"
                    name="ownHome"
                    value={formData.ownHome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                  <small className="text-gray-600">Do you own a house?</small>
                </div>
                <div>
                  <label htmlFor="employerName" className="block mb-2">
                    Employer Name
                  </label>
                  <input
                    type="text"
                    id="employerName"
                    name="employerName"
                    value={formData.employerName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter Employer name
                  </small>
                </div>
                <div>
                  <label htmlFor="monthsAtCompany" className="block mb-2">
                    Months at Company
                  </label>
                  <input
                    type="number"
                    id="monthsAtCompany"
                    name="monthsAtCompany"
                    value={formData.monthsAtCompany}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter months in company
                  </small>
                </div>
                <div>
                  <label htmlFor="incomeType" className="block mb-2">
                    Income Type
                  </label>
                  <select
                    id="incomeType"
                    name="incomeType"
                    value={formData.incomeType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  >
                    <option value="employed">Employed</option>
                    <option value="selfemployed">Self-Employed</option>
                    <option value="military">Military</option>
                    <option value="benefits">Benefits</option>
                    <option value="retired">Retired</option>
                    <option value="unemployed">Unemployed</option>
                  </select>
                  <small className="text-gray-600">
                    Please select the income type
                  </small>
                </div>
                <div>
                  <label htmlFor="monthlyIncome" className="block mb-2">
                    Monthly Income
                  </label>
                  <input
                    type="number"
                    id="monthlyIncome"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your Monthly Income
                  </small>
                </div>
                <div>
                  <label htmlFor="payDate1" className="block mb-2">
                    Pay Date 1
                  </label>
                  <input
                    type="date"
                    id="payDate1"
                    name="payDate1"
                    value={formData.payDate1}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your pay date
                  </small>
                </div>
                <div>
                  <label htmlFor="payFrequency" className="block mb-2">
                    Pay Frequency
                  </label>
                  <select
                    id="payFrequency"
                    name="payFrequency"
                    value={formData.payFrequency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Biweekly">Bi-Weekly</option>
                    <option value="Semimonthly">Semi-Monthly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                  <small className="text-gray-600">
                    Please select your pay frequency
                  </small>
                </div>
              </div>
            </fieldset>
          )}
          {/* payment details */}
          {currentSection === 2 && (
            <fieldset className="form-section border border-gray-500 p-8 rounded-[12px]">
              <legend className="text-lg text-gray-700 font-semibold mb-4 p-[10px]">
                Payment Details
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <div>
                  <label htmlFor="paymentMethod" className="block mb-2">
                    Payment Method
                  </label>
                  <input
                    type="text"
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="accountNumber" className="block mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.bankAccountNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="routingNumber" className="block mb-2">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    id="routingNumber"
                    name="routingNumber"
                    value={formData.routingNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div> */}
                <div>
                  <label htmlFor="bankName" className="block mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    Please enter your bank name
                  </small>
                </div>
                {/* <div>
                  <label htmlFor="accountType" className="block mb-2">
                    Account Type
                  </label>
                  <input
                    type="text"
                    id="accountType"
                    name="accountType"
                    value={formData.bankAccountType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div> */}
                <div>
                  <label htmlFor="directDeposit" className="block mb-2">
                    Direct Deposit
                  </label>
                  <select
                    id="directDeposit"
                    name="directDeposit"
                    value={formData.directDeposit}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                    required
                  >
                    <option value="True">True</option>
                    <option value="1">1</option>
                    <option value="Yes">Yes</option>
                    <option value="False">False</option>
                    <option value="0">0</option>
                    <option value="No">No</option>
                  </select>
                  <small className="text-gray-600">
                    Please enter your first name
                  </small>
                </div>
                <div>
                  <label htmlFor="bankAccountType" className="block mb-2">
                    Bank Account Type
                  </label>
                  <select
                    id="bankAccountType"
                    name="bankAccountType"
                    value={formData.bankAccountType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                    required
                  >
                    <option value="Checking">Checking</option>
                    <option value="Savings">Savings</option>
                  </select>

                  <small className="text-gray-600">
                    Bank Account Type should be 'checking' or 'savings'.
                  </small>
                </div>
                <div>
                  <label htmlFor="bankABA" className="block mb-2">
                    Bank ABA
                  </label>
                  <input
                    type="text"
                    id="bankABA"
                    name="bankABA"
                    value={formData.bankABA}
                    onChange={handleChange}
                    pattern="\d{9}"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    please enter your Bank ABA
                  </small>
                </div>
                <div>
                  <label className="block mb-2">Bank Account Number</label>
                  <input
                    type="number"
                    id="bankAccountNumber"
                    name="bankAccountNumber"
                    value={formData.bankAccountNumber}
                    onChange={handleChange}
                    minlength="4"
                    maxlength="30"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  <small className="text-gray-600">
                    please enter your Bank Account Number
                  </small>
                </div>
              </div>
            </fieldset>
          )}
          {/* ------------------ */}
          <div className="flex  mt-6 justify-between">
            <div className="flex justify-start">
              {currentSection > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md"
                >
                  Back
                </button>
              )}
            </div>
            {currentSection < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="py-2 px-[60px]  bg-transparent transition-all duration-300 ease-in-out   text-red-700 border hover:bg-red-700 hover:text-white  border-red-700 font-semibold rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="py-2 px-4 bg-red-600 text-white rounded-md"
              >
                Submit
              </button>
            )}
          </div>
          {showSummary && <Summary formData={formData} />}
        </form>
      </div>
    </div>
  );
};
export default LoanApplicationForm;
