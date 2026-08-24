import React from "react";
import { useState } from "react";
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
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ShineText from "../ShineText";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="md:col-span-1">
          {/* <div className="flex items-center space-x-2 mb-4">
            <img
              src={RawSeedLogo}
              alt="RawSeed Logo"
              className="h-[1.5rem] aspect-auto"
            />
          </div> */}
          <h3 className="text-lg font-semibold text-white mb-4">RawSeed</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">
            <ShineText className="text-lg" duration="3s">
              {t("hero.home.subtitle")}
            </ShineText>
          </p>
          <div className="w-full max-w-[350px]">
            <h4 className="text-[1.1rem] text-white">Follow us on</h4>
            <ul className="mt-3 flex flex-wrap gap-2 p-0 list-none">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center bg-[#181818] text-white transition-colors duration-200 hover:bg-[#3d5b99]"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center bg-[#181818] text-white transition-colors duration-200 hover:bg-[#c13584]"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center bg-[#181818] text-white transition-colors duration-200 hover:bg-[#00aced]"
                >
                  <FontAwesomeIcon icon={faXTwitter} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center bg-[#181818] text-white transition-colors duration-200 hover:bg-[#e64a41]"
                >
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </li>
            </ul>
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
              <span className="text-gray-400">info@rawseed.co.uk</span>
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
                167-169 Great Portland Street, 5th Floor, London, W1W 5PF
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © 2025-2026 RawSeed Ltd. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <button
            type="button"
            onClick={() => setIsPrivacyPolicyOpen(true)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </button>
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

      {isPrivacyPolicyOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-[#a18458] bg-[#181818] text-gray-200 shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
          role="dialog"
          aria-modal="false"
          aria-labelledby="privacy-policy-title"
        >
          <div className="mx-auto max-h-[75vh] max-w-7xl overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2
                  id="privacy-policy-title"
                  className="text-xl font-semibold text-white"
                >
                  Privacy Policy
                </h2>
                <p className="mt-1 text-sm text-[#cfb997]">
                  General template for RawSeed Ltd. Please review this with a
                  qualified legal adviser before publishing.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPrivacyPolicyOpen(false)}
                aria-label="Close privacy policy"
                className="shrink-0 text-2xl leading-none text-gray-400 transition-colors hover:text-white"
              >
                &times;
              </button>
            </div>

            <div className="mt-5 grid gap-4 text-sm leading-relaxed md:grid-cols-2">
              <section>
                <h3 className="font-semibold text-white">
                  Information we collect
                </h3>
                <p>
                  When you contact us, we may collect your first name, last
                  name, email address, telephone number, and any message you
                  choose to send.
                </p>
              </section>
              <section>
                <h3 className="font-semibold text-white">How we use it</h3>
                <p>
                  We use this information to respond to enquiries, provide
                  customer support, and manage our relationship with you. We do
                  not use it for unrelated marketing without your consent.
                </p>
              </section>
              <section>
                <h3 className="font-semibold text-white">
                  Sharing and retention
                </h3>
                <p>
                  Form submissions are sent to our email service provider, which
                  processes the information on our behalf. We retain personal
                  information only for as long as necessary for the purposes
                  described or as required by law.
                </p>
              </section>
              <section>
                <h3 className="font-semibold text-white">
                  Your rights and contact
                </h3>
                <p>
                  Depending on your location, you may have rights to access,
                  correct, delete, or restrict use of your information. Contact
                  us at info@rawseed.co.uk to make a request or ask a privacy
                  question.
                </p>
              </section>
              <section>
                <h3 className="font-semibold text-white">
                  Security and changes
                </h3>
                <p>
                  We take reasonable steps to protect personal information, but
                  no online transmission is completely secure. We may update
                  this policy from time to time and will publish the revised
                  version here.
                </p>
              </section>
              <section>
                <h3 className="font-semibold text-white">Policy details</h3>
                <p>
                  Effective date: [insert date]. Data controller: RawSeed Ltd.,
                  167-169 Great Portland Street, 5th Floor, London, W1W 5PF. Add
                  the applicable legal basis, supervisory authority, cookie
                  details, and international transfer information before
                  publication.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
