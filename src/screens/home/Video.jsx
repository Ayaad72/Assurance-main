import React from "react";
import { motion } from "framer-motion";

// Import the Google Font directly within your component
const googleFontLink = document.createElement("link");
googleFontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
googleFontLink.rel = "stylesheet";
document.head.appendChild(googleFontLink);

function Video() {
  return (
    <div
      className="flex flex-col lg:flex-row h-screen "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Left Side - Video Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center  p-4 lg:p-0">
        <motion.div
          className="w-full lg:w-[90%] h-[50vh] lg:h-[90%] shadow-xl rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/XAJMPvxs2Aw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>

      {/* Right Side - Titles and Text */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 lg:p-12 bg-[#e2eeea] text-gray-800">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-red-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Assurance Partners LLC
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl  mb-6 text-gray-700 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          light
        >
          Your Gateway to Financial Success.
        </motion.p>
        <motion.p
          className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          At Assurance Partners LLC, we specialize in crafting business
          promotion strategies that ensure long-term financial stability and
          growth. Our expert team is dedicated to helping you reach your
          business goals with precision and professionalism.
        </motion.p>
        <motion.button
          className="px-6 py-3 lg:px-8 lg:py-3 bg-red-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          whileHover={{ scale: 1.05 }}
        >
          <a href="/DiscoverSolutions">Discover Our Solutions</a>{" "}
          {/* Wrap the button text with an anchor tag */}
        </motion.button>
      </div>
    </div>
  );
}

export default Video;
