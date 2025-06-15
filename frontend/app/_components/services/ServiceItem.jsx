"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

export default function ServiceItem({ title, description, icon, color, index }) {
  const itemRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: index * 0.1, ease: 'power3.out' }
      );
    }
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      }}
      className="relative bg-white rounded-xl p-8 overflow-hidden transition-all duration-300"
    >
      <motion.div
        className="mb-6"
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className={`inline-block p-4 rounded-lg ${color.replace('to-br', 'to-r')} bg-opacity-10`}>
          {icon}
        </div>
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        className="text-gray-600 mb-6"
      >
        {description}
      </motion.p>
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundImage: color,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}
        whileTap={{ scale: 0.95 }}
        className="text-white px-5 py-2 rounded-lg font-medium"
        style={{ backgroundImage: color }}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}