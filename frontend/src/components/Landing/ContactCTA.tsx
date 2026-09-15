import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-primary">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary opacity-10 blur-3xl -mr-40 -mt-40 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-1 opacity-10 blur-3xl -ml-40 -mb-40 rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-10 md:p-14 rounded-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3.5 tracking-tight">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent-2">Rise Above</span>?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-accent-2/80 max-w-xl mx-auto mb-8 md:mb-10 font-normal leading-relaxed">
              Stop settling for basic. Give your business the digital specialness it deserves and watch it grow beyond expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {/* Call Us Card */}
              <div className="flex flex-col p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-0.5 opacity-80">Call Us</p>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">Direct Support</h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    { num: "+961 70 063 612", tel: "+96170063612" },
                    { num: "+961 76 132 524", tel: "+96176132524" }
                  ].map((phone) => (
                    <a 
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="group flex items-center justify-between p-3 sm:p-3.5 bg-white/5 border border-white/5 rounded-xl hover:bg-secondary/10 hover:border-secondary/20 transition-all"
                    >
                      <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-secondary transition-colors">
                        {phone.num}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Us Card */}
              <a 
                href="mailto:bonrise50@gmail.com" 
                className="group flex flex-col justify-between p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-center sm:text-left gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-3.5 overflow-hidden">
                  <div className="w-11 h-11 bg-accent-1/20 rounded-xl flex items-center justify-center text-accent-1 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[9px] font-black text-accent-1 uppercase tracking-[0.2em] mb-0.5 opacity-80">Email Us</p>
                    <p className="text-base sm:text-lg font-bold text-white tracking-tight truncate">bonrise50@gmail.com</p>
                  </div>
                </div>
                <div className="mt-auto hidden sm:flex items-center justify-between text-white/50 group-hover:text-accent-1 transition-colors text-xs font-semibold uppercase tracking-wider pt-2 border-t border-white/5">
                  <span>Get in touch via email</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <ArrowRight className="sm:hidden mx-auto text-white/30 group-hover:text-accent-1 transition-all w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { ContactCTA };
