import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import RawSeedLogo from "./../../assets/rawseed_logo.png";
import { Link, useLocation } from "react-router-dom";
import RawSeedLogo from "../../assets/rawseed_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex items-center justify-between lg:max-w-7xl mx-auto">
        <div className="hidden md:block flex items-center space-x-2">
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
              className="mx-8 h-[1.5rem] lg:h-[2.5rem] aspect-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 text-3xl">
          {/* <Link to="/rawseedapp/golden-drop">
            <h2 className="text-43l text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200">
              Golden Drop
            </h2>
          </Link> */}

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

          <Link to="/rawseedapp/flaxseed-oil">
            <h2 className="text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200">
              {t("menu.flax_seed_oil")}
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
          className="lg:hidden text-4xl text-white hover:text-gray-300 transition-colors duration-200"
        >
          {isMenuOpen ? (
            // <X className="w-6 h-6" />
            `X`
          ) : (
            // <Menu className="w-6 h-6" />
            // `Menu`
            <FontAwesomeIcon
              icon={faBars}
              className="text-white inline-block"
              style={{ height: "36px" }}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        // <div
        //   className="lg:hidden absolute top-full left-0 right-0 bg-slate-800
        //   backdrop-blur-lg  border-t border-gray-700
        //   translate-y-1/2
        //   animate-[smoothAppear_2s_ease_forwards]"
        // >
        // <div
        //   className="lg:hidden absolute top-full left-0 right-0
        //     transition: 300ms left cubic-bezier(0.77, 0, 0.175, 1)"
        // >
        <div
          className="h-full fixed left-0 w-[250px] mt-6
          transform translate-x-4
          transition-transform duration-250 ease-in-out
          linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%)"
        >
          <div className="px-4 py-6 space-y-4 bg-[#181818] bg-opacity-90 backdrop-blur-lg border-t border-gray-700">
            <Link to="/rawseedapp/">
              <div className="block text-gray-300 hover:text-white transition-colors duration-200 py-2">
                Home
              </div>
            </Link>
            <Link to="/rawseedapp/sesame-oil">
              <div className="block text-gray-300 hover:text-white transition-colors duration-200 py-2">
                {t("menu.sesame_oil")}
              </div>
            </Link>
            <Link to="/rawseedapp/blackseed-oil">
              <div className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2">
                {t("menu.black_seed_oil")}
              </div>
            </Link>
            <Link to="/rawseedapp/flaxseed-oil">
              <div className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2">
                {t("menu.flax_seed_oil")}
              </div>
            </Link>
            <Link to="/rawseedapp/about-us">
              <div className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2">
                About Us
              </div>
            </Link>

            <Link to="/rawseedapp/contact">
              <div
                className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2 
              "
              >
                {t("menu.get_started")}
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
