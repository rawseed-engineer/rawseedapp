import React from "react";
import { Link } from "react-router-dom";
import RawSeedLogo from "../../assets/rawseed_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  // faFacebook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              ZAP
            </div> */}
            <img
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="h-[1.5rem] aspect-auto"
            />
            {/* <span className="text-xl font-bold text-white">Rawseed</span> */}
          </div>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Wholesome Oils for Healthy Living
          </p>
          <div className="flex space-x-1">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#a18458] transition-colors duration-200"
            >
              {/* <Facebook className="w-5 h-5 text-gray-400 hover:text-white" /> */}
              {/* <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#cfb997] inline-block w-full"
              /> */}
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#0165E1] inline-block"
                style={{ height: "36px" }}
                size={"2x"}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#a18458] transition-colors duration-200"
            >
              {/* <Twitter className="w-5 h-5 text-gray-400 hover:text-white" /> */}

              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-[#1DA1F2] inline-block"
                style={{ height: "36px" }}
                size={"2x"}
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#a18458] transition-colors duration-200"
            >
              {/* <Instagram className="w-5 h-5 text-gray-400 hover:text-white" /> */}
              <FontAwesomeIcon
                icon={faInstagram}
                className="bg-gradient-to-r from-[#405de6] via-[#5851db] via-[#833ab4] via-[#c13584] via-[#e1306c] to-[#fd1d1d] inline-block"
                style={{ height: "36px" }}
                size={"2x"}

                // linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="hidden md:block">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/rawseedapp/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Rawseed Home
              </Link>
            </li>
            <li>
              <Link
                to="/rawseedapp/sesame-oil"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Sesame Oil
              </Link>
            </li>
            <li>
              <Link
                to="/rawseedapp/blackseed-oil"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Blackseed Oil
              </Link>
            </li>
            <li>
              <Link
                to="/rawseedapp/flaxseed-oil"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Flaxseed Oil
              </Link>
            </li>
            <li>
              <a
                href="/rawseedapp/about-us"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div id="contact">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              {/* <Mail className="w-5 h-5 text-purple-400" /> */}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#cfb997] inline-block"
                style={{ height: "36px" }}
              />
              <span className="text-gray-400">info@rawseed.com</span>
            </div>
            {/* <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-[#cfb997] inline-block"
                style={{ height: "36px" }}
              />
              <span className="text-gray-400">+44 123-4567-89</span>
            </div> */}
            <div className="flex items-center space-x-3">
              {/* <MapPin className="w-5 h-5 text-purple-400" /> */}
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[#cfb997] inline-block"
                style={{ height: "36px" }}
              />
              <span className="text-gray-400">
                167-169 Great Portland Street, London
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © 2025 RawSeed Ltd. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Cookie Policy
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
