import FadeIn from '@/components/animation/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with a love for building elegant solutions to complex problems. 
                With expertise in modern web technologies, I create responsive, user-friendly applications 
                that make a difference. When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the developer community.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
