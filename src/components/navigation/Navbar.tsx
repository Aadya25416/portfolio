"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/profile";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Open Source", href: "#open-source" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ["about", "projects", "skills", "achievements", "open-source", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const navOffset = 90;
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      {/* Floating pill container */}
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-300 max-w-4xl w-full ${
          isScrolled
            ? "bg-[#111116]/85 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-[#111116]/60 backdrop-blur-md border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 pl-2 pr-1 py-1 text-white hover:text-[#FF6A70] transition-colors group"
        >
          <span className="w-2 h-2 rounded-full bg-[#E52332] group-hover:scale-125 transition-transform" />
          <span className="font-semibold tracking-tight text-sm text-[#F7F4F0] font-sans">
            Aadya<span className="text-[#FF6A70]">.</span>
          </span>
          <span className="hidden md:inline-block text-[11px] font-mono text-[#A5A2AC] px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            IIITL &apos;29
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#F7F4F0] bg-white/10 shadow-sm"
                    : "text-[#A5A2AC] hover:text-[#F7F4F0] hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E52332] hover:bg-[#ff3b4b] text-[#F7F4F0] text-xs font-medium tracking-wide transition-all shadow-[0_2px_12px_rgba(229,35,50,0.35)] hover:shadow-[0_4px_16px_rgba(229,35,50,0.5)] active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#A5A2AC] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed inset-x-4 top-20 p-5 rounded-2xl bg-[#17171D]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-[#A5A2AC] font-mono">
            <span>Navigation</span>
            <span className="flex items-center gap-1 text-[#FF6A70]">
              <Sparkles className="w-3 h-3" /> Ready to build
            </span>
          </div>

          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#F7F4F0] hover:bg-white/10 hover:text-[#FF6A70] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#A5A2AC]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`mailto:${PROFILE.contacts.email}`}
              className="w-full text-center py-2.5 rounded-xl bg-[#E52332] text-[#F7F4F0] text-xs font-semibold tracking-wide"
            >
              Contact Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
