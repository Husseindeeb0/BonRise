import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-accent-1 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 font-regular">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/logo.png" alt="BOnRise Logo" className="h-16 w-auto brightness-200" />
            <p className="leading-relaxed text-sm text-accent-2/80">
              Architecting high-performance digital infrastructures that empower businesses to achieve absolute ownership of their digital future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-secondary/20 hover:text-secondary transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-secondary/20 hover:text-secondary transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-primary">
              <li><a href="#home" className="hover:text-accent-2 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent-2 transition-colors">Who We Are</a></li>
              <li><a href="#services" className="hover:text-accent-2 transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-accent-2 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-primary">
              <li><a href="#services" className="hover:text-accent-2 transition-colors">Custom Web Solutions</a></li>
              <li><a href="#services" className="hover:text-accent-2 transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-accent-2 transition-colors">UX/UI Excellence</a></li>
              <li><a href="#services" className="hover:text-accent-2 transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-primary">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:bonrise50@gmail.com" className="hover:text-accent-2 transition-colors">bonrise50@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+96170063612" className="hover:text-accent-2 transition-colors">+961 70 063 612</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-primary/30" />

        {/* Copyright */}
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-accent-1 text-sm">
            © {new Date().getFullYear()} BOnRise Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
