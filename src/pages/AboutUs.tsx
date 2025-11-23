import React from "react";
import { useTranslation } from "react-i18next";
import NavMenu from "../ui/nav/nav-menu";
import Team from "../ui/about-us/team";
import Footer from "../ui/nav/footer";
import Vision from "../ui/about-us/vision";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";

const AboutUs: React.FC = () => {
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
              // backgroundImage: `url("/rawseedapp/hero_image_home.jpg")`,
              backgroundImage: `url("about_us_hero.jpg")`,
              opacity: 0.9,
              filter: "brightness(50%)",
            }}
          />

          <div className="absolute top-[35%] ">
            <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {/* Hero Heading */}
              <h1 className="text-balance text-5xl font-bold text-white  md:text-7xl mb-5">
                {t("about_us.title")}
              </h1>

              <h2 className="text-balance text-xl font-bold text-white md:text-6xl mb-5">
                {t("about_us.subtitle")}
              </h2>

              {/* Hero Description */}
              <p className="text-pretty text-white text-2xl mb-6">
                {t("hero.home.description")}
              </p>
            </div>
          </div>
        </section>

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
