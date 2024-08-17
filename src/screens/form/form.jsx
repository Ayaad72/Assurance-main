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
    requestedAmount: 0,
    loanPurpose: "",
    credit: "",
    ownHome: "",
    employerName: "",
    monthsAtCompany: 0,
    incomeType: "",
    monthlyIncome: 0,
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
        errors.firstName = "First name is required.";
      }
      if (!formData.lastName) {
        errors.lastName = "Last name is required.";
      }
      if (!formData.email) {
        errors.email = "Email is required.";
      }
      if (!formData.dob) {
        errors.dob = "Date of birth is required";
      }
      if (!formData.ssn) {
        errors.ssn = "SSN should is required";
      }
      if (!formData.phoneHome) {
        errors.phoneHome =
          "Phone number is required.";
      }
      if (!formData.address1) {
        errors.address1 =
          "Address is required.";
      }
      if (!formData.zipCode) {
        errors.zipCode =
          "Zip Code is required.";
      }
      if (!formData.driversLicense) {
        errors.driversLicense = "Driver's License is required.";
      }
      if (!formData.driversLicenseState) {
        errors.driversLicenseState = "Driver's License State is required.";
      }

    } else if (currentSection === 1) {
      if (!formData.loanPurpose) {
        errors.loanPurpose = "Loan purpose is required.";
      }
    
      if (!formData.requestedAmount) {
        errors.requestedAmount = "Requested zmount is required.";
      }
      if (!formData.employerName) {
        errors.employerName = "Employer name is required.";
      }
      if (!formData.monthsAtCompany) {
        errors.monthsAtCompany = "Months at company is required";
      }
      if (!formData.monthlyIncome) {
        errors.monthlyIncome = "Monthly income is required";
      }
      if (!formData.payDate1) {
        errors.payDate1 = "Pay date 1 is required";
      }
    } else if (currentSection === 2) {
  

      if (!formData.bankName) {
        errors.bankName = "Bank name is required.";
      }
      if (!formData.directDeposit) {
        errors.directDeposit = "Bank deposit is required.";
      }
      if (!formData.bankAccountType) {
        errors.bankAccountType = "Bank account type is required.";
      }
      if (!formData.bankABA) {
        errors.bankABA = "Bank ABA is required.";
      }
      if (!formData.bankAccountNumber) {
        errors.bankAccountNumber = "Bank account number is required.";
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
      setShowSummary(false);
      setProgress(progress - 33.33);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log("ssssssssssssssssssssssssssssssss");
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
       
      } else {
        // Handle submission failure, e.g., show an error message
      }

      setShowSummary(true);
    } else {
      setFormErrors(errors);
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const errors = validateSection();
  
  //   if (Object.keys(errors).length === 0) {
  //     setFormErrors({});
  
  //     try {
  //       const response = await dataToSend(formData);
  
  //       if (response.success) {
  //         setShowSummary(true);
  //       } else {
  //         setFormErrors(response.error.data.message);
  //         if (response.error && response.error.data && response.error.data.message) {
  //           alert(`Error: ${response.error.data.message}`);
  //         } else {
  //           alert('An error occurred while submitting the form. Please try again later.');
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error during data submission:', error);
  //       alert('An unexpected error occurred. Please try again later.');
  //     }
  //   } else {
  //     setFormErrors(errors);
  //   }
  // };

  
  return (
    <div className="pb-[124px] font-sans min-h-screen flex flex-col items-center bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-700">Personal Loan Form</h1>
      </header>

      <div className="min-w-[80rem] max-w-5xl mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="flex items-start max-w-screen-lg ml-[230px] mx-auto mb-6">
          <div className="w-full">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${currentSection >= 1 ? "bg-bardum" : "bg-bardum"
                  }`}
              >
                <span className="text-base text-white font-bold">1</span>
              </div>
              <div
                className={`w-full h-1 mx-4 rounded-lg ${currentSection >= 1 ? "bg-bardum" : "bg-gray-300"
                  }`}
              ></div>
            </div>
            <div className="mt-2">
              <h6 style={{position:'relative', right:'20px'}} className="text-base font-bold  text-bardum">Personal Info</h6>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${currentSection >= 2
                    ? "bg-bardum"
                    : currentSection === 1
                      ? "bg-gray-300"
                      : "bg-gray-300"
                  }`}
              >
                <span className="text-base text-white font-bold">2</span>
              </div>
              <div
                className={`w-full h-1 mx-4 rounded-lg ${currentSection >= 2 ? "bg-bardum" : "bg-gray-300"
                  }`}
              ></div>
            </div>
            <div className="mt-2">
              <h6  className="text-base font-bold text-bardum">Loan Info</h6>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center w-full">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${currentSection >= 3
                    ? "bg-bardum"
                    : currentSection === 2
                      ? "bg-bardum"
                      : "bg-gray-300"
                  }`}
              >
                <span className="text-base text-white font-bold">3</span>
              </div>
              <div
                className={`w-full h-1 mx-4 rounded-lg ${currentSection >= 3 ? "bg-bardum" : "bg-gray-300"
                  }`}
              ></div>
            </div>
            <div className="mt-2">
              <h6  style={{position:'relative', right:'20px'}} className="text-base font-bold text-bardum">Income Info</h6>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${currentSection === 4
                    ? "bg-bardum"
                    : currentSection === 3
                      ? "bg-bardum"
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
              <h6 style={{position:'relative', right:'20px'}} className="text-base font-bold text-bardum">Complete</h6>
            </div>
          </div>
        </div>

        <form id="loanForm " onSubmit={handleSubmit}>
          {Object.keys(formErrors).length > 0 && (
            <div className="mb-4 p-4 bg-red-100 text-bardum rounded-md">
              <p>{Object.values(formErrors)[0]}</p>
            </div>
          )}
          {currentSection === 0 && (
            <fieldset className="form-section border border-gray-500 p-8 rounded-[12px]">
              <legend className="text-lg text-gray-700 font-semibold mb-4 p-[10px] ">
                Personal Information
              </legend>
              {/* Personal Info Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
  <div>
    <label htmlFor="firstName" className="block text-sm mb-2">
      First Name
    </label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      value={formData.firstName}
      placeholder="Please enter your first name"
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="lastName" className="block text-sm mb-2">
      Last Name
    </label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      value={formData.lastName}
      placeholder="Please enter your last name"
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Please enter your email"
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="dob" className="block text-sm mb-2">
      Date of Birth
    </label>
    <input
      type="date"
      id="dob"
      name="dob"
      value={formData.dob}
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="ssn" className="block text-sm mb-2">
      SSN
    </label>
    <input
      type="number"
      id="ssn"
      name="ssn"
      value={formData.ssn}
      placeholder="Enter your Social Security Number (SSN)."
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="phoneHome" className="block text-sm mb-2">
      Home Phone
    </label>
    <input
      type="text"
      id="phoneHome"
      name="phoneHome"
      value={formData.phoneHome}
      placeholder="Enter your home phone number."
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="address1" className="block text-sm mb-2">
      Address
    </label>
    <input
      type="text"
      id="address1"
      name="address1"
      value={formData.address1}
      placeholder="Enter your address"
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="zipCode" className="block text-sm mb-2">
      Zip Code
    </label>
    <input
      type="number"
      id="zipCode"
      name="zipCode"
      value={formData.zipCode}
      placeholder="Enter your zip code"
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="driversLicense" className="block text-sm mb-2">
      Driver's License
    </label>
    <input
      type="number"
      id="driversLicense"
      name="driversLicense"
      value={formData.driversLicense}
      placeholder="Enter a number between 1 and 100."
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
  </div>

  <div>
    <label htmlFor="driversLicenseState" className="block text-sm mb-2">
      Driver's License State
    </label>
    <input
      type="text"
      id="driversLicenseState"
      name="driversLicenseState"
      value={formData.driversLicenseState}
      placeholder="Please enter your Driving License State"
      onChange={handleChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none sm:text-base md:text-base lg:text-lg"
    />
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
                  {/* <small className="text-gray-600">
                    Enter the purpose of the loan.
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please enter your Requested Amount
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please select your credit score
                  </small> */}
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
                  {/* <small className="text-gray-600">Do you own a house?</small> */}
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
                    placeholder="  Please enter Employer name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  {/* <small className="text-gray-600">
                  
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please enter months in company
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please select the income type
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please enter your Monthly Income
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please enter your pay date
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please select your pay frequency
                  </small> */}
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
                    placeholder="  Please enter your bank name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  {/* <small className="text-gray-600">
                  
                  </small> */}
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
                  {/* <small className="text-gray-600">
                    Please enter your first name
                  </small> */}
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

                  {/* <small className="text-gray-600">
                    Bank Account Type should be 'checking' or 'savings'.
                  </small> */}
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
                    placeholder="   please enter your Bank ABA"
                    pattern="\d{9}"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  {/* <small className="text-gray-600">
                  Enter the purpose of the loan.
                  </small> */}
                </div>
                <div>
                  <label className="block mb-2">Bank Account Number</label>
                  <input
                    type="number"
                    id="bankAccountNumber"
                    name="bankAccountNumber"
                    placeholder="please enter your Bank Account Number"
                    value={formData.bankAccountNumber}
                    onChange={handleChange}
                    minlength="4"
                    maxlength="30"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                  {/* <small className="text-gray-600">
                  Enter the purpose of the loan.
                  </small> */}
                </div>
              </div>
            </fieldset>
          )}
          {/* ------------------ */}
          {showSummary && <Summary formData={formData} />}

          <div className="flex  mt-6 justify-between ">
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
                className="py-2 px-[60px]  bg-transparent transition-all duration-300 ease-in-out   text-bardum border hover:bg-bardum hover:text-white  border-bardum font-semibold rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="py-2 px-4 bg-bardum text-white rounded-md"
              >
                Submit
              </button>
            )}
          </div>
        
        </form>
      </div>
    </div>
  );
};
export default LoanApplicationForm;
