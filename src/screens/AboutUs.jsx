import React, { useState } from "react";

const AccordionItem = ({ title, content, index, activeIndex, onClick }) => {
  return (
    <div>
      <button
        type="button"
        className="w-full sm:text-lg text-base font-bold text-left p-4 sm:p-6 text-gray-800 flex items-center"
        onClick={() => onClick(index)}
      >
        <span className="mr-4 sm:mr-6 text-xl sm:text-3xl text-gray-400 font-extrabold hidden sm:block">
          {index + 1}
        </span>
        <span className="mr-4">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 fill-current ml-auto shrink-0 transform transition-transform ${
            activeIndex === index ? "rotate-180" : ""
          }`}
          viewBox="0 0 42 42"
        >
          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          activeIndex === index ? "block" : "hidden"
        } px-4 sm:px-6 pb-4 sm:pb-6`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What types of loans can I find on loan-providing websites?",
      content:
        "Loan-providing websites offer a variety of loan types including personal loans, auto loans, mortgage loans, and student loans. Whether you need funds for a new car, home, or education, these platforms provide options tailored to your needs, often with competitive rates and flexible terms.",
    },
    {
      title: "How can I compare loan offers effectively?",
      content:
        "Comparing loan offers is made easy with online loan-providing websites. Use their comparison tools to analyze interest rates, repayment terms, fees, and eligibility criteria. Look for platforms that allow you to input your details to get personalized loan offers and compare them side-by-side to find the best deal for you.",
    },
    {
      title: "Are there any hidden fees I should be aware of?",
      content:
        "Many loan-providing websites provide transparency about fees, but it’s always wise to read the fine print. Common fees may include origination fees, late payment fees, and prepayment penalties. Make sure to review all associated costs before finalizing your loan agreement to avoid unexpected charges.",
    },
    {
      title: "How do I know if I’m eligible for a loan?",
      content:
        "Eligibility criteria vary depending on the type of loan and the lender. Typically, you’ll need to provide information about your income, credit score, and employment history. Loan-providing websites often offer prequalification tools that can give you an idea of your chances without impacting your credit score.",
    },
    {
      title: "Can I get a loan with bad credit?",
      content:
        "Yes, many loan-providing websites offer options for individuals with less-than-perfect credit. Look for lenders that specialize in bad credit loans or consider options like secured loans where collateral is required. While interest rates may be higher, these loans can help you build or repair your credit over time.",
    },
    {
      title: "How quickly can I receive the loan funds?",
      content:
        "Loan processing times vary by lender. Some online platforms offer instant approvals and fund disbursement within 24 hours, while others may take a few days to process. Check the lender’s timeline and ensure that it aligns with your needs, especially if you require funds urgently.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Text Section */}
          <div className="flex-1 p-4 sm:p-8 lg:w-1/2">
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red">
              About <span className="text-red">Us</span>
            </h1>
            <p className="font-sans mt-6 text-base sm:text-lg text-gray-600">
              At Assurance Partners LLC, we guide you through every step of your
              financial journey. Whether you're planning for retirement,
              investing, or seeking comprehensive solutions, our expert team is
              here to ensure your goals are achieved with precision and care.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 lg:w-1/2 flex justify-center items-center p-4 sm:p-8">
            <img
              src="https://www.nfcc.org/wp-content/uploads/2023/04/happy-mom-daughter-23.png"
              alt="Happy Mom and Daughter"
              className="object-cover w-full h-[40vh] sm:h-[50vh] rounded-lg"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red font-sans">
            Our Mission
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-sans">
            Our mission is to navigate the complexities of financial planning so
            you can enjoy a secure and prosperous future. We believe in building
            lasting relationships based on trust, transparency, and mutual
            respect.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="max-w-6xl mx-auto bg-[#f2f8f6] rounded-md divide-y font-[sans-serif] mt-8 sm:mt-16">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              index={index}
              activeIndex={activeIndex}
              onClick={handleAccordionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
