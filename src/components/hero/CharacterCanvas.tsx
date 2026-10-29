"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  CHARACTER_FRAMES,
  calculatePoseFromPointer,
  type DirectionalPose,
} from "@/lib/characterFrames";

interface CharacterCanvasProps {
  className?: string;
  externalPose?: DirectionalPose | null;
  onPoseChange?: (pose: DirectionalPose) => void;
}

export default function CharacterCanvas({
  className = "",
  externalPose = null,
  onPoseChange,
}: CharacterCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Cached image elements
  const imagesRef = useRef<Partial<Record<DirectionalPose, HTMLImageElement>>>({});
  const isLoadedRef = useRef<Partial<Record<DirectionalPose, boolean>>>({});

  // Animation states tracked in refs to prevent React re-renders on mousemove
  const currentPoseRef = useRef<DirectionalPose>("center");
  const targetPoseRef = useRef<DirectionalPose>("center");
  const isDrawingRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);

  // UI state for fallback visibility
  const [neutralReady, setNeutralReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activePoseName, setActivePoseName] = useState<DirectionalPose>("center");

  // Draw a frame to canvas
  const drawFrame = useCallback((pose: DirectionalPose) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[pose];
    // Fall back to center if target pose not yet loaded
    if (!img || !isLoadedRef.current[pose]) {
      img = imagesRef.current["center"];
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Zero ghosting: completely clear canvas before drawing single frame
    ctx.clearRect(0, 0, width, height);

    // Calculate aspect ratio covering canvas while maintaining 9:16
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    currentPoseRef.current = pose;
  }, []);

  // Set canvas resolution based on container and DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }

    drawFrame(currentPoseRef.current);
  }, [drawFrame]);

  // Request redraw if pose changed
  const scheduleRender = useCallback(() => {
    if (isDrawingRef.current) return;
    isDrawingRef.current = true;

    rafIdRef.current = requestAnimationFrame(() => {
      isDrawingRef.current = false;
      const target = externalPose || targetPoseRef.current;
      if (target !== currentPoseRef.current || !neutralReady) {
        drawFrame(target);
        setActivePoseName(target);
        if (onPoseChange) onPoseChange(target);
      }
    });
  }, [drawFrame, externalPose, neutralReady, onPoseChange]);

  // Step 1: Preload neutral frame first, then directional frames
  useEffect(() => {
    let isMounted = true;

    const loadNeutral = () => {
      const centerImg = new Image();
      centerImg.src = CHARACTER_FRAMES.center.webp;
      centerImg.onload = () => {
        if (!isMounted) return;
        imagesRef.current["center"] = centerImg;
        isLoadedRef.current["center"] = true;
        setNeutralReady(true);
        resizeCanvas();
        drawFrame("center");

        // Step 2: Preload directional frames in background
        const directionalKeys: DirectionalPose[] = [
          "up",
          "up-right",
          "right",
          "down-right",
          "down",
          "down-left",
          "left",
          "up-left",
          "point",
          "wave",
        ];

        directionalKeys.forEach((key) => {
          const img = new Image();
          img.src = CHARACTER_FRAMES[key].webp;
          img.onload = () => {
            if (!isMounted) return;
            imagesRef.current[key] = img;
            isLoadedRef.current[key] = true;
          };
          img.onerror = () => {
            // Try JPG fallback if WebP fails
            const fallbackImg = new Image();
            fallbackImg.src = CHARACTER_FRAMES[key].jpg;
            fallbackImg.onload = () => {
              if (!isMounted) return;
              imagesRef.current[key] = fallbackImg;
              isLoadedRef.current[key] = true;
            };
          };
        });
      };

      centerImg.onerror = () => {
        if (!isMounted) return;
        // Try JPG fallback for center
        const fallbackImg = new Image();
        fallbackImg.src = CHARACTER_FRAMES.center.jpg;
        fallbackImg.onload = () => {
          if (!isMounted) return;
          imagesRef.current["center"] = fallbackImg;
          isLoadedRef.current["center"] = true;
          setNeutralReady(true);
          resizeCanvas();
          drawFrame("center");
        };
        fallbackImg.onerror = () => {
          if (!isMounted) return;
          setHasError(true);
        };
      };
    };

    loadNeutral();

    return () => {
      isMounted = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame, resizeCanvas]);

  // Step 2: Handle resize and DPI changes
  useEffect(() => {
    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [resizeCanvas]);

  // Step 3: Handle cursor movement across viewport
  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      targetPoseRef.current = "center";
      scheduleRender();
      return;
    }

    let lastMoveTime = 0;
    const THROTTLE_MS = 16; // ~60fps target

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (externalPose) return; // Prop override active

      const now = performance.now();
      if (now - lastMoveTime < THROTTLE_MS) return;
      lastMoveTime = now;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      // Character face center is approximately at horizontal center (50%) and vertical 32%
      const faceCenterX = rect.left + rect.width * 0.5;
      const faceCenterY = rect.top + rect.height * 0.32;

      let clientX = 0;
      let clientY = 0;

      if ("touches" in e) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Neutral eye-contact radius: approx 12% of container width or minimum 65px
      const neutralRadius = Math.max(65, rect.width * 0.12);

      const nextPose = calculatePoseFromPointer(
        clientX,
        clientY,
        faceCenterX,
        faceCenterY,
        neutralRadius
      );

      if (nextPose !== targetPoseRef.current) {
        targetPoseRef.current = nextPose;
        scheduleRender();
      }
    };

    const handlePointerLeave = () => {
      if (externalPose) return;
      if (targetPoseRef.current !== "center") {
        targetPoseRef.current = "center";
        scheduleRender();
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerLeave);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerLeave);
    };
  }, [externalPose, scheduleRender]);

  // Step 4: React to external pose override changes
  useEffect(() => {
    if (externalPose) {
      targetPoseRef.current = externalPose;
      scheduleRender();
    }
  }, [externalPose, scheduleRender]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden ${className}`}
      aria-label="Interactive character animation reacting to cursor orientation"
      role="img"
    >
      {/* Canvas for zero-ghosting, 60fps directional rendering */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          neutralReady ? "opacity-100" : "opacity-0"
        }`}
        style={{
          // Soft radial vignette to seamlessly blend edges into hero composition
          maskImage:
            "radial-gradient(circle at 50% 48%, black 68%, rgba(0,0,0,0.8) 85%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 48%, black 68%, rgba(0,0,0,0.8) 85%, transparent 100%)",
        }}
      />

      {/* Graceful static fallback before canvas is ready or if error */}
      {(!neutralReady || hasError) && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CHARACTER_FRAMES.center.webp}
            alt="Aadya Agrawal - Software Engineer"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Try jpg if webp fails in fallback
              (e.currentTarget as HTMLImageElement).src = CHARACTER_FRAMES.center.jpg;
            }}
          />
        </div>
      )}

      {/* Subtle indicator badge of cursor direction */}
      <div className="absolute bottom-4 right-4 pointer-events-none z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111116]/80 backdrop-blur-md border border-white/10 text-[10px] text-[#A5A2AC] font-mono tracking-wider uppercase opacity-0 sm:opacity-75 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E52332] animate-pulse" />
        <span>Tracking: {CHARACTER_FRAMES[activePoseName]?.label || activePoseName}</span>
      </div>
    </div>
  );
}
