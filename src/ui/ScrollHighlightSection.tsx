import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AllOils1 from "../assets/example1_health_protection.jpg";
import AllOils2 from "../assets/example2_anti_inflammatory.jpg";
import AllOils3 from "../assets/example3_digestive_health.jpg";
import AllOils4 from "../assets/example4_skin_health.jpg";
import AllOils5 from "../assets/example5_cancer_protection.jpg";

const AllOils = [AllOils1, AllOils2, AllOils3, AllOils4, AllOils5];

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollHighlightSection = () => {
  const wrapperRef = useRef(null);
  const pinUpRef = useRef(null);
  const contentWrapRef = useRef(null);
  const sidelineRef = useRef(null);
  const textRefs = useRef([]);
  const belowRef = useRef(null);

  // const items = [
  //   "Heart Health",
  //   "Anti-Inflammatory Effects",
  //   "Digestive Health",
  //   "Skin Health",
  //   "Potential Cancer Protection",
  // ];
  const items = [
    {
      key: "Heart Health",
      description:
        "It may lower cholesterol levels (total and LDL), reduce blood pressure, and improve artery elasticity, potentially decreasing the risk of heart disease.",
    },
    {
      key: "Anti-Inflammatory Effects",
      description:
        "The ALA in flaxseed oil can help reduce inflammation, which may benefit conditions like rheumatoid arthritis, though evidence is mixed for significant improvements in symptoms.",
    },
    {
      key: "Digestive Health",
      description:
        "It can relieve constipation by promoting bowel regularity and improve stool consistency; it may also help with diarrhea in certain cases.",
    },
    {
      key: "Skin Health",
      description:
        "Topical or oral use may enhance skin hydration, smoothness, and reduce sensitivity to irritation.",
    },
    {
      key: "Potential Cancer Protection",
      description:
        "Test-tube and animal studies suggest it could inhibit cancer cell growth in breast, colon, and lung cancers, but human evidence is limited.",
    },
  ];
  const totalDuration = 1000; // ms

  // Track which item is currently active (0 = Greensock, 1 = ScrollTrigger, etc.)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const pinUp = pinUpRef.current;
    const contentWrap = contentWrapRef.current;
    const sideline = sidelineRef.current;
    const below = belowRef.current;

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
      // const relevantContent = contentWrap.querySelector(`.content-${i}`);

      ScrollTrigger.create({
        trigger: wrapper,
        start: `top -=${singleDuration * i}`,
        end: `+=${singleDuration}`,
        // markers: true,
        animation: smallTimeline,
        // toggleActions: relevantContent.classList.contains("remaining")
        //   ? "play none play reverse"
        //   : "play reverse play reverse",
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
            // color: "orange",
            color: "#a18458", // Tailwind orange-400
            // scale: 1.5,
            scale: 1,
            ease: "none",
          },
          0
        )
        // .set(relevantContent, { autoAlpha: 1 }, 0.125);
        .call(
          () => {
            setActiveIndex(i);
          },
          [],
          0.125
        );
    });

    // Show "Yowza!" at the end
    const showYowza = gsap.timeline();
    showYowza.to(below.querySelector("span"), { autoAlpha: 1, y: 0 });

    ScrollTrigger.create({
      trigger: below,
      start: "top center",
      end: "bottom bottom",
      // scrub: 1,
      // markers: true,
      animation: showYowza,
      toggleActions: "none play none reverse",
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="font-signika bg-gray-300">
      {/* Spacer at top */}
      {/* <div className="h-[20vh] flex items-center justify-center bg-white">
        <span className="text-green-600 text-2xl md:text-3xl">
          {items[0]} {items[1]} {items[2]} {items[3]} {items[4]}
        </span>
      </div> */}

      {/* Main section with pin and scroll effects */}
      <div ref={wrapperRef} className="h-screen overflow-hidden">
        <div
          ref={pinUpRef}
          className="h-screen flex flex-row items-center justify-center bg-white"
        >
          {/* Content box (only show active text) */}
          <div
            ref={contentWrapRef}
            className="relative w-[600px] h-[400px] rounded-md m-[20px] mt-[-10px]"
          >
            {items.map((item, i) => (
              <div>
                <span
                  key={i}
                  className={`content content-${i} ${
                    i === 0 ? "initial" : ""
                  } ${
                    i === items.length - 1 ? "remaining" : ""
                  } absolute inset-0 flex items-center justify-center text-xl md:text-2xl transition-opacity duration-200 mx-10`}
                  style={{
                    opacity: activeIndex === i ? 1 : 0,
                    visibility: activeIndex === i ? "visible" : "hidden",
                  }}
                >
                  {/* {item.description} {activeIndex} */}
                  <img
                    src={AllOils[i]}
                    alt={`Oils ${i}`}
                    className={`aspect-auto brightness-40`}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
                    <div className=" p-10 space-y-4">
                      <h2
                        className="text-xl md:text-2xl 
          text-white"
                      >
                        {item.description} {activeIndex}
                      </h2>
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>

          {/* Vertical orange line */}
          <div
            ref={sidelineRef}
            className="absolute h-[230px] w-[3px] bg-[#a18458] origin-top transform scale-y-0"
            style={{
              top: "calc(50vh - 111px - 7px)",
              left: "calc(52vw + 0px)",
              zIndex: 1,
            }}
          />

          {/* Text list on the right */}
          <div className="h-screen w-[500px] flex flex-col justify-center items-start bg-white">
            {items.map((item, i) => (
              <div
                key={i}
                ref={(el) => (textRefs.current[i] = el)}
                className="text text-slate-400 text-2xl md:text-3xl  transform origin-left rotate-[0.1deg] w-[500px] h-[50px]"
              >
                {item.key}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Below section (Yowza!) */}
      <div
        ref={belowRef}
        className="h-screen flex items-center justify-center bg-white"
      >
        <span className="text-green-600 text-2xl md:text-3xl opacity-0 translate-y-[-50vh]">
          Yowza!
        </span>
      </div>

      {/* Optional footer */}
      {/* <div className="h-[5vh] flex items-center justify-center bg-gray-200">
        <span>Nothing to see here!</span>
      </div> */}
    </div>
  );
};

export default ScrollHighlightSection;
