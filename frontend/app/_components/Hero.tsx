"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);

  useEffect(() => {
    const blobs = [blobRef1.current, blobRef2.current, blobRef3.current];
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        scale: `random(0.8, 1.2)`,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5,
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div
          ref={blobRef1}
          className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></div>
        <div
          ref={blobRef2}
          className="absolute top-60 right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></div>
        <div
          ref={blobRef3}
          className="absolute top-80 right-20 w-80 h-80 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:py-40 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:w-1/2 mt-16 md:mt-0"
        >
          <TypeAnimation
            sequence={[
              'Building Digital Excellence',
              2000,
              'Crafting Tomorrow’s Solutions',
              2000,
              'Innovate with Dev360',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            repeat={Infinity}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 max-w-lg font-medium"
          >
            We craft cutting-edge digital solutions with expertise in full-stack development, AI integration, and blockchain technology.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all text-lg"
            >
              Start a Project
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                borderColor: '#3b82f6',
                color: '#3b82f6',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold transition-all text-lg"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-400 blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-gray-200 to-blue-100 border-2 border-dashed rounded-xl w-full h-96 md:h-[500px] overflow-hidden flex items-center justify-center">
              <motion.img
                src="https://images.unsplash.com/photo-1726137570714-68c4d227b6b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt="Hero Illustration"
                className="w-3/4 h-auto object-contain"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}