import "../i18n";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";
import Story from "../ui/home/story";
import WhatWeDo from "../ui/home/what-we-do";
import SeedsHorizontal from "./../assets/seeds_horizontal.jpg";
import Products from "../ui/home/products";
import WhyRawSeed from "../ui/home/why-raw-seed";
import Values from "../ui/home/values";
import Vision from "../ui/home/vision";
import ContactUs from "../ui/home/contact-us";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-screen antialiased">
        <NavMenu />

        {/* Hero Section with Full Page Image */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          {/* Hero Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/rawseedapp/hero_image_home.jpg")`,
              opacity: 0.9,
              filter: "brightness(50%)",
            }}
          />

          <div className="absolute top-[35%] ">
            <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {/* Hero Heading */}
              <h1 className="text-balance text-5xl font-bold text-white  md:text-7xl mb-5">
                {t("hero.home.title")}
              </h1>

              <h2 className="text-balance text-xl font-bold text-white md:text-6xl mb-5">
                {t("hero.home.subtitle")}
              </h2>

              {/* Hero Description */}
              <p className="text-pretty text-white text-2xl mb-6">
                {t("hero.home.description")}
              </p>

              {/* Call Out Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group bg-gradient-to-tr from-amber-300 to-yellow-700 text-white px-10 py-5 rounded-full hover:from-amber-700 hover:to-yellow-300 transition-all duration-200 transform hover:scale-105 flex items-center text-xl font-semibold shadow-2xl">
                  {t("hero.home.learn")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* White Background Section - Features */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-64">
          <Story />
        </section>

        <section className="rounded py-8 mt-12 sm:py-12 mx-64">
          <WhatWeDo />
        </section>

        <section className="flex-grow overflow-x-auto w-full ">
          <img
            src={SeedsHorizontal}
            alt="All RawSeed Oils"
            className="w-full brightness-70 aspect-auto"
          />
        </section>

        <section className="rounded py-8 sm:py-12 mx-64">
          <Products />
        </section>

        {/* Why Raw Seed ? */}
        <section className="rounded bg-[#181818] py-12 sm:py-24">
          <WhyRawSeed />
        </section>

        <section className="rounded bg-white py-8 sm:py-12 md:mx-64">
          <Values />
        </section>

        {/* Our Vision */}
        <section className="flex-grow overflow-x-auto w-full ">
          <Vision />
        </section>

        <section className="rounded py-8 mt-12 sm:py-12 mx-64">
          <ContactUs />
        </section>

        {/* Footer */}
        <footer className="bg-[#181818] border-t border-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    {/* <Zap className="w-5 h-5 text-white" /> */}
                    ZAP
                  </div>
                  <span className="text-xl font-bold text-white">NextApp</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Building the future of web applications with innovative
                  technology and exceptional user experiences.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  >
                    {/* <Facebook className="w-5 h-5 text-gray-400 hover:text-white" /> */}
                    FAcebook
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  >
                    {/* <Twitter className="w-5 h-5 text-gray-400 hover:text-white" /> */}
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  >
                    {/* <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" /> */}
                    Linkedin
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  >
                    {/* <Instagram className="w-5 h-5 text-gray-400 hover:text-white" /> */}
                    Instagam
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Status Page
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div id="contact">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    {/* <Mail className="w-5 h-5 text-purple-400" /> */}
                    Mail
                    <span className="text-gray-400">hello@nextapp.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <Phone className="w-5 h-5 text-purple-400" /> */}
                    Phone
                    <span className="text-gray-400">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <MapPin className="w-5 h-5 text-purple-400" /> */}
                    Map
                    <span className="text-gray-400">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 RawSeed Inc. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
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
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
