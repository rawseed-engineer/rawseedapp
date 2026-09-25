import "../i18n";
import NavMenu from "../ui/nav/nav-menu";
import Story from "../ui/home/story";
// import WhatWeDo from "../ui/home/what-we-do";
import Products from "../ui/home/products";
import WhyRawSeed from "../ui/home/why-raw-seed";
import Values from "../ui/home/values";
import Vision from "../ui/home/vision";
import JoinOurJourney from "../ui/home/joinOurJourney";
import EmailForm from "../ui/email-form";
import Footer from "../ui/nav/footer";
import Hero from "../ui/home/hero";
import ColdPressed from "../ui/home/coldPressed";
import WhatWeDoScrollHighlight from "../ui/home/whatWeDoScrollHighlight";
// import TestimonialSlider from "../ui/TestimonialSlider";
import benefit1 from "../assets/additives_free.jpg";
import benefit2 from "../assets/unrefined_oil.jpg";
import benefit3 from "../assets/nutrient_rich.jpg";
import benefit4 from "../assets/ethically_sourced.jpg";
// import { Callout } from "../ui/callout";
// import ScrollFadeText from "../ui/ScrollFadeText";

const Home = () => {
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

        {/* <section
          className="rounded py-8 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128 
          my-24"
        > */}
        <section
          className="rounded py-12 sm:py-24
          "
        >
          <Products />
        </section>

        <section
          className="rounded py-8 my-24 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Story />
        </section>

        {/* <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <WhatWeDo />
        </section> */}

        <section id="id1" className="py-0">
          <WhatWeDoScrollHighlight
            heading="What we do?"
            items={[
              {
                key: "Free of additives",
                description: [
                  "Our cold-pressed oils contain no added preservatives, artificial flavours or unnecessary additives. Carefully sourced from trusted producers, our sesame, black seed and flaxseed oils are selected for their purity, natural character and authentic taste.",
                  "With nothing unnecessary added, Golden Drop brings you oils that are simple, natural and made to complement everyday cooking.",
                ],
                image: benefit1,
              },
              {
                key: "Unrefined",
                description: [
                  "Our oils are unrefined, allowing them to retain their natural character, colour and distinctive flavour. Carefully sourced from trusted producers, our sesame, black seed and flaxseed oils offer authentic taste and natural goodness without unnecessary processing.",
                  "From the rich nuttiness of sesame to the distinctive character of black seed and the mild flavour of flaxseed, Golden Drop brings naturally distinctive oils to everyday cooking.",
                ],
                image: benefit2,
              },
              {
                key: "Packed with nutrients",
                description: [
                  "Our carefully selected oils naturally contain a range of valuable nutrients and beneficial compounds. Flaxseed oil is naturally rich in omega-3 fatty acids, while sesame oil contains naturally occurring antioxidants and other plant compounds. Black seed oil is also valued for its naturally occurring compounds, including thymoquinone.",
                  "Sourced from trusted producers, our oils retain their natural character and distinctive qualities. Golden Drop Sesame and Flaxseed Oils are versatile cooking oils, ideal for everyday meals, dressings and recipes, while Black Seed Oil offers a distinctive addition to a balanced lifestyle.",
                ],
                image: benefit3,
              },
              {
                key: "Ethically sourced",
                description: [
                  "We believe quality begins with responsible sourcing. We work with trusted suppliers who share our commitment to high standards, carefully selected seeds and consistent quality across our oils.",
                  "From sesame and flaxseed oils for everyday cooking to our distinctive black seed oil, we take care to source products with integrity and respect for the people and practices behind them. Our approach is simple: build trusted relationships and bring responsibly sourced, quality oils to our customers.",
                ],
                image: benefit4,
              },
            ]}
          />
        </section>

        <section className="flex-grow overflow-x-auto w-full">
          <ColdPressed />
        </section>

        {/* Why Raw Seed ? */}
        <section className="rounded bg-[#181818] py-12 sm:py-24">
          <WhyRawSeed />
        </section>

        <section
          className="rounded bg-white py-8 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Values />
        </section>

        {/* Our Vision */}
        <section className="flex-grow overflow-x-auto w-full ">
          <Vision />
        </section>

        {/* <section className="rounded py-8 mt-12 sm:py-12 mx-1 lg:mx-84">
          <div>
            <TestimonialSlider />
          </div>
        </section> */}

        {/* Contact Us */}
        <section className="rounded py-12 mt-12 sm:py-12 mx-1 lg:mx-72">
          <div
            className="mx-auto grid grid-cols-1 gap-16 px-8 sm:px-16 
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

export default Home;
