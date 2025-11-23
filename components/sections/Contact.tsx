import FadeIn from '@/components/animation/FadeIn';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-30 px-4 bg-secondary/30">
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
            <Button size="lg" asChild>
              <a href="mailto:joshua11084@gmail.com">Email Me</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/joshua-james-esleta-67a236287/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/chiwasushuba" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
