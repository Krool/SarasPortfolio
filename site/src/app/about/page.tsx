import type { Metadata } from "next";
import Image from "next/image";
import { imgSrc } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "About — Sara Preston",
  description: "Art Director + Designer based in San Francisco, CA.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 max-w-[1400px] mx-auto px-12 py-16">
      <p
        className="text-xl leading-relaxed max-w-md mb-12"
        style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
      >
        I&rsquo;m Sara, an <em className="font-medium">Art Director + Designer</em> based in San
        Francisco, CA.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={imgSrc("/images/about/sara-preston.jpeg")}
            alt="Sara Preston"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-8">
          <p
            className="text-[15px] leading-relaxed text-muted"
            style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
          >
            An Art Director who believes great creative should do more than look
            beautiful &mdash; it should move brands forward.
          </p>
          <p
            className="text-[15px] leading-relaxed text-muted"
            style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
          >
            With deep experience in the beauty industry, I specialize in building
            cohesive brand stories across retail, digital, experiential, and
            campaign channels.
          </p>
          <p
            className="text-[15px] leading-relaxed text-muted"
            style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
          >
            I care deeply about two things: building strong creative work and
            building the teams that make it possible.
          </p>
        </div>
      </div>
    </div>
  );
}
