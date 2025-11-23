'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="mb-12 px-12">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4">
              <div className="relative w-full h-64 md:h-[500px] rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
