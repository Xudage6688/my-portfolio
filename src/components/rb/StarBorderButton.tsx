"use client";

import React from "react";

type StarBorderButtonProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
  };

export default function StarBorderButton<T extends React.ElementType = "button">({
  as,
  className = "",
  color = "#22d3ee",
  speed = "4s",
  thickness = 1,
  backgroundColor = "#050816",
  textColor = "#ffffff",
  borderColor = "#0ea5e9",
  children,
  ...rest
}: StarBorderButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="relative z-10 rounded-[20px] text-center text-[16px] py-[16px] px-[26px]"
        style={{ background: backgroundColor, color: textColor, borderColor }}
      >
        {children}
      </div>
    </Component>
  );
}
