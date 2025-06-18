"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from "@emailjs/browser";

type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

type PricingCardProps = {
  plan: Plan;
  index: number;
  hoveredPlan: string | null;
  setHoveredPlan: (id: string | null) => void;
  billingCycle: 'monthly' | 'annual';
  onSelect: (plan: Plan) => void;
};

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [popupPlan, setPopupPlan] = useState<Plan | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$499' : '$4,999',
      period: billingCycle === 'monthly' ? 'per month' : 'per year (save 15%)',
      description: 'Perfect for small projects and startups',
      features: [
        'Up to 50 hours/month',
        '1 dedicated developer',
        'Basic support',
        'Weekly updates',
        'Small project scope'
      ],
      cta: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$1,999' : '$19,999',
      period: billingCycle === 'monthly' ? 'per month' : 'per year (save 15%)',
      description: 'For growing businesses with more complex needs',
      features: [
        'Up to 200 hours/month',
        '3-5 person team',
        'Priority support',
        'Daily updates',
        'API integrations',
        'UI/UX design'
      ],
      cta: 'Choose Plan',
      featured: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored to your needs',
      description: 'For large organizations with custom requirements',
      features: [
        'Unlimited hours',
        'Dedicated team',
        '24/7 support',
        'Account manager',
        'Custom integrations',
        'Advanced security',
        'Performance optimization'
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6" id='pricing'>
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

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Pricing Plans
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black"
          >
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transparent</span> Pricing
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your business needs. Scale up or down as needed.
          </motion.p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white rounded-full p-1.5 shadow-sm border border-gray-200">
            <div className="flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Annual Billing (15% off)
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              hoveredPlan={hoveredPlan}
              setHoveredPlan={setHoveredPlan}
              billingCycle={billingCycle}
              onSelect={setPopupPlan}
            />
          ))}
        </div>

        {/* Plan Popup */}
        {popupPlan && (
          <PlanPopup
            plan={popupPlan}
            onClose={() => setPopupPlan(null)}
          />
        )}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual contracts."
              },
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. We'll prorate the difference."
              },
              {
                question: "Is there a free trial available?",
                answer: "We do not offer free trials, but we provide a 14-day money-back guarantee on all plans."
              },
              {
                question: "How are extra hours billed?",
                answer: "Additional hours are billed at $120/hour for Starter, $95/hour for Professional, and custom rates for Enterprise."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-lg mb-2 text-black">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PricingCard = ({
  plan,
  index,
  hoveredPlan,
  setHoveredPlan,
  billingCycle,
  onSelect,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHoveredPlan(plan.id)}
      onHoverEnd={() => setHoveredPlan(null)}
      className={`relative h-full ${plan.featured ? 'md:-mt-6' : ''}`}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <motion.div
        animate={{
          y: hoveredPlan === plan.id ? -10 : 0,
          scale: hoveredPlan === plan.id ? 1.03 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`h-full flex flex-col border rounded-2xl overflow-hidden ${
          plan.featured
            ? 'border-blue-500 shadow-xl bg-gradient-to-b from-white to-blue-50'
            : 'border-gray-200 bg-white shadow-md'
        }`}
      >
        <div className="p-8">
          <h3 className={`text-2xl font-bold mb-2 ${
            plan.featured ? 'text-blue-600' : 'text-gray-900'
          }`}>
            {plan.name}
          </h3>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          
          <div className="mb-8">
            <div className="flex items-end">
              <span className={`text-4xl font-bold ${
                plan.featured ? 'text-blue-600' : 'text-gray-900'
              }`}>
                {plan.price}
              </span>
              {plan.price !== 'Custom' && (
                <span className="text-gray-500 ml-2 mb-1">{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3 px-6 rounded-lg font-bold ${
              plan.featured
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => onSelect(plan)}
          >
            {plan.cta}
          </motion.button>
        </div>
        
        <div className="border-t border-gray-200 p-8 bg-gray-50 flex-grow">
          <h4 className="font-medium text-gray-900 mb-4">What&apos;s included:</h4>
          <ul className="space-y-3">
            {plan.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start">
                <svg
                  className={`h-5 w-5 mr-2 ${
                    plan.featured ? 'text-blue-500' : 'text-gray-400'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

type PlanPopupProps = {
  plan: Plan;
  onClose: () => void;
};

const PlanPopup = ({ plan, onClose }: PlanPopupProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_5sqxpy8",      // Replace with your EmailJS service ID
        "template_bfx0s7n",     // Replace with your EmailJS template ID
        {
          plan: plan.name,
          email,
          name,
          company,
          message,
        },
        "0E9EKKrJj2hudDDBG"       // Replace with your EmailJS public key
      );
      setSent(true);
    } catch (err) {
      alert("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Buy {plan.name} Plan</h2>
        {sent ? (
          <div className="text-green-600 font-semibold">Thank you! We will contact you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded px-3 py-2"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Company (optional)"
              className="w-full border rounded px-3 py-2"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
            <textarea
              placeholder="Additional Message"
              className="w-full border rounded px-3 py-2"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={3}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold w-full"
              disabled={sending}
            >
              {sending ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PricingPage;