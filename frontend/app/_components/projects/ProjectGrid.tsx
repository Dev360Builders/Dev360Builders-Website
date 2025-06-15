"use client";

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Scalable online store with custom CMS and payment integration",
    tags: ["Next.js", "Node.js", "MongoDB"],
    category: "web",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    description: "AI-powered workout tracker with personalized recommendations",
    tags: ["React Native", "Firebase", "TensorFlow"],
    category: "mobile",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "NFT Marketplace",
    description: "Decentralized platform for digital art trading",
    tags: ["Solidity", "IPFS", "React"],
    category: "web3",
    image: "/project3.jpg"
  },
  {
    id: 4,
    title: "Chatbot Platform",
    description: "Enterprise-grade conversational AI solution",
    tags: ["Python", "NLP", "AWS"],
    category: "ai",
    image: "/project4.jpg"
  },
  {
    id: 5,
    title: "Banking Dashboard",
    description: "Modern financial management interface",
    tags: ["Figma", "React", "D3.js"],
    category: "design",
    image: "/project5.jpg"
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "Real-time data visualization platform",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    category: "web",
    image: "/project6.jpg"
  },
];

const ProjectGrid = () => {
  return (
    <section className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;