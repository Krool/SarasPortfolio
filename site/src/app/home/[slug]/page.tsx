import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Sara Preston`,
    description: project.subtitle || project.role,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const hasCaseStudy =
    project.challenge.trim() !== "" ||
    project.solution.trim() !== "" ||
    project.impact.trim() !== "";

  return (
    <div className="pt-[50px]">
      {/* Hero image */}
      <div className="relative w-full aspect-[3/2] max-h-[70vh] overflow-hidden bg-surface">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
          priority
        />
      </div>

      {/* Title */}
      <div className="max-w-[1800px] mx-auto px-8 pt-12 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h1>
      </div>

      {/* Role / Responsibilities / Team - stacked vertically like original */}
      <div className="max-w-[1800px] mx-auto px-8 pb-10 space-y-6">
        <div>
          <h3 className="text-xs tracking-widest uppercase text-muted mb-1">Role</h3>
          <p className="text-sm">{project.role}</p>
        </div>

        {project.responsibilities.length > 0 && (
          <div>
            <h3 className="text-xs tracking-widest uppercase text-muted mb-1">Responsibilities</h3>
            <ul className="space-y-0.5">
              {project.responsibilities.map((item) => (
                <li key={item} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.team.length > 0 && (
          <div>
            <h3 className="text-xs tracking-widest uppercase text-muted mb-1">Team</h3>
            <ul className="space-y-0.5">
              {project.team.map((member) => (
                <li key={member} className="text-sm">{member}</li>
              ))}
            </ul>
          </div>
        )}

        {project.categories && project.categories.length > 0 && (
          <div>
            <h3 className="text-xs tracking-widest uppercase text-muted mb-1">Categories</h3>
            <ul className="space-y-0.5">
              {project.categories.map((cat) => (
                <li key={cat} className="text-sm">{cat}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Case study content */}
      {hasCaseStudy && (
        <div className="max-w-[1800px] mx-auto px-8 pb-12 space-y-10">
          {project.challenge.trim() !== "" && (
            <div>
              <h2 className="text-xs tracking-widest uppercase text-muted mb-3">The Challenge</h2>
              <p className="text-base leading-relaxed max-w-2xl">{project.challenge}</p>
            </div>
          )}

          {project.solution.trim() !== "" && (
            <div>
              <h2 className="text-xs tracking-widest uppercase text-muted mb-3">The Solution</h2>
              <p className="text-base leading-relaxed max-w-2xl">{project.solution}</p>
            </div>
          )}

          {project.impact.trim() !== "" && (
            <div>
              <h2 className="text-xs tracking-widest uppercase text-muted mb-3">The Impact</h2>
              <p className="text-base leading-relaxed max-w-2xl">{project.impact}</p>
            </div>
          )}
        </div>
      )}

      {/* Images */}
      <div className="max-w-[1800px] mx-auto px-8 pb-16 space-y-4">
        {project.images.map((src, i) => (
          <div key={src}>
            <Image
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              width={1800}
              height={1200}
              sizes="(max-width: 1800px) 100vw, 1800px"
              quality={90}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <nav className="border-t border-border">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2">
          {prevProject ? (
            <Link href={`/home/${prevProject.slug}`} className="px-8 py-10 hover:bg-surface transition-colors">
              <span className="text-xs tracking-widest uppercase text-muted block mb-1">Previous</span>
              <span className="text-base">{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link href={`/home/${nextProject.slug}`} className="px-8 py-10 text-right border-l border-border hover:bg-surface transition-colors">
              <span className="text-xs tracking-widest uppercase text-muted block mb-1">Next</span>
              <span className="text-base">{nextProject.title}</span>
            </Link>
          ) : (
            <div className="border-l border-border" />
          )}
        </div>
      </nav>
    </div>
  );
}
