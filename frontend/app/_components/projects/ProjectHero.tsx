"use client";

import { motion } from 'framer-motion';

const ProjectHero = () => {
  return (
    <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Innovation
            </span> in Action
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our curated collection of projects that demonstrate our technical expertise and creative problem-solving.
          </motion.p>
        </motion.div>

        <HeroProjectShowcase />
      </div>
    </section>
  );
};

const HeroProjectShowcase = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.7, duration: 0.7 }}
    className="relative"
  >
    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20"></div>
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <motion.img
          src="/projects/mint.png"
          alt="Project Showcase"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">MintedIn</h3>
            <p className="text-gray-600">Next.js, Node.js, Motoko, Web3</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            View Case Study
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectHero;