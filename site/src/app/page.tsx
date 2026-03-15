import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      {/* Current Location */}
      <section className="max-w-[1800px] mx-auto px-8 pt-28 pb-4">
        <p className="text-xs tracking-widest uppercase text-muted">Current Location</p>
        <h3 className="text-base font-medium mt-1">San Francisco, CA</h3>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Tagline */}
      <section className="max-w-[1800px] mx-auto px-8 py-8">
        <p className="text-base text-foreground max-w-xl">
          Crafting brands and campaigns that connect culture, creativity, and commerce.
        </p>
      </section>

      {/* Portfolio Grid - 2 columns, 3:2 aspect, 30px gap */}
      <section className="max-w-[1800px] mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </section>
    </>
  );
}
