import FadeIn from '@/components/animation/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with experience in building dynamic and responsive web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring the latest tech trends, playing video games or watching some movies. Usually whenever I'm free I usually try to learn new technologies and improve my skills to stay updated in this fast-paced industry.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
