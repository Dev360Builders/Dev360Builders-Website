"use client";

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 py-1 px-4 rounded-full inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            About Dev360 Builders
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Future</span>, One Innovation at a Time
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-800 mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We're a team of passionate creators, developers, and visionaries dedicated to transforming ideas into revolutionary digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl font-bold text-lg shadow-lg"
            >
              Meet Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-xl font-bold text-lg hover:bg-gray-700 transition-colors"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
        
        <HeroImage />
      </div>
    </div>
  );
};

const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative"
  >
    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 blur-2xl opacity-30"></div>
    <div className="relative bg-gray-200 border-2 border-dashed rounded-3xl w-full h-96 md:h-[500px] overflow-hidden" />
    
    <motion.div 
      className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 w-32 h-32 rounded-2xl shadow-2xl flex items-center justify-center"
      animate={{ 
        rotate: [0, 10, 0, -10, 0],
        y: [0, -15, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <span className="text-4xl font-bold">4+</span>
      <span className="text-sm ml-1">Years</span>
    </motion.div>
  </motion.div>
);

export default AboutHero;