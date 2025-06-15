"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

type Value = {
  title: string;
  description: string;
  icon: string;
};

const values: Value[] = [
  { 
    title: "Innovation", 
    description: "We push boundaries and explore new technologies to deliver cutting-edge solutions.",
    icon: "💡"
  },
  { 
    title: "Excellence", 
    description: "Quality is non-negotiable. We strive for perfection in every line of code.",
    icon: "✨"
  },
  { 
    title: "Collaboration", 
    description: "Great things happen when diverse minds work together towards a common goal.",
    icon: "🤝"
  },
  { 
    title: "Integrity", 
    description: "We build trust through transparency, honesty, and ethical practices.",
    icon: "🔒"
  }
];

const CoreValues = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="Our Core Values"
          highlight="Core Values"
          highlightColor="text-amber-400"
          description="The principles that guide everything we do"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ value, index }: { value: Value; index: number }) => (
  <motion.div
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      y: -15,
      background: "linear-gradient(45deg, #1e3a8a, #6d28d9)",
      transition: { duration: 0.3 }
    }}
  >
    <div className="text-5xl mb-4">{value.icon}</div>
    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
    <p className="text-gray-400">{value.description}</p>
  </motion.div>
);

export default CoreValues;