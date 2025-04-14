import React from 'react';
import { motion } from 'framer-motion';
import heroSvg from '../assets/hero.svg';

const Hero = ({darkmode, setdarkmode}) => {
  return (
    <section className={`transition-colors duration-200 ${darkmode?"min-h-screen flex items-center bg-[#2B2740]":" min-h-screen flex items-center bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={darkmode?"text-4xl md:text-7xl lg:text-6xl font-bold mb-6 text-[#D6CBFF]":"text-4xl md:text-7xl lg:text-6xl font-bold mb-6 text-[#7c3aed]"}
            >
              Next-Gen Dementia Care with AI Precision
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={darkmode?"text-xl md:text-2xl mb-8 max-w-2xl text-white":"text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl"}
            >
              Revolutionizing dementia care with AI-powered monitoring and support for caregivers and patients.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
              Get Started
            </motion.button>
          </div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-first md:order-last flex justify-center items-center h-full"
          >
            <motion.img
              src={heroSvg}
              alt="MemoTag Illustration"
              className="w-[120%] max-w-5xl mx-auto"
              animate={{ 
                y: [0, -10, 0] 
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 