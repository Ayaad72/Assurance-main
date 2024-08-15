import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link to="/">
          <img src={logo} alt="logo" className="w-48 h-22" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-x-5 text-[19px] ml-auto">
          <Link
            to="/aboutus"
            className="hover:text-red-700 text-gray-500 block font-semibold"
          >
            About Us
          </Link>
          <Link
            to="/HomeEquity"
            className="hover:text-red-700 text-gray-500 block font-semibold"
          >
            Services
          </Link>
          <Link
            to="/FinancialSolutions"
            className="hover:text-red-700 text-gray-500 block font-semibold"
          >
            Financial Solutions
          </Link>
          <Link
            to="/contactus"
            className="hover:text-red-700 text-gray-500 block font-semibold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex max-lg:ml-auto space-x-3">
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={handleMenuToggle}
            className="text-red-600"
            style={{ fontSize: "24px", cursor: "pointer" }}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={faBars} />
          </motion.button>
        </div>

        {/* Mobile Drawer Menu */}
        <CSSTransition
          in={isMenuOpen}
          timeout={300}
          classNames={{
            enter: "menu-slide-enter",
            enterActive: "menu-slide-enter-active",
            exit: "menu-slide-exit",
            exitActive: "menu-slide-exit-active",
          }}
          unmountOnExit
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed left-0 top-[70px] w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out"
          >
            <ul className="space-y-3 p-6">
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/aboutus"
                  className="hover:text-red-700 text-gray-500 block font-semibold"
                >
                  About Us
                </Link>
              </li>
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/HomeEquity"
                  className="hover:text-red-700 text-gray-500 block font-semibold"
                >
                  Services
                </Link>
              </li>
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/FinancialSolutions"
                  className="hover:text-red-700 text-gray-500 block font-semibold"
                >
                  Financial Solutions
                </Link>
              </li>
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/contactus"
                  className="hover:text-red-700 text-gray-500 block font-semibold"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        </CSSTransition>
      </div>

      {/* Inline Styles for Menu Transition */}
      <style jsx="true">{`
        .menu-slide-enter {
          transform: translateY(-100%);
        }
        .menu-slide-enter-active {
          transform: translateY(0);
          transition: transform 300ms ease-in-out;
        }
        .menu-slide-exit {
          transform: translateY(0);
        }
        .menu-slide-exit-active {
          transform: translateY(-100%);
          transition: transform 300ms ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;