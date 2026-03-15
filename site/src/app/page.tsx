import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Portfolio Grid */}
      <section className="max-w-[1800px] mx-auto px-12 pt-12 pb-24">
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

      {/* Current Location + Map */}
      <section className="max-w-[1100px] mx-auto px-12 pb-24">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12">
          San Francisco, CA
        </h2>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.2!2d-122.42927!3d37.75964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1c3af4ea55%3A0x55f5b2e88f6fa425!2sMission%20Dolores%20Park!5e0!3m2!1sen!2sus!4v1"
            className="grayscale"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="San Francisco, CA - Dolores Park"
          />
        </div>
      </section>
    </div>
  );
}
