"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServiceTabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'emerging', label: 'Emerging Tech' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="flex justify-center gap-1 md:gap-6 mb-16 text-sm md:text-base">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={` relative px-2 md:px-4 py-2 md:font-semibold text-gray-700 transition-colors text-sm md:textlg ${
            activeTab === tab.id ? 'text-blue-600' : 'hover:text-gray-900'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"
              layoutId="underline"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}