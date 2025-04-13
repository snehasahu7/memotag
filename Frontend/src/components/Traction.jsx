import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from '../assets/impact.png'

const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-5xl font-bold text-[#7c3aed]">
      {count.toLocaleString()}
    </span>
  );
};

const Traction = ({darkmode, setdarkmode}) => {
  return (
    <div className={darkmode?"w-full bg-[#D6CBFF] py-5":"w-full bg-gray-100 py-5"}>
      <div className="container mx-auto px-4">
        <h2 className=" text-5xl font-bold text-gray-900 mb-8 text-center mt-20">Our Impact</h2>
        <div className="flex flex-col md:flex-row md:gap-8 items-center">
          {/* Left Side - Stats */}
          
          <div className="w-full md:w-1/2">
            
            
            {/* Stats Cards */}
            <div className="space-y-4">
              {/* Insights Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={darkmode?"bg-gray-100 p-4 rounded-lg shadow-md":"bg-white p-4 rounded-lg shadow-md"}
              >
                <div className="flex gap-4">
                  <svg className="w-10 h-10 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <Counter end={10000} />
                      <span className="text-xl font-semibold text-gray-900">Insights</span>
                    </div>
                    <p className="text-sm text-gray-600">Insights Collected</p>
                  </div>
                </div>
              </motion.div>

              {/* Network Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={darkmode?"bg-gray-100 p-4 rounded-lg shadow-md":"bg-white p-4 rounded-lg shadow-md"}
              >
                <div className="flex gap-4">
                  <svg className="w-10 h-10 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <Counter end={35000} />
                      <span className="text-xl font-semibold text-gray-900">Network</span>
                    </div>
                    <p className="text-sm text-gray-600">Hospitals & Patient Network</p>
                  </div>
                </div>
              </motion.div>

              {/* Lives Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={darkmode?"bg-gray-100 p-4 rounded-lg shadow-md":"bg-white p-4 rounded-lg shadow-md"}
              >
                <div className="flex gap-4">
                  <svg className="w-10 h-10 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <Counter end={500} />
                      <span className="text-xl font-semibold text-gray-900">Lives</span>
                    </div>
                    <p className="text-sm text-gray-600">Lives Impacted</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <motion.img 
              src={img}
              alt="MemoTag Impact"
              className="w-full h-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traction; 