"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  duration?: number; // ms
  className?: string; // for easy styling
}

let counterId = 0; // used to generate unique ids

export function AnimatedCounter({
  target,
  decimals = 0,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Generate a unique id for each instance
const localIdRef = useRef<number | undefined>(undefined);

  if (localIdRef.current === undefined) {
    localIdRef.current = ++counterId;
  }
  const counterIdStr = `counter-${localIdRef.current}`;

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById(counterIdStr);
    if (el) observer.observe(el);

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let frame: number;

    const animate = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(target * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target); // snap to target on finish
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isVisible, target, duration]);

  return (
    <span
      id={counterIdStr}
      className={className}
      aria-live="polite"
      aria-label={count.toLocaleString(undefined, { maximumFractionDigits: decimals })}
    >
      {Number(count).toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}
