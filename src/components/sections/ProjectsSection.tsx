"use client";

import React, { useState } from "react";
import { CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web & Geospatial", "Web3 & Blockchain", "Full-Stack & AI", "Backend Systems"];

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111116] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E52332] tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52332]" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4F0] font-sans">
              Featured Projects.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-[#E52332] text-[#F7F4F0] shadow-sm"
                    : "bg-white/5 text-[#A5A2AC] hover:text-[#F7F4F0] hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards (Large, Editorial Layouts) */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-[#17171D] border border-white/10 hover:border-white/20 transition-all duration-300 p-6 sm:p-10 overflow-hidden"
            >
              {/* Subtle accent glow on card top-right */}
              <div
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none transition-opacity duration-300 group-hover:opacity-25"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left details */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Index & Category tag */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-[#A5A2AC]">
                        0{index + 1} {"//"}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#FF6A70]">
                        {project.category}
                      </span>
                      {project.role && (
                        <span className="text-xs font-mono text-[#A5A2AC] hidden sm:inline">
                          Role: {project.role}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-4xl font-bold text-[#F7F4F0] tracking-tight mb-2 group-hover:text-[#FF6A70] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-[#A5A2AC] mb-4">
                      {project.subtitle}
                    </p>

                    {/* Overview */}
                    <p className="text-sm sm:text-base text-[#F7F4F0]/80 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlighted Real Features */}
                    <div className="mb-6 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#A5A2AC]">
                        Key Implemented Features
                      </div>
                      <div className="grid grid-cols-1 gap-2 pt-1">
                        {project.features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5A2AC]"
                          >
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: project.accentColor }}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E52332] hover:bg-[#ff3b4b] text-[#F7F4F0] text-xs font-semibold tracking-wide transition-all shadow-[0_2px_12px_rgba(229,35,50,0.3)] hover:shadow-[0_4px_16px_rgba(229,35,50,0.4)] active:scale-95"
                      >
                        <span>Live Demo ↗</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[#F7F4F0] text-xs font-medium transition-colors active:scale-95"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Interactive Tech Stack Card */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#111116] border border-white/10 h-full">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#F7F4F0]">
                        <Layers className="w-4 h-4 text-[#FF6A70]" />
                        <span>Technology Stack</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A5A2AC]">
                        {project.technologies.length} Tools
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-[#F7F4F0]/90 hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.role && (
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#A5A2AC] space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF6A70] block">
                          Contribution Specifics
                        </span>
                        <p className="leading-relaxed">{project.role}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A5A2AC]">
                    <span>Verified Production Code</span>
                    <span className="text-[#10B981]">● Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
