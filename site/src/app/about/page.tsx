import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Sara Preston",
  description: "Art Director + Designer based in San Francisco, CA.",
};

export default function AboutPage() {
  return (
    <div className="pt-[50px] max-w-[1800px] mx-auto px-8 py-16">
      <h1 className="text-3xl font-semibold leading-snug tracking-tight max-w-2xl mb-16">
        I&rsquo;m Sara, an <em className="italic">Art Director + Designer</em> based
        in San Francisco, CA.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Photo - left */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="/images/about/sara-preston.jpeg"
            alt="Sara Preston"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            priority
          />
        </div>

        {/* Bio - right */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-base leading-relaxed text-muted">
            An Art Director who believes great creative should do more than look
            beautiful — it should move brands forward.
          </p>
          <p className="text-base leading-relaxed text-muted">
            With deep experience in the beauty industry, I specialize in building
            cohesive brand stories across retail, digital, experiential, and
            campaign channels.
          </p>
          <p className="text-base leading-relaxed text-muted">
            I care deeply about two things: building strong creative work and
            building the teams that make it possible.
          </p>
        </div>
      </div>
    </div>
  );
}
