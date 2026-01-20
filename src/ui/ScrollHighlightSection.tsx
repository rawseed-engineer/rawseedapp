import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import benefit1 from "../assets/example1_health_protection.jpg";
import benefit2 from "../assets/example2_anti_inflammatory.jpg";
import benefit3 from "../assets/example3_digestive_health.jpg";
import benefit4 from "../assets/example4_skin_health.jpg";
import benefit5 from "../assets/example5_cancer_protection.jpg";

gsap.registerPlugin(ScrollTrigger);

const ScrollHighlightSection = () => {
  const wrapperRef = useRef(null);
  const pinUpRef = useRef(null);
  const contentWrapRef = useRef(null);
  const sidelineRef = useRef(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = [
    {
      key: "Heart Health",
      description:
        "It may lower cholesterol levels (total and LDL), reduce blood pressure, and improve artery elasticity, potentially decreasing the risk of heart disease.",
      image: benefit1,
    },
    {
      key: "Anti-Inflammatory Effects",
      description:
        "The ALA in flaxseed oil can help reduce inflammation, which may benefit conditions like rheumatoid arthritis, though evidence is mixed for significant improvements in symptoms.",
      image: benefit2,
    },
    {
      key: "Digestive Health",
      description:
        "It can relieve constipation by promoting bowel regularity and improve stool consistency; it may also help with diarrhea in certain cases.",
      image: benefit3,
    },
    {
      key: "Skin Health",
      description:
        "Topical or oral use may enhance skin hydration, smoothness, and reduce sensitivity to irritation.",
      image: benefit4,
    },
    {
      key: "Potential Cancer Protection",
      description:
        "Test-tube and animal studies suggest it could inhibit cancer cell growth in breast, colon, and lung cancers, but human evidence is limited.",
      image: benefit5,
    },
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
                    className={`aspect-auto brightness-40`}
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
              className="relative h-[230px] w-[3px] bg-[#a18458] origin-top transform scale-y-0"
              style={{
                top: "50%",
                left: "20px",
                zIndex: 1,
              }}
            />
          </div>

          {/* Text list on the right */}
          <div className="hidden lg:block">
            <div className="h-screen w-[300px] flex flex-col justify-center items-start bg-white pl-10">
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
      </div>

      {/* Below section to give some space before the next section */}
      <div className="h-[100vh] flex items-center justify-center bg-white"></div>
    </div>
  );
};

export default ScrollHighlightSection;
