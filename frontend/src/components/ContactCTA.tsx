import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 blur-3xl -mr-48 -mt-48 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-1 opacity-10 blur-3xl -ml-48 -mb-48 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-20 rounded-[3rem] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter">
              Ready to <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-accent-2">Rise Above</span>?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-accent-2/80 max-w-2xl mx-auto mb-10 md:mb-16 font-light">
              Stop settling for basic. Give your business the digital specialness it deserves and watch it grow beyond expectations.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-10 md:mb-16">
              <a 
                href="tel:+96170063612" 
                className="group flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-center sm:text-left gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-black text-secondary uppercase tracking-[0.2em] mb-1 opacity-70">Call Us</p>
                    <p className="text-xl sm:text-2xl font-black text-white tracking-tighter shrink-0">+961 70 063 612</p>
                  </div>
                </div>
                <ArrowRight className="hidden sm:block text-white/20 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
              </a>

              <a 
                href="mailto:bonrise50@gmail.com" 
                className="group flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-center sm:text-left gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-1/20 rounded-xl flex items-center justify-center text-accent-1 shrink-0">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] sm:text-xs font-black text-accent-1 uppercase tracking-[0.2em] mb-1 opacity-70">Email Us</p>
                    <p className="text-xl sm:text-2xl font-black text-white tracking-tighter truncate">bonrise50@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="hidden sm:block text-white/20 group-hover:text-accent-1 group-hover:translate-x-2 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
