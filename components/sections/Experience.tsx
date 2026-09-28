import FadeIn from '@/components/animation/FadeIn';
import { ChevronDown } from 'lucide-react';
import { experiences } from '@/lib/experience-data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="divide-y divide-border overflow-hidden rounded-xl border bg-card">
            {experiences.map((exp) => (
              <details key={exp.id} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary md:px-7 [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold md:text-xl">{exp.position}</span>
                    <span className="mt-1 block text-sm font-medium text-primary">{exp.company}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <span className="hidden text-sm text-muted-foreground sm:block">{exp.period}</span>
                    <ChevronDown className="h-5 w-5 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                  </span>
                </summary>
                <div className="border-t bg-secondary/20 px-5 py-6 md:px-7">
                  <p className="mb-5 text-sm text-muted-foreground sm:hidden">{exp.period}</p>
                  <p className="mb-6 max-w-4xl leading-relaxed text-muted-foreground">{exp.description}</p>
                  <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
                    <div>
                      <h3 className="mb-3 font-semibold">Key Responsibilities</h3>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                        {exp.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 font-semibold">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
