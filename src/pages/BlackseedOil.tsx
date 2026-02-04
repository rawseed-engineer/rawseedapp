import React from "react";
import NavMenu from "../ui/nav/nav-menu";
import { useTranslation } from "react-i18next";
import BlackseedHero from "../ui/blackseed-oil/hero";
import Story from "../ui/blackseed-oil/story";
import BlackseedCloseUp from "./../assets/blackseed_seed_closeup_4K.jpg";
import ImmunityBooster from "../ui/blackseed-oil/immunity-booster";
import HairSkinBeauty from "../ui/blackseed-oil/hair-skin-beauty";
import PeacefulBodyBalance from "../ui/blackseed-oil/peaceful-body-balance";
import NaturalWellness from "../ui/blackseed-oil/natural-wellness";
import Footer from "../ui/nav/footer";
import Process from "../ui/blackseed-oil/process";
import EmailForm from "../ui/email-form";
import JoinOurJourney from "../ui/blackseed-oil/joinOurJourney";
import ProductInformationAccordion from "../ui/Accordion";

const BlackSeedOilPage: React.FC = () => {
  const { t } = useTranslation();
  const nutritionUnit = "per 100ml";

  const nutritionFacts = [
    {
      key: "Energy",
      value: "45 kcal",
    },
    {
      key: "Fat",
      value: "5 g",
    },
    {
      key: "of which saturates",
      value: "1 g",
    },
    {
      key: "Omega 3",
      value: "2.5 g",
    },
    {
      key: "Omega 6",
      value: "580 mg",
    },
    {
      key: "Omega 9",
      value: "220 mg",
    },
    {
      key: "Sodium",
      value: "0 g",
    },
    {
      key: "Thymoquinone (TQ)",
      value: "48 mg",
    },
    {
      key: "Carbohydrates",
      value: "0 g",
    },
    {
      key: "of which sugar",
      value: "0 g",
    },
    {
      key: "Protein",
      value: "0 g",
    },
    {
      key: "Sodium",
      value: "0 g",
    },
  ];

  const productInformation = [
    {
      title: "Ingredients",
      content: (
        <div>
          <div>
            100% Pure, Cold-Pressed, Unrefined Black Seed Oil (Nigella Sativa)
          </div>
        </div>
      ),
    },
    {
      title: "Nutrition Facts",
      content: (
        <div className="p-4">
          <div>Nutrition: {nutritionUnit}</div>
          {nutritionFacts.map((fact) => (
            <div key={fact.key} className="flex justify-between border-b py-2">
              <span>{fact.key}</span>
              <span>{fact.value}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Usage",
      content: (
        <div>
          {/* <p className="font-semibold text-[#a18458] mb-3">In your cooking</p> */}
          <ul className="space-y-3 list-disc list-inside text-[#a18458]">
            <li className="leading-relaxed">
              For Oral Use. Take directly or add to water, tea or any hot/cold
              drink. It can also be drizzled over salads or included in your
              meals for a natural nutritional boost.
            </li>
            <li className="leading-relaxed">
              For Skin and Hair. Apply 2-3 drops on face, body, hair or nails
              and massage gently. Perfect for nourishing and moisturizing skin,
              strengthening hair and enhancing nail health.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Storage Instructions",
      content: "Store in a cool, dry place. Once opened, keep refrigerated.",
    },
    {
      title: "Suitable For",
      content: "Vegans, Vegetarians, Halal, Kosher",
    },
  ];

  return (
    <div className="min-h-screen antialiased">
      <NavMenu />

      {/* Hero Section with Full Page Image */}
      <section
        id="blackseed-oil"
        className="relative min-h-screen flex items-center justify-center"
      >
        <BlackseedHero />
      </section>

      {/* White Background Section - Features */}
      <section
        className="rounded py-8 mt-12 sm:py-12 
        mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
      >
        <Story />
      </section>

      <section className="flex-grow overflow-x-auto w-full ">
        <div className="relative">
          <img
            src={BlackseedCloseUp}
            alt="Blackseed Close Up"
            className="w-full brightness-40 aspect-auto"
          />
          <div className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
            <h2 className="text-4xl sm:text-5xl text-neutral-200">
              {t("blackseed_oil.why_special")}
            </h2>
          </div>
        </div>
      </section>

      {/* White Background Section - Features */}
      <section
        className="rounded py-12 sm:py-24 mt-12 
        mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
      >
        <ImmunityBooster />
      </section>

      <section
        className="rounded py-12 sm:py-12 mt-12 
        mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
      >
        <HairSkinBeauty />
      </section>

      <section
        className="rounded py-12 sm:py-12 mt-12 
        mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
      >
        <PeacefulBodyBalance />
      </section>

      <section
        className="rounded py-12 sm:py-12 mt-12
        mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
      >
        <NaturalWellness />
      </section>

      {/* <section className="rounded py-8 mt-12 sm:py-12 mx-64">
        <div className="relative flex justify-center items-center gap-20">
          <div
            className="relative w-lg h-120 p-8 flex justify-center items-center bg-[#fac42f] 
            animate-[BorderAnimation_4s_linear_infinite] rounded-lg
            shadow-[inset_20px_20px_40px_20px_rgba(255,255,255,0.8),inset_-5px_-5px_70px_10px_rgba(0,0,0,0.7)]"
          >
            Choose
          </div>
        </div>

        <div className="flex justify-center">
          <svg className="animate-spin"></svg>
        </div>

        <div className="flex justify-center">
          <span className="relative flex h-16 w-16">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700 opacity-75"></span>
            <span className="relative inline-flex h-16 w-16 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-700"></span>
          </span>
        </div>

        <div className="flex justify-center">
          <div className="h-16 w-16 animate-[BorderAnimation_4s_linear_infinite] rounded-full bg-blue-500"></div>
        </div>
      </section> */}

      <section className="rounded bg-[#181818] py-12 sm:py-24">
        <Process />
      </section>

      {/* Contact Us */}
      {/* <section className="rounded bg-[#181818] py-8 mt-12 sm:py-12 mx-64"> */}

      <section
        className="rounded py-8 mt-12 sm:py-12
        mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:mx-64"
      >
        <ProductInformationAccordion productItems={productInformation} />
      </section>

      <section
        className="rounded py-12 sm:py-12 mt-12 
        mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
      >
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-2 
          items-center justify-items-center gap-8 px-1 sm:px-16"
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
  );
};

export default BlackSeedOilPage;
