// ShineText.tsx
import React from "react";

interface ShineTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: string; // e.g. "5s", "7s"
}

export default function ShineText({
  children,
  className = "",
  duration = "5s",
}: ShineTextProps) {
  return (
    <div
      className={`
        inline-block
        bg-gradient-to-r from-gray-500 20% via-white 60% to-gray-500 20%
        bg-[length:200%_auto]
        bg-clip-text
        text-transparent
        text-6xl
        animate-[shine_3s_linear_infinite]
        ${className}
      `}
      style={{
        animationDuration: duration,
      }}
    >
      {children}
    </div>
  );
}
