import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Signup', path: '/signup' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-white/80 backdrop-blur-xl shadow-lg border-b border-primary/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo Section */}
          <Link to="/" className="shrink-0 flex items-center group">
            <img 
              src="/logo.png" 
              alt="BonRise Logo" 
              className={`w-40 h-auto transition-all duration-500 ${
                !scrolled && !isOpen ? 'brightness-10 invert' : ''
              }`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-black transition-all duration-300 relative group uppercase tracking-[0.2em] ${
                    scrolled ? 'text-primary' : 'text-neutral hover:text-secondary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-4 right-4 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                    scrolled ? 'bg-secondary' : 'bg-white'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-all rounded-xl border ${
                scrolled || isOpen
                  ? 'text-primary bg-primary/5 border-primary/10'
                  : 'text-white bg-white/5 border-white/20'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white backdrop-blur-3xl border-b border-primary/10 overflow-hidden shadow-2xl"
          >
            <div className="px-8 pt-8 pb-12 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-4 text-xl font-black text-primary hover:text-secondary hover:bg-secondary/5 rounded-2xl transition-all uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
