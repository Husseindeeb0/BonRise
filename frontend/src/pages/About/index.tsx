import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ChevronRight,
  CheckCircle2,
  UserCircle2,
  Cpu,
  Layers,
  Search,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import { TEAM_MEMBERS } from "../../constants/about";

const AboutUs: React.FC = () => {
  const founders = TEAM_MEMBERS;

  const steps = [
    {
      title: "Store Strategy & Product Discovery",
      description:
        "We analyze your product catalog, buyer journeys, and market dynamics to architect a high-converting e-commerce strategy tailored for maximum sales.",
      icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-blue-500/20 to-secondary/20",
    },
    {
      title: "Conversion UI & Catalog Design",
      description:
        "Our designers create intuitive, bilingual shopping interfaces (English & Arabic) with responsive product grids, fast filtering, and frictionless checkouts.",
      icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-secondary/20 to-accent-1/20",
    },
    {
      title: "Full Control Engineering",
      description:
        "We build comprehensive order tracking, secure authentication, real-time inventory management, and admin dashboards that give you 100% control over your store.",
      icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-accent-1/20 to-primary/20",
    },
    {
      title: "Launch & E-Commerce Dominance",
      description:
        "Following thorough QA and payment gateway validation, your custom store launches with the performance, reliability, and security needed to scale sales.",
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-primary/20 to-blue-600/20",
    },
  ];

  return (
    <div className="min-h-screen bg-primary pt-16">
      {/* Intro Section */}
      <section className="relative h-[48vh] sm:h-[52vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Office"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
              Rise Above the <br />{" "}
              <span className="text-secondary italic font-serif">Ordinary</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              We empower modern businesses with tailored e-commerce solutions from dynamic product catalogs and order management to bilingual experiences and full platform ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.35em] mb-2 block">
                  Our Identity
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tight">
                  Who We{" "}
                  <span className="text-secondary italic font-serif leading-none">
                    Do Best
                  </span>
                </h2>
                <div className="h-1 w-20 bg-secondary mt-3 rounded-full"></div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-primary/75 leading-relaxed font-medium">
                <p>
                  At{" "}
                  <span className="text-primary font-black border-b border-secondary/40">
                    BonRise
                  </span>
                  , we don't just build websites; we architect high-performance
                  digital ecosystems that empower businesses to achieve absolute
                  ownership of their future.
                </p>
                <p>
                  Our team is composed of passionate innovators dedicated to
                  creating tailored solutions that solve your biggest
                  bottlenecks. We treat every project as a unique masterpiece,
                  aligning perfectly with your specific vision and goals.
                </p>

                {/* Mission Card */}
                <div className="relative group pt-2">
                  <div className="flex items-start gap-4 p-5 sm:p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-secondary/20 shadow-md relative">
                    <CheckCircle2 className="text-secondary shrink-0 w-6 h-6 mt-0.5" />
                    <span className="text-primary leading-relaxed font-semibold italic text-xs sm:text-sm">
                      "We concentrate on achieving the unique needs and goals of
                      each client, ensuring every solution is as unique as the
                      business it serves."
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-secondary/10 blur-[80px] -z-10 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Synergy"
                className="rounded-3xl shadow-xl border border-white/20 relative z-10 w-full object-cover max-h-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-3 leading-none">
              How We{" "}
              <span className="text-secondary italic font-serif">WORK</span>
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto rounded-full mb-3"></div>
            <p className="text-primary/50 font-bold uppercase tracking-[0.25em] text-[10px]">
              The Blueprint to Your Success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative group h-full"
              >
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3.5 transform -translate-y-1/2 z-20 pointer-events-none">
                    <ChevronRight className="w-6 h-6 text-secondary/40 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                )}

                <div
                  className={`h-full p-6 sm:p-7 bg-gradient-to-br ${step.color} glass-morphism rounded-2xl border border-white/40 hover:border-secondary transition-all duration-300 hover:shadow-lg flex flex-col group/card`}
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-5 shadow-md group-hover/card:bg-secondary transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                    <span className="w-5 h-px bg-secondary/40"></span>
                    Step 0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-primary mb-2.5 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-primary/70 text-xs sm:text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vh] bg-secondary/15 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vh] bg-accent-1/10 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8 leading-none">
              The Ultimate <br />
              <span className="text-secondary italic font-serif">
                Aspiration
              </span>
            </h2>
            <div className="p-8 sm:p-12 md:p-14 glass-morphism rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-xl relative overflow-hidden group">
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5,
                }}
                className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-secondary/20 to-transparent -skew-x-20 z-0 pointer-events-none"
              />

              <p className="text-base sm:text-lg md:text-xl font-semibold text-white leading-relaxed italic tracking-normal relative z-10">
                Our goal is to build a powerful and commanding online presence
                for your business, designed to convert visitors into loyal
                customers. By organizing your products and services into a
                professional, high-performance digital ecosystem, we ensure your
                clients find exactly what they need effortlessly, providing them
                with all the necessary information directly and instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-14 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-2.5 leading-none">
              Our{" "}
              <span className="text-secondary italic font-serif">
                Team
              </span>
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto rounded-full mb-3"></div>
            <p className="text-primary/40 font-bold uppercase tracking-[0.3em] text-[10px]">
              The Visionaries behind BonRise
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative z-10 p-5 sm:p-6 rounded-2xl border border-primary/5 transition-all duration-300 h-full flex flex-col items-center text-center shadow-md hover:shadow-lg hover:border-secondary group/card bg-white/50 backdrop-blur-sm">
                  <motion.div
                    whileHover={{ boxShadow: "0 0 0 6px rgba(46,196,182,0.12)" }}
                    className="w-14 h-14 mb-3.5 rounded-xl bg-secondary/10 flex items-center justify-center transition-all duration-300 border border-secondary/20"
                  >
                    <UserCircle2 className="w-7 h-7 text-secondary" />
                  </motion.div>

                  <h3 className="text-base font-black text-primary uppercase tracking-tight mb-1 transition-colors group-hover/card:text-secondary">
                    {founder.name}
                  </h3>
                  <div className="text-secondary font-black mb-2.5 uppercase text-[9px] tracking-[0.25em]">
                    {founder.role}
                  </div>

                  <div className="w-8 h-px bg-secondary/20 mb-3 rounded-full transition-all group-hover/card:w-12 group-hover/card:bg-secondary/40"></div>

                  <p className="text-primary/65 mb-4 grow leading-relaxed font-medium text-xs">
                    {founder.bio}
                  </p>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-white rounded-lg font-black uppercase text-[9px] tracking-[0.15em] transition-all duration-300 hover:bg-secondary shadow-xs"
                  >
                    <FaLinkedin size={12} className="text-white" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
