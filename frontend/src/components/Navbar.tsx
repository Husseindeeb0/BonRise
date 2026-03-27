import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 glass-morphism shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0 flex items-center">
            <img src="/logo.png" alt="Logo" className="w-36 h-14" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-semibold transition-colors">Who We Are</a>
              <a href="#services" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
