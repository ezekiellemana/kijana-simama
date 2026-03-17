import logoImage from "../assets/logoImage.svg";
import React from "react";

interface LogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export function Logo({ size = "medium", className = "" }: LogoProps) {
  const sizeMap: Record<string, { width: number; height: number; radius: number }> = {
    small:  { width: 44,  height: 44,  radius: 10 },
    medium: { width: 72,  height: 72,  radius: 14 },
    large:  { width: 100, height: 100, radius: 18 },
  };

  const { width, height, radius } = sizeMap[size];

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        style={{
          width,
          height,
          minWidth: width,
          minHeight: height,
          borderRadius: radius,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src={logoImage}
          alt="Kijana Simama"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}