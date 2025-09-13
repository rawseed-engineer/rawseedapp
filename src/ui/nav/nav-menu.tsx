import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import RawSeedLogo from "./../../assets/rawseed_logo.png";
import { Link, useLocation } from "react-router-dom";
import RawSeedLogo from "../../assets/rawseed_logo.png";

const NavMenu: React.FC = () => {
  // const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-8 sm:px-6 lg:px-8 transition-all duration-300 ${
        isSticky
          ? "bg-[#181818] bg-opacity-50 backdrop-blur-lg shadow-lg animate-[changeColorAnim_4s_linear]"
          : "bg-transparent"
      }`}
    >
      {/* Sticky Navigation */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Link
            to="/rawseedapp"
            style={{
              textDecoration:
                location.pathname === "/rawseedapp" ? "underline" : "none",
              fontWeight:
                location.pathname === "/rawseedapp" ? "bold" : "normal",
            }}
          >
            <img
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="mx-8 h-[2.5rem] aspect-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-3xl">
          <Link to="/rawseedapp/golden-drop">
            <h2 className="text-43l text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200">
              Golden Drop
            </h2>
          </Link>

          <Link to="/rawseedapp/sesame-oil">
            <h2 className="text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200">
              {t("menu.sesame_oil")}
            </h2>
          </Link>

          <Link to="/rawseedapp/blackseed-oil">
            <h2 className="text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200">
              {t("menu.black_seed_oil")}
            </h2>
          </Link>

          <Link to="/rawseedapp/about-us">
            <h2 className="text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200">
              About us
            </h2>
          </Link>

          <Link to="/rawseedapp/contact">
            {/* bg-[#a18458] */}
            {/* <h2
              className="bg-gradient-to-r from-amber-300 to-yellow-700 text-white text-shadow-lg px-6 py-2 rounded-full 
            hover:from-amber-700 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105"
            > */}
            <h2
              className="bg-gradient-to-r from-[#996515] to-[#996515] text-white px-6 py-2 rounded-full 
            "
            >
              {/* hover:from-amber-700 hover:to-yellow-700 transition-all
              duration-200 transform hover:scale-105" */}
              {t("menu.get_started")}
            </h2>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-300 transition-colors duration-200"
        >
          {isMenuOpen
            ? // <X className="w-6 h-6" />
              `X`
            : // <Menu className="w-6 h-6" />
              `Menu`}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 backdrop-blur-lg bg-opacity-95 border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#home"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Home
            </a>
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Features
            </a>
            <a
              href="#services"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Contact
            </a>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
