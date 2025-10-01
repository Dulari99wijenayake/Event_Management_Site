
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Event Horizon. All rights reserved.</p>
        <p className="text-sm mt-1">Your premier destination for finding and registering for events.</p>
      </div>
    </footer>
  );
};

export default Footer;
