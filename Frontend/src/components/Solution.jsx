import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "AI-Powered Monitoring",
    description: "Advanced AI algorithms track patient behavior patterns and detect early warning signs",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "Real-time Alerts",
    description: "Instant notifications for caregivers when unusual patterns are detected",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  {
    title: "Caregiver Support",
    description: "Comprehensive tools and resources to support caregivers in their daily tasks",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Data Analytics",
    description: "Detailed insights and trends to help improve care strategies",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const benefits = [
  {
    title: "Early Detection",
    value: "40%",
    description: "Earlier detection of behavioral changes"
  },
  {
    title: "Caregiver Relief",
    value: "60%",
    description: "Reduced caregiver stress and burnout"
  },
  {
    title: "Cost Savings",
    value: "35%",
    description: "Lower healthcare costs through prevention"
  },
  {
    title: "Quality of Life",
    value: "50%",
    description: "Improved patient quality of life"
  }
];

const trackingSteps = [
  {
    title: "Physical Tracking",
    steps: [
      {
        icon: (
          <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "Movement Monitoring",
        description: "Advanced sensors track daily movement patterns and activity levels"
      },
      {
        icon: (
          <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "Routine Analysis",
        description: "AI analyzes daily routines and detects deviations from normal patterns"
      },
      {
        icon: (
          <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: "Safety Alerts",
        description: "Immediate notifications for unusual movements or potential safety concerns"
      }
    ]
  },
  {
    title: "Cognitive Tracking",
    steps: [
      {
        icon: (
          <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        title: "Memory Assessment",
        description: "Regular cognitive exercises and memory tests to track changes"
      },
      {
        icon: (
          <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        title: "Pattern Recognition",
        description: "AI identifies changes in cognitive patterns and memory recall"
      },
      {
        icon: (
          <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: "Progress Tracking",
        description: "Detailed reports and insights on cognitive health progression"
      }
    ]
  }
];

const Solution = ({darkmode, setdarkmode}) => {
  return (
    <section className="py-20 relative overflow-hidden bg-violet-200">
     
      
      {/* Gradient Overlay */}
      <div className={darkmode?"absolute inset-0 bg-[#0E0B1A]":"absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-white"}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={darkmode?"text-4xl md:text-5xl font-bold mb-6 text-gray-200":"text-4xl md:text-5xl font-bold mb-6 text-gray-900"}
          >
            How MemoTag Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={darkmode?"text-xl text-gray-400 mb-8":"text-xl text-gray-600 mb-8"}
          >
            Comprehensive tracking and monitoring for both physical and cognitive health
          </motion.p>
        </motion.div>

        {/* Tracking Steps */}
        {trackingSteps.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-2xl font-bold mb-8 text-[#7c3aed] text-center"
            >
              {section.title}
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-6">
              {section.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 + index * 0.1
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className={darkmode?"backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100 bg-gray-300":"bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100"}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index * 0.1
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="text-xl font-bold mb-2 text-gray-900"
                  >
                    {step.title}
                  </motion.h4>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="text-sm text-gray-600"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={darkmode?"text-xl text-gray-400 mb-8":"text-xl text-gray-600 mb-8"}
          >
            Experience the power of comprehensive dementia care monitoring
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const ctaSection = document.querySelector('#cta-section');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            
            className="bg-[#7c3aed] text-white px-8 py-4 rounded-full text-lg font-medium 
                     hover:bg-[#6d28d9] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution; 