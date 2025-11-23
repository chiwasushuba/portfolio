import FadeIn from '@/components/animation/FadeIn';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  delay?: number;
}

export default function ProjectCard({ id, title, description, tags, thumbnail, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-2 hover:border-primary/50 group ">
        <Link href={`/projects/${id}`} className="block h-full">
          {thumbnail && (
            <div className="relative w-full h-56 bg-secondary overflow-hidden">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Link>
      </Card>
    </FadeIn>
  );
}
