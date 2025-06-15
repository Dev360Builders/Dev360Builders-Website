"use client";

import { motion, easeOut, easeInOut } from 'framer-motion';
import { useRef } from 'react';

const WorkTogether = () => {
  const constraintsRef = useRef(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut }
    }
  };
  
  const arrowVariants = {
    animate: {
      y: [0, 15, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: easeInOut
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-[90px] opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
      
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          ref={constraintsRef}
        >
          {/* Left column - Text content */}
          <div className="lg:w-1/2">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Let&apos;s Create Something <span className="text-blue-600">Extraordinary</span> Together
            </motion.h2>
            
            <motion.p 
              className="mt-6 text-xl text-gray-600 max-w-lg"
              variants={itemVariants}
            >
              Your vision, our expertise. Whether you need a stunning web presence, 
              a powerful mobile app, or cutting-edge AI solutions - we&apos;ve got you covered.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Project
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all"
              >
                Schedule a Call
              </motion.button>
            </motion.div>
            
            {/* Stats section */}
            <motion.div 
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              {[
                { value: "200+", label: "Projects" },
                { value: "15+", label: "Experts" },
                { value: "98%", label: "Satisfaction" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md"
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right column - Image with animation */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Floating image container */}
              <motion.div 
                className="relative z-10"
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-96 md:h-[500px] overflow-hidden" />
              </motion.div>
              
              {/* Floating elements around the image */}
              <motion.div 
                className="absolute -top-8 -right-8 bg-blue-500 w-24 h-24 rounded-2xl shadow-xl"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6, 
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-purple-500 w-20 h-20 rounded-full shadow-xl"
                animate={{ 
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5, 
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              />
              
              {/* Animated arrow pointing down */}
              <motion.div 
                className="absolute -bottom-24 left-1/2 transform -translate-x-1/2"
                variants={arrowVariants}
                animate="animate"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 text-blue-600"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
            
            {/* Draggable elements */}
            <motion.div 
              className="absolute top-32 -right-20 w-16 h-16 bg-yellow-400 rounded-full shadow-lg cursor-grab"
              drag
              dragConstraints={constraintsRef}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            
            <motion.div 
              className="absolute bottom-20 -left-20 w-20 h-20 bg-green-500 rounded-lg shadow-lg cursor-grab"
              drag
              dragConstraints={constraintsRef}
              whileDrag={{ rotate: 10, cursor: "grabbing" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </motion.div>
        
        {/* Floating tech badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {["NextJS", "Tailwind", "React", "Node", "AI", "Web3"].map((tech, index) => (
            <motion.div
              key={tech}
              className="bg-white px-6 py-3 text-black rounded-full shadow-md font-medium"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3 + index, 
                ease: "easeInOut",
                delay: index * 0.2
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;