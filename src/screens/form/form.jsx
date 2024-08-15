import React, { useEffect, useState } from "react";
import { useCreateLoanMutation } from "../../slices/loanApiSlice";

const LoanApplicationForm = () => {
  const [formData1, setFormData1] = useState({
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
  });
  const [formData2, setFormData2] = useState({
    requestedAmount: "",
    loanPurpose: "",
    annualIncome: "",
    employmentStatus: "",
    employerName: "",
    workPhone: "",
    position: "",
    timeWithEmployer: "",
  });
  const [formData3, setFormData3] = useState({
    paymentMethod: "",
    accountNumber: "",
    routingNumber: "",
    bankName: "",
    accountType: "",
  });
  const [dataToSend, { isLoading, error }] = useCreateLoanMutation();

  const [currentSection, setCurrentSection] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [progress, setProgress] = useState(0);

  console.log("formData1....", formData1);
  console.log("formData2....", formData2);
  console.log("formData3....", formData3);

  const validateSection = () => {
    const errors = {};
    if (currentSection === 0) {
      if (!formData1.firstName) errors.firstName = "First Name is required";
      if (!formData1.lastName) errors.lastName = "Last Name is required";
      if (!formData1.email) errors.email = "Email is required";
      if (!formData1.dob) errors.dob = "Date of Birth is required";
      if (!formData1.ssn) errors.ssn = "SSN is required";
      if (!formData1.phoneHome) errors.phoneHome = "Phone number is required";
      if (!formData1.address1) errors.address1 = "Address is required";
      if (!formData1.zipCode) errors.zipCode = "Zip Code is required";
      if (!formData1.driversLicense)
        errors.driversLicense = "Driver's License is required";
      if (!formData1.driversLicenseState)
        errors.driversLicenseState = "Driver's License State is required";
    } else if (currentSection === 1) {
      if (!formData2.requestedAmount)
        errors.requestedAmount = "Requested Amount is required";
      if (!formData2.loanPurpose)
        errors.loanPurpose = "Loan Purpose is required";
      if (!formData2.annualIncome)
        errors.annualIncome = "Annual Income is required";
      if (!formData2.employmentStatus)
        errors.employmentStatus = "Employment Status is required";
      if (!formData2.employerName)
        errors.employerName = "Employer Name is required";
      if (!formData2.workPhone) errors.workPhone = "Work Phone is required";
      if (!formData2.position) errors.position = "Position is required";
      if (!formData2.timeWithEmployer)
        errors.timeWithEmployer = "Time with Employer is required";
    } else if (currentSection === 2) {
      if (!formData3.paymentMethod)
        errors.paymentMethod = "Payment Method is required";
      if (!formData3.accountNumber)
        errors.accountNumber = "Account Number is required";
      if (!formData3.routingNumber)
        errors.routingNumber = "Routing Number is required";
      if (!formData3.bankName) errors.bankName = "Bank Name is required";
      if (!formData3.accountType)
        errors.accountType = "Account Type is required";
    }
    return errors;
  };

  const handleNext = () => {
    const errors = validateSection();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      setCurrentSection(currentSection + 1);
      setProgress(progress + 33.33); // Adjust progress increment to match sections
    } else {
      setFormErrors(errors);
    }
  };

  const handlePrev = () => {
    setCurrentSection(currentSection - 1);
    setProgress(progress - 33.33); // Adjust progress decrement to match sections
  };

  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };
  const handleChange3 = (e) => {
    setFormData3({ ...formData3, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const errors = validateSection();
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      console.log("Form data 1 submitted:", formData1);
    } else {
      setFormErrors(errors);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const errors = validateSection();
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      console.log("Form data 2 submitted:", formData2);
    } else {
      setFormErrors(errors);
    }
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
    const errors = validateSection();
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      console.log("Form data 3 submitted:", formData3);
    } else {
      setFormErrors(errors);
    }
  };

  useEffect(() => {
    const res = async () => {
      const response = await dataToSend({
        firstName: "ayaad",
        lastName: "barcha",
        email: "saeedbarcha77@example.com",
        dob: "1990-01-01",
        ssn: "123-45-6789",
        phoneHome: "555-1234",
        address1: "123 Main St",
        zipCode: "12345",
        driversLicense: "D1234567",
        driversLicenseState: "CA",
        requestedAmount: 5000.0,
        loanPurpose: "Home Improvement",
        credit: "Good",
        ownHome: "Yes",
        employerName: "ABC Corp",
        monthsAtCompany: 24,
        incomeType: "Salary",
        monthlyIncome: 5000.0,
        payDate1: "2023-08-15",
        payFrequency: "Bi-Weekly",
        directDeposit: "Yes",
        bankName: "Bank of America",
        bankAccountType: "Checking",
        bankABA: "123456789",
        bankAccountNumber: "987654321",
      });
      console.log(response);
    };
    res();
  }, []);

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
                  currentSection >= 1 ? "bg-gray-700" : "bg-red-700"
                }`}
              >
                <span className="text-base text-white font-bold">1</span>
              </div>
              <div
                className={`w-full h-1 mx-4 rounded-lg ${

                  currentSection >= 1 ? "bg-gray-700" : "bg-red-300",

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
          ? "bg-gray-700"
          : currentSection === 1
          ? "bg-gray-500"
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

        {/* {currentSection === 3 && (
          <div className="w-full mt-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4">Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <h4 className="font-semibold text-gray-700">Personal Info</h4>
                  <p className="text-gray-600">Name: {formData1.name}</p>
                  <p className="text-gray-600">Email: {formData1.email}</p>
                  <p className="text-gray-600">Phone: {formData1.phone}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Loan Info</h4>
                  <p className="text-gray-600">
                    Loan Amount: {formData1.loanAmount}
                  </p>
                  <p className="text-gray-600">
                    Loan Type: {formData1.loanType}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Income Info</h4>
                  <p className="text-gray-600">
                    Annual Income: {formData1.annualIncome}
                  </p>
                  <p className="text-gray-600">
                    Employment Status: {formData1.employmentStatus}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Payment Info</h4>
                  <p className="text-gray-600">
                    Payment Method: {formData.paymentMethod}
                  </p>
                  <p className="text-gray-600">
                    Installments: {formData.installments}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )} */}

        {/* <form id="loanForm" onSubmit={handleSubmit}> */}
        {/* Alert */}
        {Object.keys(formErrors).length > 0 && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            <ul>
              {Object.values(formErrors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Personal Information Section */}
        {currentSection === 0 && (
          <form id="loanForm1" onSubmit={handleSubmit1}>
            <fieldset className="form-section border border-gray-500 p-8 rounded-[12px]">
              <legend className="text-lg text-gray-700 font-semibold mb-4 p-[10px] ">
                Personal Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Personal Info Fields */}
                <div>
                  <label htmlFor="firstName" className="block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData1.firstName}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData1.lastName}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData1.email}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="dob" className="block mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData1.dob}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="ssn" className="block mb-2">
                    SSN
                  </label>
                  <input
                    type="text"
                    id="ssn"
                    name="ssn"
                    value={formData1.ssn}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phoneHome" className="block mb-2">
                    Home Phone
                  </label>
                  <input
                    type="text"
                    id="phoneHome"
                    name="phoneHome"
                    value={formData1.phoneHome}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="address1" className="block mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={formData1.address1}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData1.zipCode}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="driversLicense" className="block mb-2">
                    Driver's License
                  </label>
                  <input
                    type="text"
                    id="driversLicense"
                    name="driversLicense"
                    value={formData1.driversLicense}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="driversLicenseState" className="block mb-2">
                    Driver's License State
                  </label>
                  <input
                    type="text"
                    id="driversLicenseState"
                    name="driversLicenseState"
                    value={formData1.driversLicenseState}
                    onChange={handleChange1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        )}

        {/* Income Information Section */}
        {currentSection === 1 && (
          <form id="loanForm2" onSubmit={handleSubmit2}>
            <fieldset className="form-section border border-gray-500 p-8 rounded-[10px]">
              <legend className="text-lg text-red-700 font-semibold mb-4 p-[10px] ">
                Income Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Income Info Fields */}
                <div>
                  <label htmlFor="requestedAmount" className="block mb-2">
                    Requested Amount
                  </label>
                  <input
                    type="text"
                    id="requestedAmount"
                    name="requestedAmount"
                    value={formData2.requestedAmount}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="loanPurpose" className="block mb-2">
                    Loan Purpose
                  </label>
                  <input
                    type="text"
                    id="loanPurpose"
                    name="loanPurpose"
                    value={formData2.loanPurpose}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="annualIncome" className="block mb-2">
                    Annual Income
                  </label>
                  <input
                    type="text"
                    id="annualIncome"
                    name="annualIncome"
                    value={formData2.annualIncome}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="employmentStatus" className="block mb-2">
                    Employment Status
                  </label>
                  <input
                    type="text"
                    id="employmentStatus"
                    name="employmentStatus"
                    value={formData2.employmentStatus}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="employerName" className="block mb-2">
                    Employer Name
                  </label>
                  <input
                    type="text"
                    id="employerName"
                    name="employerName"
                    value={formData2.employerName}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="workPhone" className="block mb-2">
                    Work Phone
                  </label>
                  <input
                    type="text"
                    id="workPhone"
                    name="workPhone"
                    value={formData2.workPhone}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData2.position}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="timeWithEmployer" className="block mb-2">
                    Time with Employer
                  </label>
                  <input
                    type="text"
                    id="timeWithEmployer"
                    name="timeWithEmployer"
                    value={formData2.timeWithEmployer}
                    onChange={handleChange2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        )}

        {/* Payment Details Section */}
        {currentSection === 2 && (
          <form id="loanForm3" onSubmit={handleSubmit3}>
            <fieldset className="form-section border border-red-500 p-8 rounded-[12px]">
              <legend className="text-lg text-red-700 font-semibold mb-4 p-[10px] ">
                Payment Details
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Payment Details Fields */}
                <div>
                  <label htmlFor="paymentMethod" className="block mb-2">
                    Payment Method
                  </label>
                  <input
                    type="text"
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData3.paymentMethod}
                    onChange={handleChange3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="accountNumber" className="block mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData3.accountNumber}
                    onChange={handleChange3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="routingNumber" className="block mb-2">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    id="routingNumber"
                    name="routingNumber"
                    value={formData3.routingNumber}
                    onChange={handleChange3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="bankName" className="block mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    value={formData3.bankName}
                    onChange={handleChange3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="accountType" className="block mb-2">
                    Account Type
                  </label>
                  <input
                    type="text"
                    id="accountType"
                    name="accountType"
                    value={formData3.accountType}
                    onChange={handleChange3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        )}

        {/* Navigation Buttons */}
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
      </div>
    </div>
  );
};

export default LoanApplicationForm;

// import React, { useEffect, useState } from "react";
// import { useCreateLoanMutation } from "../../slices/loanApiSlice";

// const LoanApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     dob: "",
//     ssn: "",
//     phoneHome: "",
//     address1: "",
//     zipCode: "",
//     driversLicense: "",
//     driversLicenseState: "",
//     requestedAmount: "",
//     loanPurpose: "",
//     credit: "",
//     ownHome: "",
//     employerName: "",
//     monthsAtCompany: "",
//     incomeType: "",
//     monthlyIncome: "",
//     payDate1: "",
//     payFrequency: "",
//     directDeposit: "",
//     bankName: "",
//     bankAccountType: "",
//     bankABA: "",
//     bankAccountNumber: "",
//   });

//   const [createLoan, { isLoading, error }] = useCreateLoanMutation();
//   const [currentSection, setCurrentSection] = useState(0);
//   const [formErrors, setFormErrors] = useState({});
//   const [progress, setProgress] = useState(0);

//   const validateSection = () => {
//     const errors = {};
//     // Define the required fields for each section
//     const requiredFields = [
//       [
//         "firstName",
//         "lastName",
//         "email",
//         "dob",
//         "ssn",
//         "phoneHome",
//         "address1",
//         "zipCode",
//         "driversLicense",
//         "driversLicenseState",
//       ],
//       [
//         "requestedAmount",
//         "loanPurpose",
//         "credit",
//         "ownHome",
//         "employerName",
//         "monthsAtCompany",
//         "incomeType",
//         "monthlyIncome",
//       ],
//       [
//         "payDate1",
//         "payFrequency",
//         "directDeposit",
//         "bankName",
//         "bankAccountType",
//         "bankABA",
//         "bankAccountNumber",
//       ],
//     ];

//     requiredFields[currentSection].forEach((field) => {
//       if (!formData[field]) {
//         errors[field] = `${field
//           .replace(/([A-Z])/g, " $1")
//           .trim()} is required`;
//       }
//     });

//     return errors;
//   };

//   const handleNext = () => {
//     const errors = validateSection();
//     if (Object.keys(errors).length === 0) {
//       setFormErrors({});
//       setCurrentSection((prev) => prev + 1);
//       setProgress((prev) => prev + 33.33);
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   const handlePrev = () => {
//     setCurrentSection((prev) => prev - 1);
//     setProgress((prev) => prev - 33.33);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateSection();
//     if (Object.keys(errors).length === 0) {
//       try {
//         const response = await createLoan(formData).unwrap();
//         console.log("Form data submitted:", response);
//       } catch (error) {
//         console.error("Failed to submit form data:", error);
//       }
//     } else {
//       setFormErrors(errors);
//     }
//   };

//   useEffect(() => {
//     const autoSubmit = async () => {
//       try {
//         const response = await createLoan(formData).unwrap();
//         console.log("Auto submit response:", response);
//       } catch (error) {
//         console.error("Auto submit failed:", error);
//       }
//     };
//     autoSubmit();
//   }, []);

//   return (
//     <div className="pb-[124px] font-sans min-h-screen flex flex-col items-center bg-gray-100">
//       <header className="text-center py-8">
//         <h1 className="text-3xl font-bold">Personal Loan Form</h1>
//       </header>

//       <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
//         {/* Stepper Progress Bar */}
//         <div className="flex items-start max-w-screen-lg ml-[100px] mx-auto mb-6">
//           <div className="w-full">
//             <div className="flex items-center w-full">
//               <div
//                 className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
//                   currentSection >= 1 ? "bg-green-500" : "bg-gray-500"
//                 }`}
//               >
//                 <span className="text-base text-white font-bold">1</span>
//               </div>
//               <div
//                 className={`w-full h-1 mx-4 rounded-lg ${
//                   currentSection >= 1 ? "bg-green-500" : "bg-gray-300"
//                 }`}
//               ></div>
//             </div>
//             <div className="mt-2">
//               <h6 className="text-base font-bold">Personal Info</h6>
//             </div>
//           </div>

//           <div className="w-full">
//             <div className="flex items-center w-full">
//               <div
//                 className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
//                   currentSection >= 2
                    // ? "bg-green-500"
//                     : currentSection === 1
//                     ? "bg-gray-500"
//                     : "bg-gray-300"
//                 }`}
//               >
//                 <span className="text-base text-white font-bold">2</span>
//               </div>
//               <div
//                 className={`w-full h-1 mx-4 rounded-lg ${
//                   currentSection >= 2 ? "bg-green-500" : "bg-gray-300"
//                 }`}
//               ></div>
//             </div>
//             <div className="mt-2">
//               <h6 className="text-base font-bold">Loan Info</h6>
//             </div>
//           </div>

//           <div className="w-full">
//             <div className="flex items-center w-full">
//               <div
//                 className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
//                   currentSection >= 3
//                     ? "bg-green-500"
//                     : currentSection === 2
//                     ? "bg-gray-500"
//                     : "bg-gray-300"
//                 }`}
//               >
//                 <span className="text-base text-white font-bold">3</span>
//               </div>
//               <div
//                 className={`w-full h-1 mx-4 rounded-lg ${
//                   currentSection >= 3 ? "bg-green-500" : "bg-gray-300"
//                 }`}
//               ></div>
//             </div>
//             <div className="mt-2">
//               <h6 className="text-base font-bold">Income Info</h6>
//             </div>
//           </div>

//           <div className="w-full">
//             <div className="flex items-center">
//               <div
//                 className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full ${
//                   currentSection === 4
//                     ? "bg-green-500"
//                     : currentSection === 3
//                     ? "bg-gray-500"
//                     : "bg-gray-300"
//                 }`}
//               >
//                 <span className="text-base text-white font-bold">
//                   {currentSection === 4 ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   ) : (
//                     "4"
//                   )}
//                 </span>
//               </div>
//             </div>
//             <div className="mt-2">
//               <h6 className="text-base font-bold">Complete</h6>
//             </div>
//           </div>
//         </div>

//         {/* Render form fields based on currentSection */}
//         <form onSubmit={handleSubmit}>
//           {currentSection === 0 && (
//             <div>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="First Name"
//               />
//               {/* Add more inputs for this section */}
//             </div>
//           )}

//           {currentSection === 1 && (
//             <div>
//               <input
//                 type="text"
//                 name="requestedAmount"
//                 value={formData.requestedAmount}
//                 onChange={handleChange}
//                 placeholder="Requested Amount"
//               />
//               {/* Add more inputs for this section */}
//             </div>
//           )}

//           {currentSection === 2 && (
//             <div>
//               <input
//                 type="text"
//                 name="payDate1"
//                 value={formData.payDate1}
//                 onChange={handleChange}
//                 placeholder="Pay Date"
//               />
//               {/* Add more inputs for this section */}
//             </div>
//           )}

//           <div className="flex justify-between mt-4">
//             {currentSection > 0 && (
//               <button type="button" onClick={handlePrev}>
//                 Previous
//               </button>
//             )}
//             {currentSection < 2 ? (
//               <button type="button" onClick={handleNext}>
//                 Next
//               </button>
//             ) : (
//               <button type="submit">Submit</button>
//             )}
//           </div>
//         </form>

//         {/* Display errors */}
//         {Object.keys(formErrors).length > 0 && (
//           <div className="text-red-500 mt-4">
//             {Object.values(formErrors).map((error, index) => (
//               <div key={index}>{error}</div>
//             ))}
//           </div>
//         )}

//         {/* Display submission status */}
//         {isLoading && <p>Submitting...</p>}
//         {error && (
//           <p className="text-red-500">Submission failed: {error.message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoanApplicationForm;
