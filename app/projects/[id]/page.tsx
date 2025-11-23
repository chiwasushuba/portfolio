import { notFound } from 'next/navigation';
import { getProjectById, getAllProjectIds } from '@/lib/projects-data';
import FadeIn from '@/components/animation/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return getAllProjectIds().map((id) => ({
    id: id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20 px-4">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <FadeIn>
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </FadeIn>

        {/* Project Header */}
        <FadeIn delay={0.1}>
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Project Images Carousel */}
        <FadeIn delay={0.2}>
          {project.images && project.images.length > 0 ? (
            <ProjectCarousel images={project.images} title={project.title} />
          ) : (
            <div className="w-full h-64 md:h-96 bg-secondary rounded-lg mb-12 flex items-center justify-center">
              <p className="text-muted-foreground">Project Screenshot</p>
            </div>
          )}
        </FadeIn>

        {/* Full Description */}
        <FadeIn delay={0.3}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Features */}
        <FadeIn delay={0.4}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Challenges */}
        <FadeIn delay={0.5}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges?.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Outcomes */}
        <FadeIn delay={0.6}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Outcomes & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.outcomes?.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">★</span>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Back to Projects */}
        <FadeIn delay={0.7}>
          <div className="text-center mt-12">
            <Link href="/#projects">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
