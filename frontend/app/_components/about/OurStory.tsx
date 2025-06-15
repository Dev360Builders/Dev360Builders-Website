"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const timelineData = [
  { year: 2020, title: "Company Founded", description: "Started in a small garage with just 3 developers passionate about creating digital solutions." },
  { year: 2021, title: "First Major Client", description: "Landed our first enterprise client, expanding our team to 10 members." },
  { year: 2022, title: "Web3 Division Launch", description: "Expanded into blockchain and Web3 development, adding 5 specialists to our team." },
  { year: 2023, title: "AI Lab Established", description: "Created dedicated AI research division to develop cutting-edge solutions." },
  { year: 2024, title: "Global Recognition", description: "Featured in TechCrunch as one of the fastest growing dev companies." },
];

const OurStory = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader 
          title="Our Journey"
          highlight="Journey"
          highlightColor="text-cyan-400"
          description="From humble beginnings to industry innovators - our story of growth and transformation"
        />
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600 transform -translate-x-1/2"></div>
          
          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={item.year}
                year={item.year}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ year, title, description, index }: { year: number; title: string; description: string; index: number }) => (
  <motion.div 
    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
  >
    <div className="md:w-1/2 mb-8 md:mb-0">
      <motion.div 
        className="p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
        whileHover={{ y: -10 }}
      >
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    </div>
    
    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg z-10">
      <span className="text-xl font-bold">{year}</span>
    </div>
    
    <div className="md:w-1/2"></div>
  </motion.div>
);

export default OurStory;