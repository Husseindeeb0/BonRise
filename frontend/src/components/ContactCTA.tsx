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
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Ready to <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-accent-2">Rise Above</span>?
            </h2>
            <p className="text-xl md:text-2xl text-accent-2 max-w-2xl mx-auto mb-16 font-light">
              Stop settling for basic. Give your business the digital specialness it deserves and watch it grow beyond expectations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <a 
                href="tel:+96170063612" 
                className="group flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-left"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-2xl font-bold text-white tracking-tight">+961 70 063 612</p>
                  </div>
                </div>
                <ArrowRight className="text-white/20 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
              </a>

              <a 
                href="mailto:hello@bonrise.com" 
                className="group flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-left"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent-1/20 rounded-xl flex items-center justify-center text-accent-1">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-accent-1 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-2xl font-bold text-white tracking-tight">bonrise50@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="text-white/20 group-hover:text-accent-1 group-hover:translate-x-2 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
