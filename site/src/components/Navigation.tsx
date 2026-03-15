"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/home/");

  useEffect(() => {
    if (!isProjectPage) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  const isTransparent = isProjectPage && !scrolled && !menuOpen;
  const textColor = isTransparent ? "text-white" : "text-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white border-b border-[#d4d4d4]"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-12 flex items-center justify-between h-20">
        <Link
          href="/"
          className={`text-[28px] font-normal tracking-[0.04em] uppercase ${textColor}`}
          style={{ fontFamily: "'Times New Roman', 'Georgia', serif" }}
        >
          SARA PRESTON
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className={`text-base ${textColor} hover:opacity-60 transition-opacity`}>
            About
          </Link>
          <Link href="/contact" className={`text-base ${textColor} hover:opacity-60 transition-opacity`}>
            Contact
          </Link>
          <a href="https://www.linkedin.com/in/sarampreston/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${textColor} hover:opacity-60 transition-opacity ml-2`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="http://instagram.com/_sarapreston" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${textColor} hover:opacity-60 transition-opacity`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5" aria-label="Toggle menu">
          <span className={`block w-5 h-px ${isTransparent ? "bg-white" : "bg-foreground"} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-px ${isTransparent ? "bg-white" : "bg-foreground"} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-12 py-6 space-y-4">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-base">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-base">Contact</Link>
          <div className="flex gap-4 pt-2">
            <a href="https://www.linkedin.com/in/sarampreston/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="http://instagram.com/_sarapreston" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
