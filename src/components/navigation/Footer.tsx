"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0D12] border-t border-white/10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Left: Copyright & Closing Line */}
          <div className="flex flex-col gap-1.5">
            <p className="text-xs sm:text-sm font-mono text-[#F7F4F0]/90">
              © 2026 Aadya Agrawal. All rights reserved.
            </p>
            <p className="text-xs text-[#A5A2AC] font-light">
              Built with care and a little caffeine.
            </p>
          </div>

          {/* Right: Minimal Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs font-mono text-[#A5A2AC]">
            <a
              href={PROFILE.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F7F4F0] transition-colors group"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#A5A2AC] opacity-60 group-hover:opacity-100 group-hover:text-white transition-all" />
            </a>

            <span className="text-white/15 hidden sm:inline">•</span>

            <a
              href={PROFILE.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F7F4F0] transition-colors group"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2] group-hover:scale-105 transition-transform" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#A5A2AC] opacity-60 group-hover:opacity-100 group-hover:text-white transition-all" />
            </a>

            <span className="text-white/15 hidden sm:inline">•</span>

            <a
              href={`mailto:${PROFILE.contacts.email}`}
              className="flex items-center gap-1.5 hover:text-[#F7F4F0] transition-colors group"
              aria-label="Send email"
            >
              <Mail className="w-3.5 h-3.5 text-[#E52332] group-hover:scale-105 transition-transform" />
              <span>Email</span>
              <ArrowUpRight className="w-3 h-3 text-[#A5A2AC] opacity-60 group-hover:opacity-100 group-hover:text-white transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
