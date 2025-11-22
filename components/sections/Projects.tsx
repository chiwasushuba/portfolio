import FadeIn from '@/components/animation/FadeIn';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/projects-data';

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
