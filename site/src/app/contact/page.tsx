import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Sara Preston",
  description: "Get in touch with Sara Preston — Art Director + Designer.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 max-w-[1800px] mx-auto px-12 py-16">
      <h1 className="text-3xl font-light tracking-tight mb-12">
        Let&rsquo;s chat!
      </h1>

      <div className="space-y-4 mb-12">
        <a href="mailto:sarampreston@gmail.com" className="block text-base text-muted hover:text-foreground transition-colors">
          sarampreston@gmail.com
        </a>
        <a href="tel:+18473317421" className="block text-base text-muted hover:text-foreground transition-colors">
          (847) 331-7421
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/sarampreston/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground hover:opacity-60 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="http://instagram.com/_sarapreston" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground hover:opacity-60 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </div>
  );
}
