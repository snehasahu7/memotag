import React, { useState } from 'react';

const Navbar = ({darkmode, setdarkmode}) => {
  

  return (
    <nav className={`transition-colors duration-200 ${darkmode ? 'bg-[#0E0B1A]' : 'bg-violet-200'} border-b ${darkmode ? 'border-gray-800' : 'border-gray-100'}`}>
      <div className="container mx-auto px-4 overflow-x-hidden">
        <div className="flex items-center justify-between h-25">
          {/* Logo/Brand */}
          <a href="/" className={`text-2xl font-semibold ${darkmode ? 'text-white' : 'text-gray-900'}`}>
            MemoTag
          </a>

          {/* Navigation Links and Theme Toggle */}
          <div className="flex items-center space-x-6">
            <a href="#about" className={`${darkmode ? 'text-gray-300 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600'}`} style={{ fontSize: '1.3rem' }}>
              About
            </a>
            <button 
              onClick={()=>setdarkmode(!darkmode)}
              className={`p-2 focus:outline-none cursor-pointer ${darkmode ? 'text-gray-300 hover:text-violet-400' : 'text-gray-600 hover:text-violet-600'}`}
              aria-label="Toggle theme"
            >
              {darkmode? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="w-6 h-" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 