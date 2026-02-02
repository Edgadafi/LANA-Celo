"use client";

import { cn } from "@/lib/utils";

interface LogoLANAProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
}

export function LogoLANA({
  size = "md",
  variant = "light",
  className,
}: LogoLANAProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };
  const textColor = variant === "light" ? "text-forest" : "text-snow";

  return (
    <div className={cn("flex items-center gap-2 flex-shrink-0", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden
        >
          <rect
            width="40"
            height="40"
            rx="10"
            fill="currentColor"
            className="text-prosperity"
          />
          <path
            d="M12 28V12H16V24H28V28H12Z"
            fill="white"
            fillOpacity="0.95"
          />
          <path
            d="M20 20L24 16L28 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 16V26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span
        className={cn(
          "font-montserrat font-bold tracking-tight",
          textSizes[size],
          textColor
        )}
      >
        LANA.celo
      </span>
    </div>
  );
}
