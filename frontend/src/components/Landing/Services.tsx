import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Globe2, LayoutDashboard, HeartPulse } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Custom E-Commerce Stores",
      description: "Tailored storefronts with rich product catalogs, smart filters, multi-variant support, and high-converting checkout flows. No templates — pure custom architecture built to sell.",
      icon: <ShoppingCart className="w-6 h-6" />,
      tag: "Conversion Focused"
    },
    {
      title: "Bilingual Arabic & English",
      description: "Native Arabic RTL and English LTR support with seamless language switching, localized content, and regionally adapted user experiences your customers feel at home with.",
      icon: <Globe2 className="w-6 h-6" />,
      tag: "EN / AR Support"
    },
    {
      title: "Order & Inventory Control",
      description: "Complete operational dashboards for real-time order processing, automated stock tracking, dynamic product variants, and customer management — all under your full control.",
      icon: <LayoutDashboard className="w-6 h-6" />,
      tag: "Full Control"
    },
    {
      title: "Maintenance & Live Support",
      description: "Direct support and real-time solutions for any technical issue. Your store never goes down, and neither do we — 24/7 monitoring keeps your business running at full speed.",
      icon: <HeartPulse className="w-6 h-6" />,
      tag: "24/7 Support"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-accent-2/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-3.5 tracking-tight"
          >
            Solutions That <span className="text-secondary">Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-primary/65 max-w-2xl mx-auto font-medium"
          >
            End-to-end e-commerce platforms built for full catalog control, seamless orders, and bilingual reach.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-background p-6 rounded-2xl shadow-xs border border-accent-1/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-md h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-accent-2/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <div className="mb-3">
                <span className="text-[9px] font-black uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2.5 text-primary">{service.title}</h3>
              <p className="text-primary/65 text-xs sm:text-sm leading-relaxed mb-4 grow font-normal">{service.description}</p>
              <div className="h-0.5 w-8 bg-secondary/30 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };
