import React, { useState } from "react";
import {
  FaDollarSign,
  FaHome,
  FaCreditCard,
  FaShieldAlt,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    name: "Home Equity",
    icon: <FaDollarSign />,
    description:
      "Unlock the value of your home to secure financing for big projects or to manage debt effectively. Home equity loans give you access to funds based on your property's worth.",
    details:
      "Take advantage of your home's equity to achieve your financial goals, whether it's renovating, consolidating debt, or managing large expenses. Home equity solutions often offer lower interest rates, making it a cost-effective way to borrow.",
    image: "https://moneyfcu.org/wp-content/uploads/2021/01/homeequity.png",
  },
  {
    id: 2,
    name: "Home Refinance",
    icon: <FaHome />,
    description:
      "Refinance your home to lower your mortgage rate or access your home’s equity. Compare refinancing options from multiple lenders to get the best deal.",
    details:
      "Refinancing your mortgage can save you money by lowering your interest rate, reducing your monthly payments, or even shortening your loan term. Discover the best refinancing options tailored to your needs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBD-2fO7ttyHUnjnNlva3e5B591U3VV9jhGw&s",
  },
  {
    id: 3,
    name: "Personal Loans",
    icon: <FaCreditCard />,
    description:
      "Get the funds you need without using your home as collateral. Personal loans offer a flexible way to borrow money for any purpose.",
    details:
      "Personal loans can be a great option for consolidating debt, financing large purchases, or covering unexpected expenses. Compare offers from top lenders and choose the loan that best fits your budget.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbStFziUbDEQxoeqV_h4qlX10yhwvVNwjpcxKKGz0uHj1gSMpipsfxb9w9bWr1-8Baj_I&usqp=CAU",
  },
  {
    id: 4,
    name: "Insurance",
    icon: <FaShieldAlt />,
    description:
      "Ensure your peace of mind by protecting your assets with comprehensive insurance coverage. Compare policies to find the best fit for your needs.",
    details:
      "From home and auto to life and health, insurance is a critical part of financial security. Compare options to find the right coverage at a price that works for you.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwf7bAItWTSGGJIIbBNb065aY4ctig0_9WdA&s",
  },
  {
    id: 5,
    name: "Business Loans",
    icon: <FaBriefcase />,
    description:
      "Fuel your business growth with the right financing solutions. Compare business loan offers to find the capital you need to expand.",
    details:
      "Whether you're starting a new venture or expanding an existing one, business loans provide the funding necessary to achieve your business goals. Find flexible loan options tailored to your specific needs.",
    image:
      "https://res.cloudinary.com/zenbusiness/q_auto,w_6000,h_3523/v1/shared-assets/s2/raster/pointing-at-funding.jpg",
  },
  {
    id: 6,
    name: "Student Loan",
    icon: <FaChartLine />,
    description:
      "Finance your education with a student loan that fits your budget. Compare rates and terms to make higher education more affordable.",
    details:
      "Student loans can help you cover the cost of tuition, books, and living expenses while you pursue your degree. Find the right loan option to support your educational journey.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4mGxid8E6iY5dMjewnErp2nAzvg1leNFaA&s",
  },
  {
    id: 7,
    name: "Tax Relief/Fix",
    icon: <FaChartLine />,
    description:
      "Resolve tax issues and reduce your tax burden with professional tax relief services. Explore options to get back on track.",
    details:
      "If you're dealing with tax problems, finding the right tax relief service can help you negotiate with the IRS, reduce your debt, and avoid penalties. Learn about your options for tax relief and take control of your financial situation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVO5atfnganvoaZ4cTaH6JHtyLCJgQCBP2dxGXLA29CBdanuZxNeo9TwxAPXc6Jy8klm4&usqp=CAU",
  },
];

const HomeEquityComponent = () => {
  const [selectedCard, setSelectedCard] = useState(cardData[0]);

  return (
    <div className="bg-slate-50 font-sans flex flex-col items-center p-4 min-h-screen">
      <p className="text-3xl text-main font-bold mb-4">
        Explore financial solutions tailored to your needs.
      </p>
      <div className="flex flex-wrap justify-center mb-6">
        {cardData.map((card) => (
          <button
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className={`flex flex-col items-center m-2 p-4 rounded-lg border w-28 h-28 ${
              selectedCard.id === card.id
                ? "bg-[#d70040] text-white"
                : "bg-gray-100"
            } transition duration-300 ease-in-out transform hover:scale-105`}
          >
            <div
              className={`text-4xl mb-2 ${
                selectedCard.id === card.id ? "text-white" : "text-red-700"
              } transition duration-300 ease-in-out`}
            >
              {card.icon}
            </div>
            <div className="text-sm font-semibold text-center">{card.name}</div>
          </button>
        ))}
      </div>

      <motion.div
        key={selectedCard.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-xl text-red-700 font-semibold mb-2">
          {selectedCard.name}
        </h2>
        <p className="text-gray-600 mb-4">{selectedCard.description}</p>
        <motion.img
          key={selectedCard.image}
          src={selectedCard.image}
          alt={selectedCard.name}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-48 object-contain rounded-lg mb-4"
        />

        <p className="text-gray-700 mb-4">{selectedCard.details}</p>
        <div className="flex justify-center mt-4 space-x-2">
          <Link to="/Form">
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg">
              Compare Rates
            </button>
          </Link>
          <button className="border border-red-600 text-red-700 py-2 px-4 rounded-lg">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeEquityComponent;
