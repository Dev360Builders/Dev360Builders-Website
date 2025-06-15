"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  color: string;
};

const teamMembers: TeamMember[] = [
  { 
    name: "Alex Morgan", 
    role: "CEO & Founder", 
    bio: "10+ years in software architecture. Passionate about blockchain and AI convergence.",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Sarah Chen", 
    role: "Lead Designer", 
    bio: "Design thinking advocate. Creates interfaces that blend aesthetics with functionality.",
    color: "from-purple-500 to-fuchsia-500"
  },
  { 
    name: "Marcus Johnson", 
    role: "CTO", 
    bio: "Full-stack expert. Believes in robust, scalable systems that stand the test of time.",
    color: "from-amber-500 to-orange-500"
  },
  { 
    name: "Elena Rodriguez", 
    role: "AI Research Lead", 
    bio: "Machine learning PhD. Builds intelligent systems that learn and adapt.",
    color: "from-emerald-500 to-teal-500"
  }
];

const TeamSection = () => {
  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader 
          title="Meet Our Dream Team"
          highlight="Dream Team"
          highlightColor="text-purple-400"
          description="Passionate experts dedicated to turning your vision into reality"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-70"
      animate={{
        background: [
          `linear-gradient(45deg, var(--tw-gradient-stops))`,
          `linear-gradient(135deg, var(--tw-gradient-stops))`,
          `linear-gradient(225deg, var(--tw-gradient-stops))`,
          `linear-gradient(315deg, var(--tw-gradient-stops))`,
          `linear-gradient(45deg, var(--tw-gradient-stops))`,
        ]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      style={{
        // @ts-expect-error
        "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to)`,
        "--tw-gradient-from": member.color.split(' ')[0].replace('from-', ''),
        "--tw-gradient-to": member.color.split(' ')[1].replace('to-', ''),
      }}
    />
    
    <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 h-full border border-gray-700 overflow-hidden">
      <div className="flex justify-center mb-6">
        <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32" />
      </div>
      
      <h3 className="text-2xl font-bold text-center mb-1">{member.name}</h3>
      <p className="text-center text-cyan-400 mb-4">{member.role}</p>
      <p className="text-gray-400 text-center">{member.bio}</p>
      
      <SocialLinks />
    </div>
  </motion.div>
);

const SocialLinks = () => (
  <div className="flex justify-center mt-6 space-x-4">
    <motion.a 
      whileHover={{ y: -5 }} 
      href="#" 
      className="bg-gray-700 p-2 rounded-full"
    >
      <span>🐦</span>
    </motion.a>
    <motion.a 
      whileHover={{ y: -5 }} 
      href="#" 
      className="bg-gray-700 p-2 rounded-full"
    >
      <span>💼</span>
    </motion.a>
    <motion.a 
      whileHover={{ y: -5 }} 
      href="#" 
      className="bg-gray-700 p-2 rounded-full"
    >
      <span>📱</span>
    </motion.a>
      </div>
);

export default TeamSection;