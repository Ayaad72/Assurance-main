import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css"; // Import the CSS file for transitions

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link to="/">
          <img src={logo} alt="logo" className="w-48" />
        </Link>

        <nav className="hidden lg:flex gap-x-5">
          <Link
            to="/aboutus"
            className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
          >
            About Us
          </Link>
          <Link
            to="/HomeEquity"
            className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
          >
            Services
          </Link>
          <Link
            to="/FinancialSolutions"
            className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
          >
            Financial Solutions
          </Link>
          <Link
            to="/contactus"
            className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex max-lg:ml-auto space-x-3">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[red] bg-[red] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[red]">
            Login
          </button>
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[red] bg-[red] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[red]">
            Sign up
          </button>

          <button
            id="toggleOpen"
            onClick={handleMenuToggle}
            className={`lg:hidden hamburger-button ${isMenuOpen ? "open" : ""}`}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        <CSSTransition
          in={isMenuOpen}
          timeout={300}
          classNames="menu-slide"
          unmountOnExit
        >
          <div
            id="collapseMenu"
            className="lg:hidden fixed left-0 top-[70px] w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out"
          >
            <ul className="space-y-3 p-6">
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/aboutus"
                  className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
                >
                  About Us
                </Link>
              </li>
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/HomeEquity"
                  className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
                >
                  Services
                </Link>
              </li>
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/FinancialSolutions"
                  className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
                >
                  Financial Solutions
                </Link>
              </li>
              <li className="border-b border-gray-300 py-3 px-3">
                <Link
                  to="/contactus"
                  className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Header;
