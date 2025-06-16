"use client";

import { motion } from 'framer-motion';
import AboutHero from './about/AboutHero';
import OurStory from './about/OurStory';
import TeamSection from './about/TeamSection';
import CoreValues from './about/CoreValues';
import AboutCTA from './about/AboutCTA';

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden" id='about'>
      <FloatingParticles />
      
      <AboutHero />
      <OurStory />
      <TeamSection />
      <CoreValues />
      <AboutCTA />
    </div>
  );
};

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-blue-500/10"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 20 + 5}px`,
          height: `${Math.random() * 20 + 5}px`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 40 - 20, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default AboutPage;