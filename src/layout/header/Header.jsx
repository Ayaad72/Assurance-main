import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="javascript:void(0)">
          <img src={logo} alt="logo" className="w-36" />
        </a>

        <nav className="hidden lg:flex gap-x-5">
          {["About Us", "Services", "Financial Solutions", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href="javascript:void(0)"
                className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
              >
                {item}
              </a>
            )
          )}
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
            className="lg:hidden"
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
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
            <button
              id="toggleClose"
              onClick={handleMenuToggle}
              className="absolute top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
              </svg>
            </button>

            <ul className="space-y-3 p-6">
              {[
                "About Us",
                "Services",
                "Financial Solutions",
                "Contact Us",
              ].map((item) => (
                <li key={item} className="border-b border-gray-300 py-3 px-3">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[red] text-gray-500 block font-semibold text-[15px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Header;
