import React, { useState } from "react";
import { FaMoneyCheckAlt, FaGraduationCap, FaUserTie } from "react-icons/fa";
import { MdOutlineSavings } from "react-icons/md";
import { Link } from "react-router-dom";

// Reusable component for displaying an icon section
const IconSection = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-bardum text-white p-6 rounded-full mb-4">
      <Icon className="text-4xl" />
    </div>
    <h3 className="text-xl font-bold text-bardum mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Reusable component for displaying a card
const InfoCard = ({ Icon, title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="flex flex-col items-center mb-4">
      <div className="bg-blue-100 p-4 rounded-full mb-2">
        <Icon className="text-bardum text-4xl" />
      </div>
      <h4 className="text-xl font-bold text-gray-800">{title}</h4>
    </div>
    <p className="text-gray-600 text-center">{description}</p>
    <div className="flex justify-center">
      <Link to="/form">
        <button className="mt-4 px-6 py-2 bg-bardum text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
          Apply Now
        </button>
      </Link>
    </div>
  </div>
);

const DiscoverOurSolutions = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);

  // Data for key sections
  const keySections = [
    {
      Icon: MdOutlineSavings,
      title: "Financial Planning",
      description:
        "Customized plans to secure your financial future with strategic savings and investments.",
    },
    {
      Icon: FaMoneyCheckAlt,
      title: "Loan Consultation",
      description:
        "Expert advice to help you choose the best loan options for your needs.",
    },
    {
      Icon: FaGraduationCap,
      title: "Education Funding",
      description:
        "Affordable student loan options to help you achieve your academic goals.",
    },
    {
      Icon: FaUserTie,
      title: "Personalized Support",
      description:
        "Dedicated financial advisors to guide you every step of the way.",
    },
  ];

  // Data for initial info cards
  const initialInfoCards = [
    {
      Icon: FaMoneyCheckAlt,
      title: "Consolidation Loan",
      description:
        "Combine multiple debts into one easy-to-manage payment with a consolidation loan.",
      link: "/ConsolidationLoan",
    },
    {
      Icon: FaGraduationCap,
      title: "Student Loan",
      description:
        "Secure low-interest loans to cover your tuition and other education expenses.",
      link: "/StudentLoans",
    },
    {
      Icon: FaUserTie,
      title: "Personal Loan",
      description:
        "Get flexible personal loans with competitive rates for any purpose.",
      link: "/form",
    },
  ];

  // Data for additional info cards
  const additionalInfoCards = [
    {
      Icon: MdOutlineSavings,
      title: "Retirement Savings",
      description:
        "Plan for a comfortable retirement with tailored savings plans.",
      link: "/RetirementSavings",
    },
    {
      Icon: FaUserTie,
      title: "Business Loan",
      description:
        "Obtain the financing needed to grow and expand your business.",
      link: "/BusinessLoan",
    },
    {
      Icon: FaMoneyCheckAlt,
      title: "Auto Loan",
      description: "Finance your new car with low-interest auto loans.",
      link: "/AutoLoan",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-extrabold text-center text-bardum mb-8">
        Discover Our Solutions
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        At Assurance Partners LLC, we provide a range of tailored financial
        solutions designed to meet your unique needs. Whether you're looking to
        consolidate your debt, finance your education, or manage your personal
        finances, we have the right loan options for you.
      </p>

      {/* Key Sections */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
        {keySections.map((section, index) => (
          <IconSection
            key={index}
            Icon={section.Icon}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        {initialInfoCards.map((card, index) => (
          <InfoCard
            key={index}
            Icon={card.Icon}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
        {showMoreCards &&
          additionalInfoCards.map((card, index) => (
            <InfoCard
              key={index}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
              link={card.link}
              className="transition-transform transform duration-500 ease-out"
            />
          ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        {!showMoreCards && (
          <button
            type="button"
            onClick={() => setShowMoreCards(true)}
            className="bg-bardum hover:bg-bardum text-white font-semibold text-lg tracking-wide rounded-md px-8 py-3 transition-all duration-500"
          >
            Explore All Solutions
          </button>
        )}
      </div>
    </div>
  );
};

export default DiscoverOurSolutions;
