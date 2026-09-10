"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface DecryptedTextProps extends HTMLMotionProps<"span"> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover" | "inViewHover" | "click";
  clickMode?: "once" | "toggle";
}

type Direction = "forward" | "reverse";

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  clickMode = "once",
  ...props
}: DecryptedTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const animationStartedRef = useRef(false);

  const shuffledText = useMemo(() => {
    return text
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");
  }, [text, characters]);

  const clearAnimation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsAnimating(false);
  }, []);

  const startAnimation = useCallback(
    (direction: Direction = "forward") => {
      clearAnimation();
      animationStartedRef.current = true;
      setIsAnimating(true);

      let iteration = 0;
      const currentText = direction === "forward" ? shuffledText : text;

      intervalRef.current = setInterval(() => {
        if (iteration >= maxIterations) {
          clearAnimation();
          setDisplayedText(text);
          return;
        }

        if (direction === "forward") {
          const progress = (iteration + 1) / maxIterations;
          const revealLength = Math.floor(text.length * progress);
          const newText =
            text.slice(0, revealLength) +
            shuffledText.slice(revealLength);
          setDisplayedText(newText);
        }

        iteration++;
      }, speed);
    },
    [text, shuffledText, speed, maxIterations, clearAnimation]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let observer: IntersectionObserver | null = null;

    const handleMouseEnter = () => startAnimation("forward");
    const handleMouseLeave = () => {
      clearAnimation();
      setDisplayedText(text);
    };
    const handleClick = () => {
      if (clickMode === "toggle") {
        if (isAnimating) {
          clearAnimation();
          setDisplayedText(text);
        } else {
          startAnimation("forward");
        }
      } else {
        if (!animationStartedRef.current) {
          startAnimation("forward");
        } else {
          clearAnimation();
          setDisplayedText(text);
          animationStartedRef.current = false;
        }
      }
    };

    if (animateOn === "view" || animateOn === "inViewHover") {
      const options: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animateOn === "view") {
              startAnimation("forward");
            } else {
              container.addEventListener("mouseenter", handleMouseEnter);
              container.addEventListener("mouseleave", handleMouseLeave);
            }
          }
        });
      }, options);

      observer.observe(container);
    }

    if (animateOn === "hover") {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    if (animateOn === "click") {
      container.addEventListener("click", handleClick);
    }

    return () => {
      clearAnimation();
      if (observer) observer.disconnect();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animateOn, clickMode]);

  return (
    <span ref={containerRef} className={`inline-block ${parentClassName}`}>
      <motion.span
        className={`${className} ${isAnimating ? encryptedClassName : ""}`}
        {...props}
      >
        {displayedText}
      </motion.span>
    </span>
  );
}
