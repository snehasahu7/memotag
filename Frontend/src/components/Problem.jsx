import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  {
    title: "Global Impact",
    value: "55M+",
    description: "People living with dementia worldwide",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: "Annual Cost",
    value: "$1.3T",
    description: "Global economic burden of dementia care",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Late Diagnosis",
    value: "75%",
    description: "Cases diagnosed in moderate to severe stages",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Care Gap",
    value: "70%",
    description: "Lack adequate monitoring systems",
    icon: (
      <svg className="w-12 h-12 text-[#7c3aed] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  }
];

const growthData = [
  { year: '2020', cases: 55 },
  { year: '2030', cases: 78 },
  { year: '2040', cases: 115 },
  { year: '2050', cases: 139 }
];

const regionalData = [
  { region: 'Asia Pacific', percentage: 65 },
  { region: 'Europe', percentage: 45 },
  { region: 'Americas', percentage: 35 },
  { region: 'Africa', percentage: 25 }
];

const Problem = ({darkmode, setdarkmode}) => {
  return (
    <section className={darkmode?"py-20 bg-gray-500":"py-20 bg-gray-50"}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.2
            }}
            className={darkmode?"text-4xl md:text-6xl font-bold mb-6 text-[#0E0B1A] ":" text-4xl md:text-6xl font-bold mb-6 text-gray-900"}
          >
            The Growing Challenge of Dementia Care
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.4
            }}
            className={darkmode?"text-xl text-white mb-8":"text-xl text-gray-600 mb-8"}
          >
            As our global population ages, the impact of dementia grows exponentially, 
            creating an urgent need for innovative care solutions.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className={darkmode?"p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-[#2B2740]":"bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + index * 0.1
                }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="text-xl font-bold mb-2 text-[#7c3aed]"
              >
                {stat.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={darkmode?"text-3xl font-bold mb-2 text-white":"text-3xl font-bold mb-2 text-gray-900"}
              >
                {stat.value}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className={darkmode?"text-sm text-gray-100":"text-sm text-gray-600"}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className={darkmode?"bg-gray-300 p-6 rounded-2xl shadow-lg":"bg-white p-6 rounded-2xl shadow-lg"}
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-xl font-bold mb-4 text-gray-900 text-center"
            >
              Projected Growth (Millions)
            </motion.h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cases" 
                    stroke="#7c3aed" 
                    strokeWidth={3}
                    dot={{ fill: '#7c3aed', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-sm text-gray-600 text-center mt-4"
            >
              Source: WHO projections
            </motion.p>
          </motion.div>

          {/* Regional Impact Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className={darkmode?"bg-gray-300 p-6 rounded-2xl shadow-lg":"bg-white p-6 rounded-2xl shadow-lg"}
          >
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-xl font-bold mb-4 text-gray-900 text-center"
            >
              Regional Impact (%)
            </motion.h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="region" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill="#7c3aed"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={darkmode?"text-xl text-white":"text-xl text-gray-600"}
          >
            Without innovative solutions and proper care systems, the growing impact of dementia 
            will overwhelm healthcare systems and affect millions of families worldwide.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem; 