'use client'; // <--- Essential for Next.js App Router

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils'; // Optional: see Step C below

type Direction = 'up' | 'down' | 'left' | 'right';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  fullWidth?: boolean;
}

export default function FadeIn({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up', 
  fullWidth = false
}: FadeInProps) {
  
  // 1. Define direction logic
  const directionOffset: Record<Direction, { x: number; y: number }> = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  // 2. Define variants
  const variants = {
    hidden: { 
      opacity: 0, 
      ...directionOffset[direction] 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75] as [number, number, number, number], // Cubic bezier for smooth feel
      }
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Triggers when 50px into view
      variants={variants}
      className={cn(fullWidth ? "w-full" : "w-auto", className)}
    >
      {children}
    </motion.div>
  );
}