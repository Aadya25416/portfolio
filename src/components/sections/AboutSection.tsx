"use client";

import React from "react";
import { Terminal, Cpu, GitPullRequest, GraduationCap, MapPin } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function AboutSection() {
  const BLOCKS = [
    {
      icon: Terminal,
      title: "Problem Solving",
      badge: "300+ Problems",
      description:
        "Passionate about algorithms and data structures. Active on Codeforces (Handles: Aadya25, Aadyaa432) and LeetCode, regularly tackling complex algorithmic puzzles.",
      tags: ["Codeforces", "LeetCode", "C++", "Algorithms"],
      accent: "#E52332",
    },
    {
      icon: Cpu,
      title: "Software Engineering",
      badge: "Full-Stack & Web3",
      description:
        "Building end-to-end applications from responsive React/Next.js frontends to resilient Node.js backends and Ethereum smart contracts with ERC-4337 Account Abstraction.",
      tags: ["Next.js", "TypeScript", "Node.js", "Solidity"],
      accent: "#6366F1",
    },
    {
      icon: GitPullRequest,
      title: "Open Source",
      badge: "Active Contributor",
      description:
        "Committed to community-driven engineering. Contributing test suites for Foundry/Solidity raffles, security-first decoy UIs, and participating in Hacktoberfest.",
      tags: ["Foundry", "Pull Requests", "Community", "Testing"],
      accent: "#10B981",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#17171D] relative">
      {/* Background ambient divider */}
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6A70] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A70]" />
              <span>Background & Focus</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4F0] font-sans">
              A little about me.
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#A5A2AC]">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#FF6A70]" />
              <span>IIIT Lucknow (SGPA: {PROFILE.sgpa})</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E52332]" />
              <span>{PROFILE.location}</span>
            </span>
          </div>
        </div>

        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <p className="text-xl sm:text-2xl text-[#F7F4F0]/90 leading-relaxed font-light mb-6">
              I&apos;m Aadya, a Computer Science undergraduate at{" "}
              <span className="text-[#F7F4F0] font-medium underline decoration-[#E52332] decoration-2 underline-offset-4">
                IIIT Lucknow
              </span>{" "}
              who enjoys solving challenging problems and building practical software. My interests
              span competitive programming, web development, backend engineering, and open-source
              contributions.
            </p>
            <p className="text-sm sm:text-base text-[#A5A2AC] leading-relaxed font-light">
              Whether architecting decentralized event systems using account abstraction, building
              geospatial accessibility visualization platforms with MapLibre, or optimizing
              competitive programming solutions under strict time constraints, I thrive on writing
              clean, efficient, and well-tested code.
            </p>
          </div>

          {/* Quick Academic & Profile Callout */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#111116] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-[#A5A2AC] tracking-wider mb-2">
                Education Snapshot
              </div>
              <div className="text-base font-semibold text-[#F7F4F0] mb-1">
                {PROFILE.university}
              </div>
              <div className="text-xs text-[#FF6A70] font-mono mb-4">{PROFILE.degree}</div>
              <div className="text-xs text-[#A5A2AC] space-y-1.5 border-t border-white/10 pt-3">
                <div className="flex justify-between">
                  <span>SGPA</span>
                  <span className="font-mono text-[#F7F4F0] font-semibold">{PROFILE.sgpa}</span>
                </div>
                <div className="flex justify-between">
                  <span>JEE Main 2025</span>
                  <span className="font-mono text-[#F7F4F0]">99.02 %ile (AIR 15090)</span>
                </div>
                <div className="flex justify-between">
                  <span>Leadership</span>
                  <span className="font-mono text-[#F7F4F0]">Core Member, E-Cell IIITL</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#10B981]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Internship Ready</span>
              </span>
              <span className="text-[#A5A2AC]">2025–2029</span>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="group p-6 sm:p-8 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${block.accent}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: block.accent }} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#A5A2AC]">
                    {block.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F7F4F0] mb-3 group-hover:text-[#FF6A70] transition-colors">
                  {block.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A5A2AC] leading-relaxed mb-6 font-light">
                  {block.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {block.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#A5A2AC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
