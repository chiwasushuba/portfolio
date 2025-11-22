import FadeIn from '@/components/animation/FadeIn';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hi, I'm Your Name
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex gap-4 justify-center">
            <Button size="lg">View My Work</Button>
            <Button size="lg" variant="outline">Contact Me</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
