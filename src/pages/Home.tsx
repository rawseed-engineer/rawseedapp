import "../i18n";
import NavMenu from "../ui/nav/nav-menu";
import Story from "../ui/home/story";
import WhatWeDo from "../ui/home/what-we-do";
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

        <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <Story />
        </section>

        <section
          className="rounded py-8 mt-12 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128"
        >
          <WhatWeDo />
        </section>

        <section id="id1" className="py-12">
          <WhatWeDoScrollHighlight
            items={[
              {
                key: "Free of Additives",
                description:
                  "Our cold-pressed oils are completely additive-free. We avoid the chemicals, preservatives and artificial enhancers that are common in mass-produced oils. By using a traditional cold-pressing method at low temperatures, we extract the pure essence of sesame, black seed and flaxseed, without any need for solvents or synthetic additives. This results in a cleaner, safer product free from harmful residues, allowing you to enjoy the true taste and health benefits straight from nature. It's ideal for health-conscious cooks who want to avoid hidden ingredients that could compromise well-being or alter flavours in your favorite dishes.",
                image: benefit1,
              },
              {
                key: "Unrefined",
                description:
                  "Unlike refined oils that undergo high-heat processing and bleaching, our oils remain unrefined to preserve their natural integrity. The cold-pressing technique gently crushes the seeds at room temperature, retaining the oils' original colour, aroma and texture without removing essential compounds. This means our sesame oil keeps its nutty richness, black seed oil its bold, earthy profile, and flaxseed oil its fresh, mild nuttiness. Unrefined oils like ours are perfect for drizzling over salads, dipping bread or low-heat cooking, delivering a superior taste and avoiding the blandness of overly processed alternatives.",
                image: benefit2,
              },
              {
                key: "Packed with nutrients",
                description:
                  "Cold-pressing ensures our oils are bursting with vital nutrients that heat extraction often destroys. We lock in high levels of antioxidants, omega-3 fatty acids (especially abundant in flaxseed oil), vitamins like E and K, and beneficial compounds such as thymoquinone in black seed oil or lignans in sesame oil. These nutrients support heart health, reduce inflammation, boost immunity, and promote glowing skin—making our oils not just a cooking staple but a wellness booster. Whether you're stirring flaxseed oil into smoothies or using sesame oil in stir-fries, you're getting a nutrient-dense option that enhances your diet without the degradation caused by industrial methods.",
                image: benefit3,
              },
              {
                key: "Ethically sourced",
                description:
                  "We always seek to work with sustainable farms that prioritise fair labour practices and good seed quality. Our sesame, black seed, and flaxseed come from regions where traditional farming respects the land, avoiding pesticides and supporting biodiversity. This approach ensures natural purity. By choosing our oils, you're supporting a supply chain that values the natural environment, and your kitchen choices support your family’s health.",
                image: benefit4,
              },
            ]}
          />
        </section>

        <section
          className="flex-grow overflow-x-auto w-full 
          "
        >
          <ColdPressed />
        </section>

        <section
          className="rounded py-8 sm:py-12 
          mx-4 sm:mx-4 md:mx-4 lg:mx-24 xl:mx-48 2xl:128 
          my-24"
        >
          <Products />
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
        <section className="rounded py-8 mt-12 sm:py-12 mx-1 lg:mx-84">
          <div
            className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-10 sm:px-16 
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
