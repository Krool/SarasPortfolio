import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer className="bg-[#2d2240] text-white">
      {/* Marquee */}
      <Marquee />

      {/* Footer content */}
      <div className="max-w-[1800px] mx-auto px-12 py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-light tracking-[0.15em] uppercase mb-6">
              SARA PRESTON
            </h2>
            <p className="text-sm text-white/80">
              Crafting brands and campaigns that connect culture, creativity, and commerce.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/sarampreston/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:opacity-60 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/_sarapreston" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:opacity-60 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
