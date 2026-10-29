"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PROFILE } from "@/data/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111116] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-tr from-[#E52332]/10 via-[#FF6A70]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF6A70] tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52332] animate-ping" />
          <span>Get in touch</span>
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F7F4F0] mb-4 font-sans">
          Have something interesting in mind?
        </h2>
        <p className="text-base sm:text-xl text-[#A5A2AC] font-light max-w-xl mx-auto mb-12">
          Let&apos;s connect and build something meaningful. I&apos;m currently open to software
          engineering internships, collaborative development, and technical discussions.
        </p>

        {/* Central Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
          {/* Email card */}
          <div className="p-6 rounded-2xl bg-[#17171D] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E52332]">
                <Mail className="w-5 h-5" />
              </span>
              <button
                onClick={copyEmail}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-[11px] font-mono text-[#A5A2AC] hover:text-[#F7F4F0] transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#10B981]" />
                    <span className="text-[#10B981]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#A5A2AC] block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${PROFILE.contacts.email}`}
                className="text-base sm:text-lg font-semibold text-[#F7F4F0] hover:text-[#FF6A70] transition-colors inline-block"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="p-6 rounded-2xl bg-[#17171D] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6A70]">
                <Send className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono uppercase text-[#A5A2AC]">Professional Profiles</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href={PROFILE.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-xs font-mono text-[#F7F4F0] transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">LinkedIn</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A2AC] group-hover:text-white transition-colors" />
              </a>

              <a
                href={PROFILE.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 text-xs font-mono text-[#F7F4F0] transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm">GitHub</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A2AC] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Big Action CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${PROFILE.contacts.email}?subject=Hello%20Aadya`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E52332] hover:bg-[#ff3b4b] text-[#F7F4F0] text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_4px_24px_rgba(229,35,50,0.4)] hover:shadow-[0_6px_32px_rgba(229,35,50,0.6)] active:scale-95"
          >
            <span>Say Hello Directly ↗</span>
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A5A2AC] gap-4">
          <div>
            © 2026 Aadya Agrawal. Designed & Engineered with precision.
          </div>
          <div className="flex items-center gap-4">
            <span>IIIT Lucknow</span>
            <span>•</span>
            <span>Next.js & TypeScript</span>
            <span>•</span>
            <span className="text-[#10B981]">● Status: Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
