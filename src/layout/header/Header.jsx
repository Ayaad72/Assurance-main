import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import assuranceLogo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header
      className={`${
        scrolled ? "bg-white shadow-md" : "bg-gray-50"
      } font-[sans-serif] min-h-[70px] tracking-wide w-full z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="relative flex items-center justify-between py-3 px-4 border sm:px-10">
        <Link to="/">
          <div className="w-[350px]">
            <img
              src={assuranceLogo}
              alt="Assurance logo"
              className="h-[100px] w-[270px] object-cover ml-0 sm:ml-0 md:ml-16"
            />
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-black bg-transparent"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>

        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className={`overflow-hidden lg:overflow-visible lg:flex lg:items-center w-full lg:w-auto absolute lg:static top-full left-0 px-4 lg:p-0 z-50 bg-white lg:bg-transparent transition-all duration-300 ease-in-out`}
          style={{ top: "calc(100% + 8px)" }}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 font-bold text-lg lg:text-base">
            <motion.li
              whileTap={{ scale: 0.95 }} // Add a tap effect on menu items
              onClick={handleLinkClick}
            >
              <Link
                to="/AboutUs"
                className="relative hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-[2px] hover:before:bg-black hover:before:w-full hover:before:transition-all hover:before:duration-300"
              >
                About Us
              </Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              <Link
                to="/HomeEquity"
                className="relative hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-[2px] hover:before:bg-black hover:before:w-full hover:before:transition-all hover:before:duration-300"
              >
                Services
              </Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              <Link
                to="/FinancialSolutions"
                className="relative hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-[2px] hover:before:bg-black hover:before:w-full hover:before:transition-all hover:before:duration-300"
              >
                Financial Solutions
              </Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              <Link
                to="/Form"
                className="relative hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-[2px] hover:before:bg-black hover:before:w-full hover:before:transition-all hover:before:duration-300"
              >
                Form
              </Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.95 }}
              onClick={handleLinkClick}
            >
              <Link
                to="/ContactUs"
                className="relative hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:h-[2px] hover:before:bg-black hover:before:w-full hover:before:transition-all hover:before:duration-300"
              >
                Contact Us
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
