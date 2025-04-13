
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CTA = ({darkmode, setdarkmode}) => {
const [email, setEmail] = useState('');
const [status, setStatus] = useState('idle'); // idle, loading, success, error
const [waitlistCount, setWaitlistCount] = useState(0);

// Fetch and log current waitlist
const fetchWaitlist = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/waitlist');
    const data = await response.json();
    
    console.log('\n=== Current Waitlist Status ===');
    console.log('Total Subscribers:', data.emails.length);
    console.log('Emails:');
    data.emails.forEach((email, index) => {
      console.log(`${index + 1}. ${email}`);
    });
    console.log('------------------------\n');
    
    setWaitlistCount(data.emails.length);
  } catch (error) {
    console.error('Error fetching waitlist:', error);
  }
};


useEffect(() => {
  fetchWaitlist();
}, []);

const handleWaitlistSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');
  
  try {
    const response = await fetch('http://localhost:3001/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('\nSuccessfully joined waitlist!');
      console.log('Email:', email);
      console.log('Signup time:', data.data.signup_date);
      
      
      await fetchWaitlist();
      
      setStatus('success');
      setEmail('');
    } else {
      console.log('\n Failed to join waitlist');
      console.log('Error:', data.error);
      console.log('Details:', data.details);
      setStatus('error');
    }
    
    setTimeout(() => setStatus('idle'), 3000);
  } catch (error) {
    console.error('\n Error:', error);
    setStatus('error');
    setTimeout(() => setStatus('idle'), 3000);
  }
};

  return (
    <section id="cta-section" className="relative py-24 overflow-x-hidden">
      {/* Background Pattern */}
      <div className={darkmode?"absolute inset-0 bg-gray-400":"absolute inset-0 bg-gradient-to-br from-purple-50 to-white"}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #7c3aed15 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}/>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Dementia Care with MemoTag
            </h2>
            <p className={darkmode?"text-lg text-white mb-12 max-w-2xl mx-auto":"text-lg text-gray-600 mb-12 max-w-2xl mx-auto"}>
              Get early access to our revolutionary smart wearable device and app. Be among the ones to provide enhanced care and peace of mind for your loved ones.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleWaitlistSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                required
                disabled={status === 'loading' || status === 'success'}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-200
                  ${status === 'loading' ? 'bg-purple-400 cursor-wait' :
                    status === 'success' ? 'bg-green-500' :
                    status === 'error' ? 'bg-red-500' :
                    'bg-purple-600 hover:bg-purple-700'}`}
              >
                {status === 'loading' ? 'Joining...' :
                 status === 'success' ? 'Joined!' :
                 status === 'error' ? 'Try Again' :
                 'Get Early Access'}
              </motion.button>
            </div>
            
            {/* Status Messages */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: status === 'idle' ? 0 : 1,
                y: status === 'idle' ? 10 : 0
              }}
              className="mt-4 text-sm"
            >
              {status === 'success' && (
                <p className="text-green-600">
                  ✓ You're on the list! We'll notify you when MemoTag launches.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600">
                  × Oops! Please try again or contact support.
                </p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTA; 