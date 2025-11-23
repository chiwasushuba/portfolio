import FadeIn from '@/components/animation/FadeIn';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { experiences } from '@/lib/experience-data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
        </FadeIn>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.1} direction="up">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl">{exp.position}</CardTitle>
                      <p className="text-lg text-primary font-semibold mt-1">{exp.company}</p>
                    </div>
                    <p className="text-muted-foreground font-medium">{exp.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
