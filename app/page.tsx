import React from 'react'

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { ThemeToggle } from '@/components/theme-toggle';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}