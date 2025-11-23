import FadeIn from '@/components/animation/FadeIn';
import ProjectCard from '../ProjectCard';
import { projects } from '@/lib/projects-data';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work showcasing modern web development, creative problem-solving, and innovative solutions
            </p>
          </div>
        </FadeIn>
        
        {/* Grid Layout - Best for equal-sized projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              thumbnail={project.showImage}
              delay={index * 0.1}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
}
