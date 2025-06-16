"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { gsap } from 'gsap';
import {Tilt} from 'react-tilt';
import { useEffect } from 'react';

export default function Navbar() {
  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.to('.nav-logo-dot', {
      scale: 1.2,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power2.inOut',
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    gsap.to('.hamburger-line-1', {
      rotate: isOpen ? 0 : 45,
      y: isOpen ? 0 : 8,
      duration: 0.3,
    });
    gsap.to('.hamburger-line-2', {
      opacity: isOpen ? 1 : 0,
      duration: 0.3,
    });
    gsap.to('.hamburger-line-3', {
      rotate: isOpen ? 0 : -45,
      y: isOpen ? 0 : -8,
      duration: 0.3,
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed w-full bg-gradient-to-r from-white/80 via-blue-50/80 to-white/80 z-50 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <motion.div
            className="nav-logo-dot w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"
            whileHover={{ scale: 1.3 }}
          ></motion.div>
          <span className="font-extrabold text-2xl text-gray-900 tracking-tight">
            <img src="/icons/devicon.png" alt="Dev360 Builders Logo" className='w-12 object-contain md:w-full h-8' />
          </span>
        </div>

        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Tilt key={item.name} options={{ max: 15, scale: 1.05 }}>
              <Link href={item.href}>
                <motion.div
                  whileHover={{
                    y: -4,
                    color: '#2563eb',
                    textShadow: '0 0 8px rgba(37, 99, 235, 0.5)',
                  }}
                  className="text-gray-700 font-semibold text-lg transition-colors"
                >
                  {item.name}
                </motion.div>
              </Link>
            </Tilt>
          ))}
        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all"
        >
          Get Started
        </motion.button>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex flex-col space-y 1.5">
            <span className="hamburger-line-1 w-6 h-0.5 bg-gray-900"></span>
            <span className="hamburger-line-2 w-6 h-0.5 bg-gray-900"></span>
            <span className="hamburger-line-3 w-6 h-0.5 bg-gray-900"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-white/95 backdrop-blur-sm mt-4 rounded-lg shadow-lg"
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className="block py-3 px-6 text-gray-700 font-semibold hover:bg-blue-50 transition-colors">
                {item.name}
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}