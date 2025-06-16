"use client";

import { motion } from 'framer-motion';
import ProjectHero from './projects/ProjectHero';
import ProjectGrid from './projects/ProjectGrid';
import ProjectCategories from './projects/ProjectCategories';
import ProjectTestimonials from './projects/ProjectTestimonials';
import ProjectCTA from './projects/ProjectCTA';

const ProjectShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 overflow-hidden">
      <AnimatedBackground />
      
      <ProjectHero />
      <ProjectCategories />
      <ProjectGrid />
      <ProjectTestimonials />
      <ProjectCTA />
    </div>
  );
};

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-blue-500/10"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 30 + 10}px`,
          height: `${Math.random() * 30 + 10}px`,
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, Math.random() * 60 - 30, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10 + Math.random() * 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default ProjectShowcase;