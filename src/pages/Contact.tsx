import React from "react";
import NavMenu from "../ui/nav/nav-menu";
import Footer from "../ui/nav/footer";
import { useTranslation } from "react-i18next";
import { Callout } from "../ui/callout";
import EmailForm from "../ui/email-form";
import JoinOurJourney from "../ui/home/joinOurJourney";

const Contact: React.FC = () => {
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
              backgroundImage: `url("flaxseed_flower_farm.jpg")`,
              opacity: 0.9,
              filter: "brightness(50%)",
            }}
          />

          <div className="absolute top-[35%] ">
            <div className="relative z-10  px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {/* Hero Heading */}
              <h1 className="text-balance text-5xl font-bold text-white  md:text-7xl mb-5">
                {t("contact.hero.title")}
              </h1>

              <h2 className="text-balance text-xl font-bold text-white md:text-6xl mb-5">
                {t("contact.hero.subtitle")}
              </h2>

              {/* Hero Description */}
              <p className="text-pretty text-white text-2xl mb-6">
                {t("contact.hero.description")}
              </p>

              <div className="flex justify-center mt-30">
                <Callout />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="rounded py-8 mt-12 sm:py-12 mx-1 lg:mx-84">
          <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
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

export default Contact;
