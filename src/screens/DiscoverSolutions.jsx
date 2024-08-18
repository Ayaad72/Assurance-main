import React, { useState } from "react";
import { FaMoneyCheckAlt, FaGraduationCap, FaUserTie } from "react-icons/fa";
import { MdOutlineSavings } from "react-icons/md";
import { motion } from "framer-motion";

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

// Reusable component for displaying a card with full-width hero style
const InfoCard = ({ Icon, title, description, expandedDescription, isExpanded, onToggleExpand }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 lg:mb-12"
  >
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-8 md:p-12 bg-bardum flex items-center justify-center">
        <Icon className="text-white text-6xl" />
      </div>
      <div className="md:w-1/2 p-6 md:p-12">
        <h4 className="text-3xl font-bold text-gray-800 mb-4">{title}</h4>
        <p className="text-gray-600 text-lg mb-6">{description}</p>
        {isExpanded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-md"
          >
            {expandedDescription}
          </motion.p>
        )}
        <div className="mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleExpand}
            className="px-8 py-3 bg-bardum text-white rounded-full font-semibold transition-all duration-300"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

const DiscoverOurSolutions = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpandCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
      expandedDescription:
        "Our consolidation loans offer flexible terms and competitive rates, helping you reduce your monthly payments and simplify your financial life.",
    },
    {
      Icon: FaGraduationCap,
      title: "Student Loan",
      description:
        "Secure low-interest loans to cover your tuition and other education expenses.",
      expandedDescription:
        "Our student loans provide the financial support you need to pursue your education goals, with flexible repayment options tailored to your situation.",
    },
    {
      Icon: FaUserTie,
      title: "Personal Loan",
      description:
        "Get flexible personal loans with competitive rates for any purpose.",
      expandedDescription:
        "Whether you're planning a major purchase or need funds for unexpected expenses, our personal loans are designed to meet your needs with favorable terms.",
    },
  ];

  // Data for additional info cards
  const additionalInfoCards = [
    {
      Icon: MdOutlineSavings,
      title: "Retirement Savings",
      description:
        "Plan for a comfortable retirement with tailored savings plans.",
      expandedDescription:
        "Start planning your retirement today with our personalized savings plans, designed to help you build a secure and comfortable future.",
    },
    {
      Icon: FaUserTie,
      title: "Business Loan",
      description:
        "Obtain the financing needed to grow and expand your business.",
      expandedDescription:
        "Our business loans offer flexible financing solutions for entrepreneurs looking to take their business to the next level.",
    },
    {
      Icon: FaMoneyCheckAlt,
      title: "Auto Loan",
      description: "Finance your new car with low-interest auto loans.",
      expandedDescription:
        "Get on the road faster with our competitive auto loans, featuring low interest rates and flexible repayment terms.",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans py-16 px-4 md:px-8 lg:px-16">
      {/* Banner Section */}
   

      <h2 className="text-4xl font-extrabold text-center text-bardum mb-8">
        Discover Our Solutions
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        At Assurance Partners LLC, we provide a range of tailored financial
        solutions designed to meet your unique needs. Whether you're looking to
        consolidate your debt, finance your education, or manage your personal
        finances, we have the right options for you.
      </p>

<br />
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
      <br />
      <br />
      <br />

      <br />
      <br />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-bardum to-indigo-600 text-white py-16 px-8 md:px-16 rounded-lg mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unlock Your Financial Future
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl">
          At Assurance Partners LLC, we empower you with the tools and
          resources needed to achieve financial freedom. Explore our range of
          tailored solutions today and take the first step towards a brighter
          future.
        </p>
      </motion.div>
      <br />
      <br />
      <br />

      {/* Hero Section for Cards */}
      <div className="space-y-12">
        {initialInfoCards.map((card, index) => (
          <InfoCard
            key={index}
            Icon={card.Icon}
            title={card.title}
            description={card.description}
            expandedDescription={card.expandedDescription}
            isExpanded={expandedCard === index}
            onToggleExpand={() => toggleExpandCard(index)}
          />
        ))}
        {showMoreCards &&
          additionalInfoCards.map((card, index) => (
            <InfoCard
              key={index}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
              expandedDescription={card.expandedDescription}
              isExpanded={expandedCard === index + initialInfoCards.length}
              onToggleExpand={() =>
                toggleExpandCard(index + initialInfoCards.length)
              }
            />
          ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        {!showMoreCards && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setShowMoreCards(true)}
            className="bg-bardum text-white font-semibold text-lg tracking-wide rounded-md px-8 py-3 transition-all duration-500"
          >
            Explore More Options
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default DiscoverOurSolutions;
