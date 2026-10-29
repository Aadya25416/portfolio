"use client";

import React from "react";
import { OPEN_SOURCE_CONTRIBUTIONS } from "@/data/openSource";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#17171D] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#10B981] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>Community & Code</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4F0] font-sans">
              Open-Source Contributions.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A5A2AC] font-mono max-w-sm">
            Direct pull requests, smart contract test suites, and privacy components merged into
            active open-source codebases.
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OPEN_SOURCE_CONTRIBUTIONS.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 rounded-2xl bg-[#111116] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Repository header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#A5A2AC]">
                    {item.repository}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F7F4F0] mb-3 group-hover:text-[#FF6A70] transition-colors">
                  {item.prUrl ? (
                    <a
                      href={item.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline decoration-[#FF6A70] underline-offset-4"
                    >
                      {item.project}
                    </a>
                  ) : (
                    item.project
                  )}
                </h3>

                <p className="text-xs sm:text-sm text-[#A5A2AC] leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A5A2AC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link to PR / repo */}
              <div className="pt-4 border-t border-white/5">
                {item.prUrl ? (
                  <a
                    href={item.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F7F4F0] hover:text-[#FF6A70] transition-colors"
                  >
                    <span>View Pull Request</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[#A5A2AC] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Verified Contributor</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
