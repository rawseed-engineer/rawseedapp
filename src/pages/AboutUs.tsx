import React from "react";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";
import Team from "../ui/about-us/team";
import Footer from "../ui/nav/footer";
import Vision from "../ui/about-us/vision";
import Hero from "../ui/about-us/hero";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen antialiased">
        <NavMenu />

        <Hero />

        {/* Our Vision */}
        <section className="rounded bg-[#181818] py-12 sm:py-24">
          <Vision />
        </section>

        <section
          className="rounded bg-white py-8 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128
          mt-10"
        >
          <h2 className="text-balance text-center text-[#a18458] text-5xl text-shadow-lg font-bold tracking-tight md:text-5xl">
            {t("about_us.team")}
          </h2>
          <Team />
        </section>

        {/* Contact Us */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-1 lg:mx-84">
          <div
            className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-1 sm:px-16 
            grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
          >
            <JoinOurJourney />
            <EmailForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#181818] border-t border-gray-800 py-16">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
