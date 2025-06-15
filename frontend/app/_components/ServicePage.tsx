"use client";

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ServicesHeader from './services/ServicesHeader';
import ServiceTabs from './services/ServiceTabs';
import ServiceItem from './services/ServiceItem';
import ServicesCTA from './services/ServicesCTA';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Full-Stack Development',
      description:
        'End-to-end web application development with modern frameworks like React, Next.js, Node.js, and databases.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-blue-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
      category: 'development',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android with React Native and Flutter.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-purple-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-gradient-to-r from-purple-500 to-purple-700',
      category: 'development',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description:
        'User-centered design solutions with wireframing, prototyping, and usability testing for optimal experiences.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-teal-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      color: 'bg-gradient-to-r from-teal-500 to-teal-700',
      category: 'design',
    },
    {
      id: 4,
      title: 'Graphic Design',
      description:
        'Brand identity, marketing materials, and digital assets that communicate your vision effectively.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-amber-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-gradient-to-r from-amber-500 to-amber-700',
      category: 'design',
    },
    {
      id: 5,
      title: 'Web3 Development',
      description:
        'Blockchain solutions, smart contracts, NFT marketplaces, and decentralized applications.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-700',
      category: 'emerging',
    },
    {
      id: 6,
      title: 'AI Development',
      description:
        'Custom AI solutions including machine learning models, natural language processing, and predictive analytics.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-rose-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-gradient-to-r from-rose-500 to-rose-700',
      category: 'emerging',
    },
    {
      id: 7,
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions including vulnerability assessments, penetration testing, and security audits.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-emerald-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: 'bg-gradient-to-r from-emerald-500 to-emerald-700',
      category: 'development',
    },
    {
      id: 8,
      title: 'DevOps & Cloud',
      description:
        'Infrastructure automation, CI/CD pipelines, and cloud solutions for scalable and reliable applications.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-cyan-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      ),
      color: 'bg-gradient-to-r from-cyan-500 to-cyan-700',
      category: 'development',
    },
  ];

  useEffect(() => {
    const blobs = [blobRef1.current, blobRef2.current, blobRef3.current];
    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        scale: `random(0.8, 1.2)`,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5,
      });
    });
  }, []);

  const filteredServices =
    activeTab === 'all'
      ? services
      : services.filter((service) => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          ref={blobRef1}
          className="absolute top-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></div>
        <div
          ref={blobRef2}
          className="absolute top-80 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></div>
        <div
          ref={blobRef3}
          className="absolute bottom-60 right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesHeader />
        <ServiceTabs onTabChange={setActiveTab} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceItem
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              index={index}
            />
          ))}
        </div>
        <ServicesCTA />
      </div>
    </div>
  );
}