"use client";

import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
        {/* Replace with your actual map embed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Our Location
            </h3>
            <p className="text-gray-600">
              123 Tech Street, San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap;