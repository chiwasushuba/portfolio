import FadeIn from '@/components/animation/FadeIn';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

export default function ProjectCard({ id, title, description, tags, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Link href={`/projects/${id}`}>
        <Card className="h-full hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </FadeIn>
  );
}
