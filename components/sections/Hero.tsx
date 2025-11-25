import FadeIn from '@/components/animation/FadeIn';
import TypeWriter from '@/components/animation/TypeWriter';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-3xl mx-auto text-center md:text-left space-y-8">

        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hi, I&apos;m{" "}
            <TypeWriter text="Joshua Esleta" delay={500} speed={80} />
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg md:text-xl text-muted-foreground">
            Full Stack Developer
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl">
            I specialize in building dynamic and responsive applications using
            modern web technologies. Let’s build something amazing together.
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Resume.pdf" download="Resume.pdf">Resume</a>
            </Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
