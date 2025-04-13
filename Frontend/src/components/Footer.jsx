import React from 'react';

const Footer = ({darkmode, setdarkmode}) => {
  return (
    <footer className={darkmode?"bg-[#0E0B1A] border-t border-gray-100":"bg-violet-200 border-t border-gray-100"}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className={darkmode?"text-xl font-semibold text-white mb-2":"text-xl font-semibold text-gray-900 mb-2"}>MemoTag</h3>
          <p className={darkmode?"text-gray-100 text-sm mb-4":"text-gray-600 text-sm mb-4"}>
            Smart wearable technology for enhanced dementia care
          </p>
          <p className={darkmode?"text-gray-400 text-sm":"text-gray-500 text-sm"}>
            © {new Date().getFullYear()} MemoTag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 