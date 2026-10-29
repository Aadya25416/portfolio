"use client";

import React from "react";
import { ACHIEVEMENTS } from "@/data/achievements";
import { Trophy, Award, Zap, BookOpen } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111116] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E52332] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52332]" />
              <span>Competitive Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4F0] font-sans">
              Verified Achievements.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A5A2AC] font-mono max-w-sm">
            Proven track record in national competitive programming contests, Web3 hackathons, and
            rigorous competitive examinations.
          </p>
        </div>

        {/* High-Impact Numerical Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 rounded-2xl bg-[#17171D] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Badge and Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF6A70]">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-[#A5A2AC]">
                    {item.year || `0${idx + 1}`}
                  </span>
                </div>

                {/* Big Numerals */}
                <div className="mb-4">
                  <div className="text-4xl sm:text-5xl font-bold font-sans tracking-tight text-[#F7F4F0] group-hover:text-[#FF6A70] transition-colors">
                    {item.metric}
                  </div>
                  <div className="text-xs font-mono text-[#A5A2AC] mt-1 uppercase tracking-wider">
                    {item.metricLabel}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#F7F4F0] mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A5A2AC] leading-relaxed font-light mb-4">
                  {item.description}
                </p>
              </div>

              {/* Organization Footnote */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A5A2AC]">
                <span>{item.organization}</span>
                <Trophy className="w-3.5 h-3.5 text-[#E52332] opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
