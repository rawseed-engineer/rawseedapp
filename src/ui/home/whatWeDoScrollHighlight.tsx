import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import benefit1 from "../../assets/additives_free.jpg";
import benefit2 from "../../assets/unrefined_oil.jpg";
import benefit3 from "../../assets/nutrient_rich.jpg";
import benefit4 from "../../assets/ethically_sourced.jpg";
import ScrollDownIndicator from "../ScrollDownIndicator";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDoScrollHighlight = () => {
  const wrapperRef = useRef(null);
  const pinUpRef = useRef(null);
  const contentWrapRef = useRef(null);
  const sidelineRef = useRef(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = [
    {
      key: "Additive-free",
      description:
        "Our cold-pressed oils are completely additive-free, meaning we skip the chemicals, preservatives, and artificial enhancers that are common in mass-produced oils. By using a traditional cold-pressing method at low temperatures, we extract the pure essence of sesame, black seed, and flaxseed without any need for solvents or synthetic additives. This results in a cleaner, safer product that's free from harmful residues, allowing you to enjoy the authentic taste and health benefits straight from nature. It's ideal for health-conscious cooks who want to avoid hidden ingredients that could compromise well-being or alter flavors in your favorite dishes.",
      image: benefit1,
    },
    {
      key: "Unrefined",
      description:
        "Unlike refined oils that undergo high-heat processing and bleaching, our oils remain unrefined to preserve their natural integrity. The cold-pressing technique gently crushes the seeds at room temperature, retaining the oils' original color, aroma, and texture without stripping away essential compounds. This means our sesame oil keeps its nutty richness, black seed oil its bold, earthy profile, and flaxseed oil its fresh, mild nuttiness. Unrefined oils like ours are perfect for drizzling over salads, dipping bread, or low-heat cooking, delivering a superior sensory experience and avoiding the blandness of overly processed alternatives.",
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
        "We commit to ethical sourcing by partnering with sustainable farms that prioritize fair labor practices, environmental stewardship, and seed quality. Our sesame, black seed, and flaxseed come from regions where traditional farming respects the land—avoiding pesticides and supporting biodiversity. This approach not only ensures the highest purity but also contributes to community well-being and eco-friendly agriculture. By choosing our oils, you're supporting a transparent supply chain that values people and the planet, aligning your kitchen choices with responsible consumption for a healthier world.",
      image: benefit4,
    },
    // {
    //   key: "Potential Cancer Protection",
    //   description:
    //     "Test-tube and animal studies suggest it could inhibit cancer cell growth in breast, colon, and lung cancers, but human evidence is limited.",
    //   image: benefit5,
    // },
  ];
  const totalDuration = 1000; // ms

  // Track which item is currently active (0 = Greensock, 1 = ScrollTrigger, etc.)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const pinUp = pinUpRef.current;
    const sideline = sidelineRef.current;

    // Hide all content except the initial one
    // gsap.set(".content:not(.initial)", { autoAlpha: 0 });

    // Line animation timeline
    const lineTimeline = gsap.timeline();
    lineTimeline
      .to(sideline, { duration: 1 }, 0)
      .to(sideline, { duration: 0.9, scaleY: 1, ease: "none" }, 0);

    // Create ScrollTrigger for pinning and line animation
    ScrollTrigger.create({
      trigger: pinUp,
      start: "top top",
      end: `+=${totalDuration}`,
      pin: true,
      scrub: true,
      animation: lineTimeline,
      // markers: true, // uncomment to debug
    });

    // Animate each text item and switch content
    const singleDuration = totalDuration / items.length;

    items.forEach((_, i) => {
      const smallTimeline = gsap.timeline();

      ScrollTrigger.create({
        trigger: wrapper,
        start: `top -=${singleDuration * i}`,
        end: `+=${singleDuration}`,
        animation: smallTimeline,
        toggleActions:
          i === items.length - 1
            ? "play none play reverse"
            : "play reverse play reverse",
      });

      smallTimeline
        .to(
          textRefs.current[i],
          {
            duration: 0.25,
            color: "#a18458",
            scale: 1.2,
            ease: "none",
          },
          0,
        )
        .call(
          () => {
            setActiveIndex(i);
          },
          [],
          0.125,
        );
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mx-0">
      <div ref={wrapperRef} className="h-screen overflow-hidden">
        <div
          ref={pinUpRef}
          className="h-screen flex flex-row items-center mx-70"
        >
          <div ref={contentWrapRef} className="relative w-[700px] h-[400px]">
            {items.map((item, i) => (
              <div>
                <span
                  key={i}
                  className={`content content-${i} ${
                    i === 0 ? "initial" : ""
                  } ${
                    i === items.length - 1 ? "remaining" : ""
                  } absolute inset-0 flex items-center justify-center text-xl md:text-2xl transition-opacity duration-200 mx-0 lg:mt-30`}
                  style={{
                    opacity: activeIndex === i ? 1 : 0,
                    visibility: activeIndex === i ? "visible" : "hidden",
                  }}
                >
                  {/* {item.description} {activeIndex} */}
                  <img
                    src={items[i].image}
                    alt={`Oils ${i}`}
                    className={`aspect-auto brightness-50`}
                  />
                  <div className="absolute mx-5">
                    <div className="">
                      <p className="text-2xl md:text-2xl text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>

          {/* Vertical orange line */}
          <div className="hidden lg:block">
            <div
              ref={sidelineRef}
              className="relative h-[194px] w-[3px] bg-[#a18458] origin-top transform scale-y-0"
              style={{
                top: "50%",
                left: "20px",
                zIndex: 1,
              }}
            />
          </div>

          {/* Text list on the right */}
          <div className="hidden lg:block">
            <div className="w-[300px] flex flex-col justify-center items-start bg-white pl-10">
              <div>
                {items.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      if (el) textRefs.current[i] = el;
                    }}
                    className="text text-slate-400 text-2xl md:text-3xl  transform origin-left rotate-[0.1deg] w-[500px] h-[50px]"
                  >
                    {item.key}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[200px] flex flex-col">
            <ScrollDownIndicator />
          </div>
        </div>
      </div>

      {/* Below section to give some space before the next section */}
      <div className="h-[100vh] flex items-center justify-center bg-white"></div>
    </div>
  );
};

export default WhatWeDoScrollHighlight;
