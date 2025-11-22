import FadeIn from '@/components/animation/FadeIn';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations. Let's connect!
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">Email Me</Button>
            <Button size="lg" variant="outline">LinkedIn</Button>
            <Button size="lg" variant="outline">GitHub</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
