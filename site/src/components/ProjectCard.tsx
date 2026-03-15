import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  slug: string;
  thumbnail: string;
}

export default function ProjectCard({ title, slug, thumbnail }: ProjectCardProps) {
  return (
    <Link href={`/home/${slug}`} className="block project-card">
      <div className="relative aspect-[3/2] overflow-hidden bg-[var(--color-surface)]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </div>
      <h3 className="text-sm font-medium mt-3">{title}</h3>
    </Link>
  );
}
