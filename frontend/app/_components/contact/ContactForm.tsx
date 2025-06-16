'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
        form.current?.reset();
      }, (error) => {
        console.log(error.text);
        setIsError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white text-black rounded-2xl shadow-xl p-8 border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
      
      {isSuccess ? (
        <div className="p-4 mb-6 rounded-lg bg-green-100 text-green-800">
          Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
        </div>
      ) : isError ? (
        <div className="p-4 mb-6 rounded-lg bg-red-100 text-red-800">
          Oops! Something went wrong. Please try again or contact us directly at hello@dev360builders.com
        </div>
      ) : null}

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="First Name"
            name="first_name"
            type="text"
            required
          />
          <FormInput
            label="Last Name"
            name="last_name"
            type="text"
            required
          />
        </div>
        
        <FormInput
          label="Email"
          name="email"
          type="email"
          required
        />
        
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
        />
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Project Estimate">Project Estimate</option>
            <option value="Partnership">Partnership</option>
            <option value="Careers">Careers</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

const FormInput = ({ label, name, type, required = false }: { label: string; name: string; type: string; required?: boolean }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      required={required}
    />
  </div>
);

export default ContactForm;
