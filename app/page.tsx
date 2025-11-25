import React from 'react'

import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { ThemeToggle } from '@/components/theme-toggle';
import Navigation from '@/components/navigation';
import { StarfieldAnimation } from '@/components/animation/Star-field';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="animated-gradient-bg" />
      <div className="relative z-10">
        <Navigation />
        <ThemeToggle />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <StarfieldAnimation />
    </main>
  );
}