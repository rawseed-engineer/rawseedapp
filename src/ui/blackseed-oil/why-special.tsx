import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface WhySpecialProps {
  staggerDelay?: number;
  initialDelay?: number;
  titleDuration?: number;
}
export default function WhySpecial({
  staggerDelay = 0.6,
  initialDelay = 1,
  titleDuration = 1,
}: WhySpecialProps) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      const animations = [[titleRef.current, titleDuration]] as const;

      animations.forEach(([element, duration], index) => {
        if (element) {
          timeline.fromTo(
            element,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration },
            index === 0 ? initialDelay : `+=${staggerDelay}`,
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [initialDelay, staggerDelay, titleDuration]);

  return (
    <section ref={containerRef} aria-labelledby="why-special-title">
      <div className="relative">
        <picture>
          <source
            media="(max-width: 414px)"
            type="image/webp"
            sizes="100vw"
            srcSet="
              /blackseed_seed_closeup_4K_vertical-480.webp 480w,
              /blackseed_seed_closeup_4K_vertical-800.webp 800w,
              /blackseed_seed_closeup_4K_vertical-1200.webp 1200w,
              /blackseed_seed_closeup_4K_vertical-1572.webp 1572w
            "
          />
          <source
            type="image/webp"
            sizes="100vw"
            srcSet="
              /blackseed_seed_closeup_4K-480.webp 480w,
              /blackseed_seed_closeup_4K-800.webp 800w,
              /blackseed_seed_closeup_4K-1600.webp 1600w,
              /blackseed_seed_closeup_4K-1980.webp 1980w
            "
          />
          <img
            src="/blackseed_seed_closeup_4K.jpg"
            alt="Blackseed close up"
            loading="lazy"
            decoding="async"
            className="w-full brightness-40 aspect-auto"
          />
        </picture>
        <div
          ref={titleRef}
          className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl text-neutral-200">
            {t("blackseed_oil.why_special")}
          </h2>
        </div>
      </div>
    </section>
  );
}
