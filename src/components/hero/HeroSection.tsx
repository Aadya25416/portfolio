"use client";

import React, { useState } from "react";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import CharacterCanvas from "./CharacterCanvas";
import { PROFILE } from "@/data/profile";
import type { DirectionalPose } from "@/lib/characterFrames";

export default function HeroSection() {
  const [overridePose, setOverridePose] = useState<DirectionalPose | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#111116]"
    >
      {/* Cinematic Studio Atmosphere Gradients matching video's warm peach & coral studio glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Right warm berry/coral studio backlight */}
        <div className="absolute -top-24 right-[-10%] w-[600px] h-[750px] rounded-full bg-gradient-to-bl from-[#E52332]/25 via-[#FF6A70]/15 to-transparent blur-3xl opacity-80" />
        {/* Left deep charcoal ambience */}
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#17171D] via-[#1E1E26]/40 to-transparent blur-2xl" />
        {/* Subtle grid pattern for technical developer aesthetic */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: Editorial Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 text-left pt-4 lg:pt-0">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-[#A5A2AC] uppercase w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52332] animate-ping" />
            <span>{PROFILE.eyebrow}</span>
          </div>

          {/* Greeting & Name */}
          <div className="mb-4">
            <span className="text-xl sm:text-2xl text-[#A5A2AC] font-light block mb-1">
              {PROFILE.greeting}
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F7F4F0] font-sans font-bold flex flex-wrap items-baseline gap-3">
              <span>Aadya</span>
              <span className="font-script text-6xl sm:text-8xl lg:text-9xl text-[#FF6A70] font-normal tracking-normal select-none -ml-1">
                Agrawal
              </span>
            </h1>
          </div>

          {/* Professional Headline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#F7F4F0]/90 tracking-tight mb-4">
            {PROFILE.headline}
          </h2>

          {/* Compact Description (max-width ~420px on desktop) */}
          <p className="text-sm sm:text-base text-[#A5A2AC] leading-relaxed max-w-[430px] mb-8 font-light">
            {PROFILE.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              onMouseEnter={() => setOverridePose("point")}
              onMouseLeave={() => setOverridePose(null)}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#E52332] hover:bg-[#ff3b4b] text-[#F7F4F0] text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(229,35,50,0.35)] hover:shadow-[0_6px_24px_rgba(229,35,50,0.5)] active:scale-95 cursor-pointer"
            >
              <span>View My Work</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              onMouseEnter={() => setOverridePose("wave")}
              onMouseLeave={() => setOverridePose(null)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[#F7F4F0] text-sm font-medium transition-all duration-200 hover:text-white active:scale-95 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
            </button>

            {/* Quick interactive easter egg trigger */}
            <button
              onClick={() => {
                setOverridePose("wave");
                setTimeout(() => setOverridePose(null), 1800);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#A5A2AC] hover:text-[#FF6A70] transition-colors"
              title="Click to have character wave hello!"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6A70]" />
              <span className="text-[11px] font-mono">Wave 👋</span>
            </button>
          </div>

          {/* Social Proof & Profiles Row */}
          <div className="flex items-center gap-4 text-xs text-[#A5A2AC] font-mono pt-4 border-t border-white/10 max-w-[430px]">
            <a
              href={PROFILE.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F7F4F0] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={PROFILE.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>IIITL CS &apos;29</span>
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Character Canvas */}
        <div className="lg:col-span-5 flex items-center justify-center relative w-full h-[460px] sm:h-[540px] lg:h-[620px] max-w-[480px] mx-auto">
          {/* Subtle glowing pedestal backing the character */}
          <div className="absolute inset-4 rounded-3xl bg-gradient-to-b from-[#FF6A70]/10 via-[#E52332]/5 to-transparent blur-xl pointer-events-none" />

          {/* Canvas Component with pointer tracking */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#17171D]/40 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <CharacterCanvas externalPose={overridePose} />

            {/* Subtle floating corner badges */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-[#111116]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#F7F4F0]">
              <Code2 className="w-3 h-3 text-[#E52332]" />
              <span>Cursor Interactive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#A5A2AC] hover:text-[#F7F4F0] transition-colors cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
        <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
}
