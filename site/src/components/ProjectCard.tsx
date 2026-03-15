import Link from "next/link";
import Image from "next/image";
import { imgSrc } from "@/lib/basePath";

interface ProjectCardProps {
  title: string;
  slug: string;
  thumbnail: string;
}

export default function ProjectCard({ title, slug, thumbnail }: ProjectCardProps) {
  return (
    <Link href={`/home/${slug}`} className="block project-card group">
      <div className="relative aspect-[3/2] overflow-hidden bg-[var(--color-surface)]">
        <Image
          src={imgSrc(thumbnail)}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Hover overlay with centered title */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/80 transition-all duration-300 flex items-center justify-center">
          <h3
            className="text-3xl md:text-4xl font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6"
            style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
