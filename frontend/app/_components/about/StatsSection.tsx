"use client";

import { motion } from 'framer-motion';

type Stat = {
  value: number;
  label: string;
  suffix: string;
};

const stats: Stat[] = [
  { value: 200, label: "Projects Completed", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 15, label: "Team Experts", suffix: "+" },
  { value: 24, label: "Support Hours", suffix: "/7" }
];

const StatsSection = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ stat, index }: { stat: Stat; index: number }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
      <span>
        {stat.value}
        {stat.suffix}
      </span>
    </div>
    <p className="text-xl text-gray-400">{stat.label}</p>
  </motion.div>
);

export default StatsSection;