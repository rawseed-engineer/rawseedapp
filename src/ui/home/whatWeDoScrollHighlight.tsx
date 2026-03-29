import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollDownIndicator from "../ScrollDownIndicator";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDoScrollHighlight = ({ items }: { items: any[] }) => {
  const wrapperRef = useRef(null);
  const pinUpRef = useRef(null);
  const contentWrapRef = useRef(null);
  const sidelineRef = useRef(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  // const totalDuration = 1000; // ms

  // Track which item is currently active (0 = Greensock, 1 = ScrollTrigger, etc.)
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // const wrapper = wrapperRef.current;
    // const pinUp = pinUpRef.current;
    const sideline = sidelineRef.current;

    // Hide all content except the initial one
    // gsap.set(".content:not(.initial)", { autoAlpha: 0 });

    // Line animation timeline
    const lineTimeline = gsap.timeline();
    lineTimeline
      .to(sideline, { duration: 1 }, 0)
      .to(sideline, { duration: 0.9, scaleY: 1, ease: "none" }, 0);

    // Create ScrollTrigger for pinning and line animation
    // ScrollTrigger.create({
    //   trigger: pinUp,
    //   start: "top top",
    //   end: `+=${totalDuration}`,
    //   pin: true,
    //   scrub: true,
    //   animation: lineTimeline,
    //   // markers: true, // uncomment to debug
    // });
    // 1. Create a Master Timeline that "scrubs"
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=2000", // Adjust this value to control how long it takes to scroll through all items
        pin: true,
        scrub: 0.5, // The number adds a slight 'smooth' delay to the scrub
        invalidateOnRefresh: true,
      },
    });

    // Animate each text item and switch content
    // const singleDuration = totalDuration / items.length;

    // items.forEach((_, i) => {
    //   const smallTimeline = gsap.timeline();

    //   ScrollTrigger.create({
    //     trigger: wrapper,
    //     start: `top -=${singleDuration * i}`,
    //     end: `+=${singleDuration}`,
    //     animation: smallTimeline,
    //     toggleActions:
    //       i === items.length - 1
    //         ? "play none play reverse"
    //         : "play reverse play reverse",
    //   });

    //   smallTimeline
    //     .to(
    //       textRefs.current[i],
    //       {
    //         duration: 0.25,
    //         color: "#a18458",
    //         scale: 1.2,
    //         ease: "none",
    //       },
    //       0,
    //     )
    //     .call(
    //       () => {
    //         setActiveIndex(i);
    //       },
    //       [],
    //       0.125,
    //     );
    // });

    // Cleanup on unmount

    // 2. Define the animation for each item within the master timeline
    items.forEach((_, i) => {
      // Add text highlight animation
      tl.to(textRefs.current[i], {
        color: "#a18458",
        scale: 1.2,
        duration: 1, // These are relative durations within the timeline
      })
        // 3. Update React state exactly when the scroll hits this position
        .call(() => setActiveIndex(i), [], "<");

      // Optional: Add a pause or transition logic if needed
      // tl.to({}, { duration: 0.5 });
    });

    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
    // 4. Line animation

    tl.to(sidelineRef.current, { scaleY: 1, ease: "none" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mx-0">
      <div ref={wrapperRef} className="h-screen overflow-hidden">
        <div
          ref={pinUpRef}
          className="h-screen flex flex-row items-center mx-0 lg:mx-70"
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
                    className={`scale-200 lg:scale-350 max-w-full aspect-auto brightness-50`}
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
          <div className="hidden lg:block w-[200px] flex flex-col">
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
