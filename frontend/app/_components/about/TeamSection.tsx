"use client";

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Link, LinkedinIcon, X } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  color: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
};

const teamMembers: TeamMember[] = [
  { 
    name: "Richard Winner Duvor", 
    role: "CEO & Founder", 
    bio: "6+ years in software architecture. Passionate about blockchain and AI convergence.",
    color: "from-blue-500 to-cyan-500",
    image: "/team/IMG_2488.JPEG",
    socials: {
      twitter: "X: https://x.com/dr_winner6",
      linkedin: "https://www.linkedin.com/in/richard-winner-duvor/",
      website: "https://richardduvor.com"
    }
  },
  { 
    name: "Alikamatu Osama", 
    role: "Senior Developer", 
    bio: "Design thinking advocate. Creates interfaces that blend aesthetics with functionality.",
    color: "from-purple-500 to-fuchsia-500",
    image: "/team/osama.jpeg",
    socials: {
      twitter: "https://twitter.com/alikamatuosama",
      linkedin: "https://linkedin.com/in/alikamatuosama",
      website: "https://portfolio-rust-xi-66.vercel.app/"
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        // @ts-expect-error: CSS custom properties are not typed in React style prop
        "--tw-gradient-stops": `var(--tw-gradient-from), var(--tw-gradient-to)`,
        "--tw-gradient-from": member.color.split(' ')[0].replace('from-', ''),
        "--tw-gradient-to": member.color.split(' ')[1].replace('to-', ''),
      }}
    />
    
    <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 h-full border border-gray-700 overflow-hidden">
      <div className="flex justify-center mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-700 shadow-lg"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-center mb-1">{member.name}</h3>
      <p className="text-center text-cyan-400 mb-4">{member.role}</p>
      <p className="text-gray-400 text-center">{member.bio}</p>
      
      <SocialLinks socials={member.socials} />
    </div>
  </motion.div>
);

const SocialLinks = ({ socials }: { socials: TeamMember['socials'] }) => (
  <div className="flex justify-center mt-6 space-x-4">
    {socials.twitter && (
      <motion.a 
        whileHover={{ y: -5 }} 
        href={socials.twitter} 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 p-2 rounded-full"
        aria-label="Twitter"
      >
        <span><X /></span>
      </motion.a>
    )}
    {socials.linkedin && (
      <motion.a 
        whileHover={{ y: -5 }} 
        href={socials.linkedin} 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 p-2 rounded-full"
        aria-label="LinkedIn"
      >
        <span><LinkedinIcon /></span>
      </motion.a>
    )}
    {socials.website && (
      <motion.a 
        whileHover={{ y: -5 }} 
        href={socials.website} 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 p-2 rounded-full"
        aria-label="Website"
      >
        <span><Link /></span>
      </motion.a>
    )}
  </div>
);

export default TeamSection;