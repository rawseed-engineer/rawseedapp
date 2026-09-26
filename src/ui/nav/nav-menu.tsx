import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import RawSeedLogo from "./../../assets/rawseed_logo.png";
import { Link, useLocation } from "react-router-dom";
import RawSeedLogo from "../../assets/rawseed_logo2.png";
import RawSeedMobileLogo from "../../assets/rawseed_logo3.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import ButtonWithExpandingUnderline from "../ButtonWithExpandingUnderline";

const NavMenu: React.FC = () => {
  // const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { t } = useTranslation();
  const location = useLocation();
  const [activePath, setActivePath] = useState<string>(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
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
        <div className="hidden lg:block flex items-center space-x-2">
          <Link
            to="/rawseedapp"
            aria-hidden={!isSticky}
            tabIndex={isSticky ? 0 : -1}
            className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
              isSticky
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
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
              className="mx-8 h-[2.5rem] lg:h-[4rem] aspect-auto"
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

          <ButtonWithExpandingUnderline className="text-3xl hover:text-white">
            <Link
              to="/rawseedapp/sesame-oil"
              onClick={() => setActivePath("/rawseedapp/sesame-oil")}
            >
              <h2
                style={
                  activePath === "/rawseedapp/sesame-oil" ||
                  location.pathname === "/rawseedapp/sesame-oil"
                    ? { color: "#a18458" }
                    : undefined
                }
              >
                {t("menu.sesame_oil")}
              </h2>
            </Link>
          </ButtonWithExpandingUnderline>

          <ButtonWithExpandingUnderline className="text-3xl hover:text-white">
            <Link
              to="/rawseedapp/flaxseed-oil"
              onClick={() => setActivePath("/rawseedapp/flaxseed-oil")}
            >
              <h2
                style={
                  activePath === "/rawseedapp/flaxseed-oil" ||
                  location.pathname === "/rawseedapp/flaxseed-oil"
                    ? { color: "#a18458" }
                    : undefined
                }
              >
                {t("menu.flax_seed_oil")}
              </h2>
            </Link>
          </ButtonWithExpandingUnderline>

          <ButtonWithExpandingUnderline className="text-3xl hover:text-white">
            <Link
              to="/rawseedapp/blackseed-oil"
              onClick={() => setActivePath("/rawseedapp/blackseed-oil")}
            >
              <h2
                style={
                  activePath === "/rawseedapp/blackseed-oil" ||
                  location.pathname === "/rawseedapp/blackseed-oil"
                    ? { color: "#a18458" }
                    : undefined
                }
              >
                {t("menu.black_seed_oil")}
              </h2>
            </Link>
          </ButtonWithExpandingUnderline>

          <ButtonWithExpandingUnderline className="text-3xl hover:text-white">
            <Link
              to="/rawseedapp/about-us"
              onClick={() => setActivePath("/rawseedapp/about-us")}
            >
              <h2
                style={
                  activePath === "/rawseedapp/about-us" ||
                  location.pathname === "/rawseedapp/about-us"
                    ? { color: "#a18458" }
                    : undefined
                }
              >
                About Us
              </h2>
            </Link>
          </ButtonWithExpandingUnderline>

          {/* <Link to="/rawseedapp/contact">
            <h2
              className="bg-gradient-to-r from-[#996515] to-[#996515] text-white px-6 py-2 rounded-full 
            "
            >
              {t("menu.get_started")}
            </h2>
          </Link> */}

          {/* bg-gradient-to-tr from-[#996515] to-[#a67c00] */}

          <div className="relative mt-4 flex h-12 w-12">
            <Link
              to="/rawseedapp/contact"
              onClick={() => setActivePath("/rawseedapp/contact")}
            >
              {/* <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 opacity-75"></div> */}
              <div className="absolute inline-flex h-full w-full animate-[ping_5s_cubic-bezier(0.22,1,0.36,1)_infinite] rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 opacity-75"></div>
              <div
                className="absolute
              -top-[25%] w-full h-full
              rounded-[100%_5%_100%_100%]
              rotate-[-45deg]
              bg-gradient-to-tr from-[#cfb997] to-[#a67c00]
              hover:from-[#a67c00] hover:to-yellow transition-all duration-200 transform 
              hover:scale-120
              hover:opacity-100 duration-300
              text-white py-5 text-xl text-center font-semibold"
              >
                <div className="relative -translate-x-1 -translate-y-4 text-pretty text-sm text-white text-shadow-lg opacity-0 hover:opacity-100 duration-300 rotate-[45deg]">
                  Contact Us
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile menu controls */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="relative z-30 flex h-11 w-11 items-center justify-center text-white transition-colors duration-200 hover:text-gray-300"
          >
            <span
              aria-hidden="true"
              className={`absolute h-[2px] w-8 bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[9px]"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-[2px] w-8 bg-current transition-[opacity,transform] duration-200 ease-in-out motion-reduce:transition-none ${
                isMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-[2px] w-8 bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[9px]"
              }`}
            />
          </button>
          <Link
            to="/rawseedapp/"
            aria-label="RawSeed home"
            aria-hidden={!isSticky}
            tabIndex={isSticky ? 0 : -1}
            className={`relative z-30 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
              isSticky
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <img
              src={RawSeedMobileLogo}
              alt="RawSeed"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-10 bg-black/45 transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed left-0 top-0 z-20 h-dvh w-[250px] overflow-y-auto border-r border-white/10 bg-[#181818]/95 pt-24 shadow-xl backdrop-blur-lg transition-[transform,visibility] duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none lg:hidden ${
          isMenuOpen ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <div className="space-y-4 px-4 pb-6">
          <Link
            to="/rawseedapp/"
            onClick={() => {
              setActivePath("/rawseedapp/");
              setIsMenuOpen(false);
            }}
          >
            <div
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
              style={
                activePath === "/rawseedapp/" ||
                location.pathname === "/rawseedapp/"
                  ? { color: "#a18458" }
                  : undefined
              }
            >
              Home
            </div>
          </Link>
          <Link
            to="/rawseedapp/sesame-oil"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setActivePath("/rawseedapp/sesame-oil")}
              style={
                activePath === "/rawseedapp/sesame-oil" ||
                location.pathname === "/rawseedapp/sesame-oil"
                  ? { color: "#a18458" }
                  : undefined
              }
            >
              {t("menu.sesame_oil")}
            </div>
          </Link>
          <Link
            to="/rawseedapp/flaxseed-oil"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2"
              onClick={() => setActivePath("/rawseedapp/flaxseed-oil")}
              style={
                activePath === "/rawseedapp/flaxseed-oil" ||
                location.pathname === "/rawseedapp/flaxseed-oil"
                  ? { color: "#a18458" }
                  : undefined
              }
            >
              {t("menu.flax_seed_oil")}
            </div>
          </Link>
          <Link
            to="/rawseedapp/blackseed-oil"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2"
              onClick={() => setActivePath("/rawseedapp/blackseed-oil")}
              style={
                activePath === "/rawseedapp/blackseed-oil" ||
                location.pathname === "/rawseedapp/blackseed-oil"
                  ? { color: "#a18458" }
                  : undefined
              }
            >
              {t("menu.black_seed_oil")}
            </div>
          </Link>
          <Link to="/rawseedapp/about-us" onClick={() => setIsMenuOpen(false)}>
            <div
              className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2"
              onClick={() => setActivePath("/rawseedapp/about-us")}
              style={
                activePath === "/rawseedapp/about-us" ||
                location.pathname === "/rawseedapp/about-us"
                  ? { color: "#a18458" }
                  : undefined
              }
            >
              About Us
            </div>
          </Link>

          <Link
            to="/rawseedapp/contact"
            onClick={() => {
              setActivePath("/rawseedapp/contact");
              setIsMenuOpen(false);
            }}
          >
            <div
              className="block text-gray-300 text-shadow-lg hover:text-white transition-colors duration-200 py-2 
              "
              style={
                activePath === "/rawseedapp/contact" ||
                location.pathname === "/rawseedapp/contact"
                  ? { color: "#a18458" }
                  : undefined
              }
            >
              {t("menu.get_started")}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
