import GoldenDropOnlyLogo from "../assets/golden_drop_logo_only.svg";
import VeganIcon from "../assets/vegan-icon.png";

interface BookingCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  buttonText?: string;
}

export default function BookingCard({
  imageUrl,
  title,
  description,
  buttonText = "Order Now",
}: BookingCardProps) {
  return (
    <div
      className={`
        group relative w-[350px] h-[650px] flex-shrink-0 overflow-hidden rounded-2xl
        bg-cover bg-center text-center shadow-xl transition-all duration-500
        hover:shadow-2xl
      `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Dark overlay on hover */}
      <div
        className="
        absolute inset-0 bg-gradient-to-t  from-[#a67c00] to-transparent 
        opacity-0 transition-opacity duration-500 group-hover:opacity-100
      "
      />

      {/* Book button – slides in from top on hover */}
      <div
        className="
        absolute inset-0 z-10 flex items-center justify-center
      "
      >
        <div
          className="
          translate-y-[-150%] opacity-0 transition-all duration-500 
          group-hover:translate-y-60 group-hover:opacity-100
        "
        >
          <button
            className="
              rounded-full border-4 border-white/90 px-8 py-4 
              text-xl font-bold uppercase tracking-wider text-white 
              transition-all duration-300 
              hover:bg-white hover:text-blue-900 hover:border-transparent
            "
          >
            {buttonText}
          </button>
          <img
            src={VeganIcon}
            alt="Suitable for Vegan"
            className="mt-5 h-13 aspect-auto brightness-70"
          />
        </div>
      </div>

      {/* Information panel – slides up on hover */}
      <div
        className="
        relative z-20 flex h-full flex-col 
        
        p-6 pt-60 transition-transform duration-500 
        group-hover:translate-y-[-206px]
      "
      >
        <div className="mb-4 mt-24 flex items-center justify-center">
          <img
            src={GoldenDropOnlyLogo}
            alt="Golden Drop Logo"
            className="h-13 aspect-auto brightness-70 shrink-0"
          />
          <h2 className="my-0 text-[#a18458] text-balance text-4xl text-shadow-lg font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>

        {/* Extra details – fade in */}
        <div
          className="
          mt-2 opacity-0 transition-opacity duration-700 
          group-hover:opacity-100 md:group-hover:opacity-100
        "
        >
          <div className="">
            <p className="text-pretty text-white text-justify text-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
