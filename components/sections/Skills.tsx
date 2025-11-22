import FadeIn from '@/components/animation/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

export default function Skills() {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'Git'];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <FadeIn key={skill} delay={index * 0.1} direction="up">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="font-semibold">{skill}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
