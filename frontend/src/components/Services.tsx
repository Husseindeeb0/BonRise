import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, MousePointer2, HeartPulse } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom Web Solutions",
      description: "Performant, SEO-optimized digital ecosystems that turn visitors into loyal customers. No templates, just pure strategy.",
      icon: <Layout className="w-8 h-8" />,
      tag: "Conversion Focused"
    },
    {
      title: "Mobile App Development",
      description: "Powerful iOS and Android applications that keep your business in your customers' pockets 24/7.",
      icon: <Smartphone className="w-8 h-8" />,
      tag: "Native Experience"
    },
    {
      title: "UX/UI Excellence",
      description: "We focus on frictionless user journeys so your clients get what they want in the fastest time possible.",
      icon: <MousePointer2 className="w-8 h-8" />,
      tag: "User Centric"
    },
    {
      title: "Full-Scale Maintenance",
      description: "Direct support and real-time solutions for any technical problem. Your business never stops, and neither do we.",
      icon: <HeartPulse className="w-8 h-8" />,
      tag: "24/7 Support"
    }
  ];

  return (
    <section id="services" className="py-24 bg-accent-2/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary mb-6"
          >
            Solutions That <span className="text-secondary">Scale</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-primary/60 max-w-2xl mx-auto font-medium"
          >
            Professional software solutions tailored to meet your unique business objectives.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background p-8 rounded-3xl shadow-sm border border-accent-1/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(46,196,182,0.1)] h-full flex flex-col"
            >
              <div className="w-16 h-16 bg-accent-2/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded-md">
                   {service.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-primary/60 leading-relaxed mb-6 grow">{service.description}</p>
              <div className="h-1 w-12 bg-secondary/30 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
