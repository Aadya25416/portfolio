"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse/trackpad), not touchscreens
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasMouse || prefersReducedMotion) {
      return;
    }

    const enableTimer = setTimeout(() => {
      setIsEnabled(true);
    }, 0);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("button, a, input, textarea, [role='button']");
        isHovering = !!interactive;
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Smooth trailing animation loop
    let rafId: number;
    const updateCursor = () => {
      // Ring follows mouse with smooth interpolation
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        const scale = isHovering ? "scale(1.6)" : "scale(1)";
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) ${scale}`;
        ringRef.current.style.borderColor = isHovering
          ? "rgba(229, 35, 50, 0.7)"
          : "rgba(255, 255, 255, 0.3)";
      }

      rafId = requestAnimationFrame(updateCursor);
    };

    rafId = requestAnimationFrame(updateCursor);

    return () => {
      clearTimeout(enableTimer);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-white opacity-0 pointer-events-none transition-opacity duration-300"
      />
      {/* Trailing smooth ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/30 opacity-0 pointer-events-none transition-[opacity,transform,border-color] duration-150 ease-out"
      />
    </div>
  );
}
