import React, { useState, useEffect } from "react";
import { FaBuilding, FaUniversity, FaShieldAlt } from "react-icons/fa";
import slidernew from "../assets/hero-img.png";
import { useCreateLoanMutation } from "../slices/loanApiSlice";
import Percentage from "../components/Percentage";
import Video from "./home/Video";
import { motion } from "framer-motion";
import "./marquee.css"; // Import the custom CSS for marquee

const slides = [
  {
    image: slidernew,
    title: "Accelerate Your Business Growth with",
    highlight: "Performance Marketing",
    description:
      "Unlock the potential of your business by leveraging cutting-edge marketing strategies that drive measurable growth and deliver exceptional ROI.",
  },
  {
    image: slidernew,
    title: "Enhance Brand Visibility through",
    highlight: "Targeted Campaigns",
    description:
      "Boost your brand's presence and engage the right audience with precision-targeted marketing efforts designed for maximum impact.",
  },
  {
    image: slidernew,
    title: "Drive Success with",
    highlight: "Data-Driven Strategies",
    description:
      "Empower your business decisions with data-driven insights that lead to sustainable growth and long-term success in a competitive market.",
  },
];

const marqueeItems = [
  "10+ Years of Experience",
  "890 Cases Solved",
  "250 Business Partners",
  "Tailored Financial Solutions",
  "10+ Years of Experience",
  "890 Cases Solved",
  "250 Business Partners",
  "Tailored Financial Solutions",
  "250 Business Partners", // Duplicate item example
];

const serviceItems = [
  {
    icon: <FaBuilding />,
    title: "Corporate Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaUniversity />,
    title: "Banking Institutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Insurance Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [updateloanfunc, { isLoading, error, isSuccess }] =
    useCreateLoanMutation();

  let obj = {
    // Object details here...
  };

  const handleSubmit = async () => {
    console.log("object:", obj);
    try {
      const response = await updateloanfunc(obj, {
        baseUrl: "http://localhost:8000/api/v1/loan/submit",
      }).unwrap();

      console.log("Success:..............", response);
    } catch (err) {
      console.error("Failed to send data:..........", err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <>
      <div className="font-sans max-w-[80rem] max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
          <motion.div
            className="max-md:order-1 max-md:text-center z-50 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">
              <span className="text-red">Assuring</span> Your Future
              <span className="text-red">and Financial Success</span>
            </h2>
            <p className="text-gray-600 mt-6 text-base leading-relaxed px-4 md:px-0">
              At Assurance Partners LLC, we guide you through every step of your
              financial journey. Whether you're planning for retirement,
              investing, or seeking comprehensive solutions, our expert team is
              here to ensure your goals are achieved with precision and care.
              Trust us to navigate the complexities of financial planning, so
              you can enjoy a secure and prosperous future.
            </p>

            <button
              type="button"
              className="mt-6 bg-red-600 hover:bg-gray-400 hover:text-black-600 border-2 border-black-600 transition-all text-white font-semibold text-sm tracking-wide rounded-md px-6 py-2.5"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Get Started"}
            </button>

            {isSuccess && (
              <p className="text-green-600 mt-2">
                Loan request sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 mt-2">
                Failed to send loan request. Please try again.
              </p>
            )}
          </motion.div>

          <motion.div
            className="lg:h-[550px] w-full md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:h-[120%] before:w-[120%] before:right-0 before:z-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={slides[currentIndex].image}
              className="rounded-md w-full h-auto mt-8 max-w-full max-h-full object-cover relative z-20"
              alt={slides[currentIndex].title}
            />
          </motion.div>
        </div>
        <br />
        <br />

        {/* Marquee Section */}
        <motion.div
          className="relative mt-12 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="marquee-container">
            <div className="marquee-content">
              {marqueeItems.map((item, index) => (
                <div key={index} className="marquee-item">
                  {item}
                </div>
              ))}
              {/* Duplicate the items to create the continuous effect */}
              {marqueeItems.map((item, index) => (
                <div key={`duplicate-${index}`} className="marquee-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <br />
        <br />
        <br />
        <br />

        {/* Service Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 z-50 relative md:px-4 max-md:mt-12 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 p-8 shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 group hover:bg-blue-100"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 mb-4 inline-block p-3 rounded-full text-black bg-blue-100 group-hover:text-black group-hover:bg-light-blue-500">
                {service.icon}
              </div>
              <h5 className="text-lg leading-6 mb-3 font-bold text-red-900 group-hover:text-black">
                {service.title}
              </h5>
              <p className="text-gray-700 group-hover:text-black">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <br />
        <br />

        {/* Percentage Section */}
        <motion.div
          className="p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Main Heading */}
          <div className="text-center mb-8">
            <p className="text-red text-2xl font-bold mb-2">
              Featured Rates on Our Network
            </p>
            <p className="text-gray-600 text-sm">
              Explore the best rates available to you
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Percentage
              title="Mortgage"
              apr="7.47"
              term="5/1 ARM"
              amount="200,000"
              color="border-teal-500"
            />
            <Percentage
              title="Home Refinance"
              apr="6.53"
              term="30 YEAR FIXED"
              amount="200,000"
              color="border-yellow-500"
            />
            <Percentage
              title="Personal Loans"
              apr="6.99"
              term="3 YEAR"
              amount="20,000"
              color="border-blue-500"
            />
            <Percentage
              title="HELOC"
              apr="6.88"
              term="30 YEAR FIXED"
              amount="50,000"
              color="border-red-500"
            />
          </div>
          <br />
          <br />
        </motion.div>

        <Video />
      </div>
      <br />
    </>
  );
};

export default HomeScreen;
