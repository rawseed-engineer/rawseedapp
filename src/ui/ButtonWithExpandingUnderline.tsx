import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ButtonWithExpandingUnderline({
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        inline-block
        px-4 py-4
        text-gray-300
        tracking-wide
        cursor-pointer
        overflow-hidden
        transition-all duration-300
        ${className}
      `}
    >
      {/* Text */}
      <span className="relative z-10">{children}</span>

      {/* Expanding underline */}
      <span
        className={`
          absolute
          bottom-0
          h-0.5
          bg-[#a18458]
          opacity-70
          transition-all duration-300 ease-out
          left-1/2 -translate-x-1/2
          group-hover:w-full
          group-hover:left-0
          group-hover:translate-x-0
          w-0
        `}
      />
    </button>
  );
}
