import React from "react";
import NavMenu from "../ui/nav/nav-menu";
import Hero from "../ui/flaxseed-oil/hero";
import Story from "../ui/flaxseed-oil/story";
import ScrollHighlightSection from "../ui/ScrollHighlightSection";
import Footer from "../ui/nav/footer";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";

import UseCases from "../ui/flaxseed-oil/useCases";
import Smoothie from "../ui/flaxseed-oil/smoothie";
import Salad from "../ui/blackseed-oil/salad";
import SkinCare from "../ui/flaxseed-oil/skinCare";
import FaceSerum from "../ui/flaxseed-oil/faceSerum";
import ImageHairAndScalp from "../ui/flaxseed-oil/HairAndScalp";
import ProductInformationAccordion from "../ui/Accordion";

const FlaxseedOil: React.FC = () => {
  const nutritionFacts = [
    {
      key: "Energy",
      value: "813 kcal",
    },
    {
      key: "Total Fat",
      value: "92 g",
    },
    {
      key: "Saturated Fat",
      value: "8.64 g",
    },
    {
      key: "Polyunsaturated Fat",
      value: "60.72 g",
    },
    {
      key: "Monosaturated Fat",
      value: "18.58 g",
    },
    {
      key: "Cholesterol",
      value: "0 g",
    },
    {
      key: "Sodium",
      value: "0 g",
    },
    {
      key: "Carbohydrates",
      value: "0 g",
    },
    {
      key: "Sugar",
      value: "0 g",
    },
    {
      key: "Protein",
      value: "0 g",
    },
  ];

  const productInformation = [
    {
      title: "Ingredients",
      content: (
        <div>
          <div>
            <b>100% Cold-Pressed Flaxseed (Linseed) Oil</b> Oil
          </div>
          <div>
            Allergy Information: Produced in a facility that also handles sesame
            seeds<b>bold</b>
          </div>
        </div>
      ),
    },
    {
      title: "Nutrition Facts",
      content: (
        <div className="p-4">
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
              As a daily dietary supplement for omega-3 intake — Take 1
              tablespoon (about 15 ml) per day, either directly or mixed into
              foods. It's an excellent way to boost intake of alpha-linolenic
              acid (ALA), a plant-based omega-3 fatty acid that supports overall
              wellness.
            </li>
            <li className="leading-relaxed">
              In cold preparations like salad dressings and dips — Drizzle
              flaxseed oil over salads, use it in homemade vinaigrettes, sauces,
              or dips. It adds a mild, nutty flavor and works perfectly as a
              healthier alternative to other oils in no-cook recipes.
            </li>
            <li className="leading-relaxed">
              Added to smoothies, shakes, or yogurt — Blend 1 tablespoon into
              smoothies, protein shakes, yogurt, or oatmeal for an easy
              nutrition boost without altering taste much. This is one of the
              simplest ways to incorporate it consistently into your routine.
            </li>
            <li className="leading-relaxed">
              Best used cold — avoid heating — Do not use flaxseed oil for
              frying, baking, or high-heat cooking, as it has a low smoke point
              and can degrade or form unwanted compounds when heated. Store it
              in a cool, dark place (preferably refrigerated) in an opaque
              bottle to preserve freshness and nutrients.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Storage Instructions",
      content:
        "Store in a cool, dry place away from heat source and direct sunlight",
    },
    {
      title: "Suitable For",
      content: "Vegans, Vegetarians, Halal, Kosher",
    },
  ];

  return (
    <>
      <div className="min-h-screen antialiased">
        <NavMenu />

        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

        <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Story />
        </section>

        {/* <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 
          xl:mx-48 2xl:128"
        > */}
        <section className="py-12">
          <ScrollHighlightSection />
        </section>

        <section className="flex-grow overflow-x-auto w-full ">
          <UseCases />
        </section>

        {/* White Background Section - Features */}
        <section
          className="rounded py-12 sm:py-24 mt-12 
          mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Smoothie />
        </section>

        <section
          className="rounded py-12 sm:py-12 mt-12 
          mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Salad />
        </section>

        <section className="flex-grow overflow-x-auto w-full ">
          <SkinCare />
        </section>

        <section
          className="rounded py-12 sm:py-24 mt-12 
          mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <FaceSerum />
        </section>

        <section
          className="rounded py-12 sm:py-12 mt-12
          mx-4 sm:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <ImageHairAndScalp />
        </section>

        <section
          className="rounded py-8 mt-12 sm:py-12
        mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:mx-64"
        >
          <ProductInformationAccordion productItems={productInformation} />
        </section>

        <section
          className="rounded py-12 sm:py-12 mt-36 
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

        {/* <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Story />
        </section> */}

        <footer className="bg-[#181818] border-t border-gray-800 py-16">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default FlaxseedOil;
