"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

export default function ServicesCTA() {
  const ctaRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="mt-24 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div ref={ctaRef} className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Let’s discuss how our cutting-edge solutions can help you achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Start a Project
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              borderColor: '#ffffff',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-100 text-white px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Schedule a Call
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}