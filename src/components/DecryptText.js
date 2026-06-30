"use client";

import { useEffect, useState } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const DURATION = 3500; // 3 seconds
const START_DELAY = 300; // Wait before starting

export default function DecryptText({ text, className = "" }) {
  const [isScrambling, setIsScrambling] = useState(true);
  const [displayText, setDisplayText] = useState([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const charArray = text.split("");

    if (prefersReducedMotion) {
      setIsScrambling(false);
      setDisplayText(charArray);
      return;
    }

    setIsScrambling(true);
    setDisplayText(charArray.map(() => ""));

    let animationFrame;
    let timeout;
    let startTime;

    timeout = setTimeout(() => {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / DURATION, 1);

        const newText = charArray.map((char, index) => {
          if (char === " ") return " ";

          // Reveal timing for this specific character
          const revealPoint = index / charArray.length;

          if (progress > revealPoint) {
            return char;
          }

          return CHARS[Math.floor(Math.random() * CHARS.length)];
        });

        setDisplayText(newText);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setIsScrambling(false);
          setDisplayText(charArray);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, START_DELAY);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [text]);

  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wordIndex) => {
        const wordNode = (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((char, charIndex) => {
              const currentIndex = globalCharIndex++;

              const isResolved =
                !isScrambling ||
                displayText[currentIndex] === char;

              return (
                <span
                  key={charIndex}
                  className="relative inline-block"
                >
                  <span className="opacity-0">{char}</span>

                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-colors duration-200 ${!isResolved
                        ? "font-mono text-blueprint opacity-80"
                        : ""
                      }`}
                  >
                    {displayText[currentIndex]}
                  </span>
                </span>
              );
            })}
          </span>
        );

        if (wordIndex < words.length - 1) {
          const spaceIndex = globalCharIndex++;

          return (
            <span key={wordIndex}>
              {wordNode}

              <span className="relative inline-block">
                <span className="opacity-0">&nbsp;</span>

                <span className="absolute inset-0">
                  {displayText[spaceIndex] === " "
                    ? "\u00A0"
                    : displayText[spaceIndex]}
                </span>
              </span>
            </span>
          );
        }

        return wordNode;
      })}
    </span>
  );
}