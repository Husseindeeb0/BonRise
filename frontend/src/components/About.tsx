import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, TrendingUp, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Fortress",
      description: "Building owned platforms that safeguard your brand's future."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Market Authority",
      description: "Projecting the professional image your excellence deserves."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Growth",
      description: "Systems that evolve with your expanding business vision."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Absolute Control",
      description: "Complete ownership of your client relationships and data."
    }
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10 text-center lg:text-left text-about-description">
              <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-secondary uppercase bg-secondary/10 rounded-lg border border-secondary/20">
                Company Profile
              </span>
              <h3 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1] tracking-tight">
                Who We <span className="text-secondary italic font-serif leading-none text-5xl md:text-7xl">Are</span>
              </h3>
              <div className="space-y-6 text-lg md:text-xl text-primary/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Upon partnering with the <span className="text-primary font-bold">BOnRise</span> team, our clients are equipped with a comprehensive suite of digital strategies and high-performance software designed to optimize and expand their operations, empowering them to achieve sustainable growth in an increasingly competitive digital world.
                </p>
                <p>
                  We believe that a professional online infrastructure is the key to unlocking the true potential of any business. We help our clients solve their biggest bottleneck by transitioning them from a 
                  <span className="text-secondary font-bold"> mere online presence </span> 
                  to 
                  <span className="text-primary font-bold"> absolute digital ownership</span>, ensuring they rise above the competition and dominate their space.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative">
              {/* Massive Decorative Quote Mark */}
              <div className="absolute -top-12 -left-8 text-[12rem] text-secondary/10 font-serif leading-none select-none">“</div>
              
              <div className="relative p-10 md:p-14 bg-white/40 backdrop-blur-xl border-l-[6px] border-secondary shadow-[0_30px_60px_rgba(3,4,94,0.05)] rounded-r-3xl">
                <blockquote className="text-2xl md:text-4xl font-black text-primary leading-[1.2] mb-12 tracking-tight">
                  "Your website is the employee that <span className="text-secondary">never sleeps</span>, the salesman that <span className="text-secondary">never rests</span>, and the first impression that <span className="text-secondary">lasts forever</span>."
                </blockquote>
                
                <div className="flex items-center gap-6 border-t border-primary/5 pt-10">
                  <div>
                    <div className="font-black text-primary text-2xl tracking-tighter uppercase">BOnRise Strategy</div>
                    <div className="flex items-center gap-2 mt-2">
                       <span className="h-[2px] w-8 bg-secondary"></span>
                       <span className="text-[10px] text-secondary font-black uppercase tracking-[0.3em]">Elevating Local Business</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
            {features.map((f, i) => (
                <div key={i} className="p-6 bg-accent-2/5 rounded-2xl border border-accent-1/10 shadow-sm">
                  <div className="bg-secondary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h4 className="text-lg font-black text-primary mb-2 uppercase tracking-tight italic">{f.title}</h4>
                  <p className="text-primary/60 text-sm leading-relaxed font-medium">{f.description}</p>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
