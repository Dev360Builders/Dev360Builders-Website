"use client";

import { motion } from 'framer-motion';
import ContactHero from './contact/ContactHero';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import ContactMap from './contact/ContactMap';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-12">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;