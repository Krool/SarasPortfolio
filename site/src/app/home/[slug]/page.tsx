import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, ContentSection } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Sara Preston`,
    description: project.subtitle || project.role,
  };
}

function SectionImages({ section }: { section: ContentSection }) {
  const cols = section.columns || 1;
  const gridClass =
    cols === 4
      ? "grid grid-cols-2 md:grid-cols-4 gap-4"
      : cols === 3
        ? "grid grid-cols-2 md:grid-cols-3 gap-4"
        : cols === 2
          ? "grid grid-cols-1 md:grid-cols-2 gap-4"
          : "space-y-4";

  return (
    <div className={gridClass}>
      {section.images.map((src, i) => (
        <div key={src + i}>
          <Image
            src={src}
            alt={`${section.heading || "Project"} — image ${i + 1}`}
            width={1400}
            height={900}
            sizes={
              cols === 4
                ? "(max-width: 768px) 50vw, 25vw"
                : cols === 3
                  ? "(max-width: 768px) 50vw, 33vw"
                  : cols === 2
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 1400px) 100vw, 1400px"
            }
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const hasCaseStudy =
    project.challenge.trim() !== "" ||
    project.solution.trim() !== "" ||
    project.impact.trim() !== "";

  const sections = project.contentSections;
  const serif = { fontFamily: "'Georgia', serif" } as const;
  const serifItalic = { fontFamily: "'Georgia', serif", fontStyle: "italic" as const };

  return (
    <div>
      {/* Hero image - full bleed */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-surface">
        <Image
          src={project.heroImage || project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-end px-12 md:px-24">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl text-white text-right max-w-xl leading-tight"
            style={serif}
          >
            {project.heroTitle || project.title}
          </h1>
        </div>
      </div>

      {/* Role / Responsibilities + Case Study */}
      <div className="max-w-[1400px] mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16">
          {/* Left column - Role & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-semibold mb-2" style={serif}>Role</h3>
              <p className="text-[15px] text-muted" style={serifItalic}>{project.role}</p>
            </div>

            {project.responsibilities.length > 0 && (
              <div>
                <h3 className="text-base font-semibold mb-2" style={serif}>Responsibilities</h3>
                <ul className="space-y-1">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="text-[15px] text-muted" style={serifItalic}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.team.length > 0 && (
              <div>
                <h3 className="text-base font-semibold mb-2" style={serif}>Team</h3>
                <ul className="space-y-1">
                  {project.team.map((member) => (
                    <li key={member} className="text-[15px] text-muted" style={serifItalic}>{member}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.categories && project.categories.length > 0 && (
              <div>
                <h3 className="text-base font-semibold mb-2" style={serif}>Categories</h3>
                <ul className="space-y-1">
                  {project.categories.map((cat) => (
                    <li key={cat} className="text-[15px] text-muted" style={serifItalic}>{cat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right column - Case study */}
          {hasCaseStudy && (
            <div className="space-y-10">
              {project.challenge.trim() !== "" && (
                <div>
                  <h2 className="text-2xl mb-4" style={serif}>The Challenge</h2>
                  <p className="text-[15px] leading-relaxed text-muted" style={serifItalic}>{project.challenge}</p>
                </div>
              )}
              {project.solution.trim() !== "" && (
                <div>
                  <h2 className="text-2xl mb-4" style={serif}>The Solution</h2>
                  <p className="text-[15px] leading-relaxed text-muted" style={serifItalic}>{project.solution}</p>
                </div>
              )}
              {project.impact.trim() !== "" && (
                <div>
                  <h2 className="text-2xl mb-4" style={serif}>The Impact</h2>
                  <p className="text-[15px] leading-relaxed text-muted" style={serifItalic}>{project.impact}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content Sections - structured image galleries */}
      {sections && sections.length > 0 ? (
        <div className="max-w-[1400px] mx-auto px-12 pb-16 space-y-16">
          {sections.map((section, i) => (
            <div key={i}>
              {/* Section heading */}
              {section.heading && (
                <h2 className="text-2xl mb-2" style={serif}>{section.heading}</h2>
              )}

              {/* Section text */}
              {section.text && (
                <p className="text-[15px] text-muted mb-6" style={serifItalic}>{section.text}</p>
              )}

              {/* Video placeholder */}
              {section.videoPlaceholder && (
                <div className="bg-surface border border-border rounded-sm p-12 flex flex-col items-center justify-center text-center mb-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted mb-4">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <p className="text-base" style={serif}>{section.videoPlaceholder}</p>
                  <p className="text-xs text-muted mt-2">Video coming soon</p>
                </div>
              )}

              {/* Images grid */}
              {section.images.length > 0 && (
                <SectionImages section={section} />
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Fallback: flat image list */
        <div className="max-w-[1400px] mx-auto px-12 pb-16 space-y-4">
          {project.images.map((src, i) => (
            <div key={src}>
              <Image
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                width={1400}
                height={900}
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}

      {/* Prev / Next */}
      <nav className="border-t border-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2">
          {prevProject ? (
            <Link href={`/home/${prevProject.slug}`} className="px-12 py-10 hover:bg-surface transition-colors">
              <span className="text-xs tracking-widest uppercase text-muted block mb-1">Previous</span>
              <span className="text-base">{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link href={`/home/${nextProject.slug}`} className="px-12 py-10 text-right border-l border-border hover:bg-surface transition-colors">
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
