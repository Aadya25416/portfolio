"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/skills";
import { Code, Database, Globe, Server, Shield, Wrench } from "lucide-react";

export default function SkillsSection() {
  const iconMap: Record<string, React.ElementType> = {
    "Programming Languages": Code,
    "Frontend Development": Globe,
    "Backend & Systems": Server,
    "Databases & Storage": Database,
    "Web3 & Blockchain": Shield,
    "Tools & Infrastructure": Wrench,
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#17171D] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FF6A70] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A70]" />
              <span>Toolbox & Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4F0] font-sans">
              Technical Skills.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A5A2AC] font-mono max-w-sm">
            Technologies and frameworks applied across academic coursework, competitive
            programming, hackathons, and real-world projects.
          </p>
        </div>

        {/* 6 Clean Category Cards (No fake bars or proficiency percentages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => {
            const Icon = iconMap[group.category] || Code;
            return (
              <div
                key={group.category}
                className="p-6 sm:p-7 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6A70]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F7F4F0]">
                        {group.category}
                      </h3>
                      <span className="text-[10px] font-mono text-[#A5A2AC] block">
                        {group.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#A5A2AC] mb-6 font-light leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-mono text-[#F7F4F0]/90 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      {skill}
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
