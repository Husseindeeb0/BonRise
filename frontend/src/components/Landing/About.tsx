import React from "react";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, TrendingUp, Zap } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Bilingual Storefronts",
      description:
        "Full Arabic RTL & English LTR product experiences, built natively into every store.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Catalog Authority",
      description:
        "Dynamic product listings with advanced filters, multi-variant support, and lightning-fast search.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalable Order Flow",
      description: "Real-time order pipelines and inventory systems built to handle any sales volume.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Complete Store Control",
      description: "Full ownership of your products, pricing, orders, customers, and platform — no third-party fees.",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left text-about-description">
              <span className="inline-block px-3.5 py-1 mb-4 text-[10px] font-black tracking-[0.3em] text-secondary uppercase bg-secondary/10 rounded-md border border-secondary/20">
                Company Profile
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-5 leading-tight tracking-tight">
                Who We{" "}
                <span className="text-secondary italic font-serif leading-none">
                  Are
                </span>
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-primary/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                <p>
                  Upon partnering with the{" "}
                  <span className="text-primary font-bold">BOnRise</span> team,
                  businesses gain a comprehensive e-commerce platform — from
                  dynamic multi-language product catalogs and intelligent order
                  management to secure authentication and conversion-optimized
                  checkout experiences.
                </p>
                <p>
                  We solve the critical bottleneck of moving from a basic
                  social-media presence to a
                  <span className="text-secondary font-bold">
                    {" "}
                    fully owned digital storefront{" "}
                  </span>
                  with
                  <span className="text-primary font-bold">
                    {" "}
                    complete catalog and order control
                  </span>
                  , enabling brands to dominate their market space with real
                  commercial infrastructure.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative Quote Mark */}
              <div className="absolute -top-10 -left-6 text-[8rem] sm:text-[10rem] text-secondary/10 font-serif leading-none select-none pointer-events-none">
                "
              </div>

              <div className="relative p-6 sm:p-8 md:p-10 bg-white/40 backdrop-blur-xl border border-secondary/60 border-l-4 border-l-secondary rounded-2xl sm:rounded-3xl shadow-lg">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-black text-primary leading-snug mb-6 tracking-tight">
                  "Your online store is the salesman that{" "}
                  <span className="text-secondary">never sleeps</span>, the
                  catalog that{" "}
                  <span className="text-secondary">never closes</span>, and the
                  revenue engine that{" "}
                  <span className="text-secondary">scales without limits</span>."
                </blockquote>

                <div className="flex items-center gap-4 border-t border-primary/10 pt-5">
                  <div>
                    <div className="font-black text-primary text-base sm:text-lg tracking-tight uppercase">
                      BOnRise Strategy
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="h-[2px] w-6 bg-secondary"></span>
                      <span className="text-[9px] text-secondary font-black uppercase tracking-[0.25em]">
                        Powering E-Commerce Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 bg-accent-2/5 rounded-2xl border border-accent-1/10 shadow-xs hover:border-secondary/30 transition-all duration-300"
            >
              <div className="bg-secondary text-white w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 shadow-xs">
                {f.icon}
              </div>
              <h4 className="text-base font-black text-primary mb-1.5 uppercase tracking-tight italic">
                {f.title}
              </h4>
              <p className="text-primary/65 text-xs sm:text-sm leading-relaxed font-medium">
                {f.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { About };
