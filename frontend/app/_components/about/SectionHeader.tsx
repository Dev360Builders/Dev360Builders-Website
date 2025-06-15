"use client";

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight: string;
  highlightColor: string;
  description: string;
}

const SectionHeader = ({ title, highlight, highlightColor, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-20">
      <motion.h2 
        className="text-3xl text-black md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title.split(highlight)[0]} <span className={highlightColor}>{highlight}</span>{title.split(highlight)[1]}
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-800 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;