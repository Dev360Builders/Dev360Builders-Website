"use client";

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Dev360 Builders transformed our e-commerce platform, resulting in a 300% increase in conversions.",
    author: "Sarah Johnson",
    role: "CEO, RetailTech",
    avatar: "/avatar1.jpg"
  },
  {
    id: 2,
    quote: "The AI solution they developed exceeded our expectations and has become core to our operations.",
    author: "Michael Chen",
    role: "CTO, DataSystems",
    avatar: "/avatar2.jpg"
  },
  {
    id: 3,
    quote: "Their attention to detail in the UI/UX design process was exceptional. Our users love the new interface.",
    author: "Emily Rodriguez",
    role: "Product Lead, FinTech Inc",
    avatar: "/avatar3.jpg"
  }
];

const ProjectTestimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
  >
    <div className="mb-6 text-5xl text-cyan-400">&quot;</div>
    <p className="text-lg text-gray-300 mb-8">{testimonial.quote}</p>
    <div className="flex items-center">
      {/* <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 mr-4"></div> */}
      <div>
        <h4 className="font-bold">{testimonial.author}</h4>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

export default ProjectTestimonials;