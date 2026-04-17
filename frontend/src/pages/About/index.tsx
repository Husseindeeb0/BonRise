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

const AboutUs: React.FC = () => {
  const founders = [
    {
      name: "Hussein Deeb",
      role: "CEO & CTO",
      linkedin: "https://www.linkedin.com/in/hussein-deeb0/",
      bio: "Visionary leader dedicated to transforming how businesses operate in the digital age. Bridge the gap between social selling and robust digital ecosystems.",
    },
    {
      name: "Mustafa Fawaz",
      role: "CPO & CMO",
      linkedin: "https://www.linkedin.com/",
      bio: "Ensuring every project meets our rigorous standards of excellence and client satisfaction.",
    },
  ];

  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business goals, target audience, and current bottlenecks to craft a personalized digital roadmap.",
      icon: <Search className="w-7 h-7" />,
      color: "from-blue-500/20 to-secondary/20",
    },
    {
      title: "Design & UX Excellence",
      description:
        "Our designers create high-end, conversion-focused interfaces that reflect your brand's unique identity and prestige.",
      icon: <Layers className="w-7 h-7" />,
      color: "from-secondary/20 to-accent-1/20",
    },
    {
      title: "Precision Development",
      description:
        "We build scalable, high-performance systems using cutting-edge technology to ensure your platform is future-proof.",
      icon: <Cpu className="w-7 h-7" />,
      color: "from-accent-1/20 to-primary/20",
    },
    {
      title: "Deployment & Growth",
      description:
        "After rigorous testing, we launch your platform and provide the tools needed to dominate your market space.",
      icon: <Rocket className="w-7 h-7" />,
      color: "from-primary/20 to-blue-600/20",
    },
  ];

  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Intro Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
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
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-5 py-2 mb-8 text-[11px] font-black tracking-[0.5em] text-secondary uppercase bg-secondary/5 backdrop-blur-2xl border border-secondary/30 rounded-full shadow-2xl">
              Architecture of Digital Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
              Rise Above the <br />{" "}
              <span className="text-secondary italic font-serif">Ordinary</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              We empower industry leaders with premium software solutions that
              redefine what's possible in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="relative">
                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4 block">
                  Our Identity
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-primary leading-none uppercase tracking-tighter">
                  Who We{" "}
                  <span className="text-secondary italic font-serif leading-none block md:inline">
                    Do Best
                  </span>
                </h2>
                <div className="h-2 w-32 bg-secondary mt-6 rounded-full"></div>
              </div>

              <div className="space-y-8 text-xl text-primary/70 leading-relaxed font-medium">
                <p>
                  At{" "}
                  <span className="text-primary font-black border-b-2 border-secondary/30">
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

                {/* Mission Card with INFINTIE TOP LINE ANIMATION */}
                <div className="relative group">
                  {/* The "Nice Line" above it animating infinitely */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary/10 overflow-hidden rounded-t-full">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "linear",
                      }}
                      className="w-full h-full bg-gradient-to-r from-transparent via-secondary to-transparent"
                    />
                  </div>

                  <div className="flex items-start gap-6 p-8 bg-white/80 backdrop-blur-md rounded-b-[2rem] rounded-t-lg border-2 border-secondary/20 shadow-xl relative mt-1">
                    <CheckCircle2 className="text-secondary shrink-0 w-8 h-8 mt-1" />
                    <span className="text-primary leading-relaxed font-bold italic">
                      "We concentrate on achieving the unique needs and goals of
                      each client, ensuring every solution is as unique as the
                      business it serves."
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative lg:p-10"
            >
              <div className="absolute -inset-10 bg-secondary/10 blur-[120px] -z-10 rounded-full animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Synergy"
                className="rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(3,4,94,0.3)] border-2 border-white/20 relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-blob"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/5 -translate-y-1/2 -z-0 hidden lg:block"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-28"
          >
            <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-6 leading-none">
              How We{" "}
              <span className="text-secondary italic font-serif">WORK</span>
            </h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8"></div>
            <p className="text-primary/50 font-bold uppercase tracking-[0.3em] text-[11px]">
              The Blueprint to Your Success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="relative group h-full"
              >
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 transform -translate-y-1/2 z-20 pointer-events-none">
                    <ChevronRight className="w-10 h-10 text-secondary/30 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                )}

                <div
                  className={`h-full p-10 bg-gradient-to-br ${step.color} glass-morphism rounded-[3rem] border-2 border-white/40 hover:border-secondary transition-all duration-700 hover:shadow-2xl flex flex-col group/card`}
                >
                  <div className="w-20 h-20 bg-primary text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-[0_20px_40px_-10px_rgba(3,4,94,0.4)] group-hover/card:bg-secondary transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="text-[12px] font-black text-secondary uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-secondary/30"></span>
                    Step 0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-6 uppercase tracking-tight transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-primary/70 text-base leading-relaxed font-semibold">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-40 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-secondary/15 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-accent-1/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-16 leading-none">
              The Ultimate <br />
              <span className="text-secondary italic font-serif">
                Aspiration
              </span>
            </h2>
            <div className="p-12 md:p-24 glass-morphism rounded-[4rem] border-2 border-white/10 bg-white/10 backdrop-blur-3xl shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              {/* Infinite Moving Light Beams */}
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5,
                }}
                className="absolute inset-y-0 w-64 bg-linear-to-r from-transparent via-secondary/20 to-transparent -skew-x-20 z-0 pointer-events-none"
              />
              <motion.div
                animate={{ x: ["-100%", "500%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
                className="absolute inset-y-0 w-48 bg-linear-to-r from-transparent via-secondary/10 to-transparent -skew-x-20 z-0 pointer-events-none"
              />

              <p className="text-2xl md:text-3xl font-bold text-white leading-tight italic tracking-tight relative z-10">
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
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-6 leading-none">
              Our{" "}
              <span className="text-secondary italic font-serif">
                FOUNDERS
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-8"></div>
            <p className="text-primary/40 font-bold uppercase tracking-[0.4em] text-[11px]">
              The Visionaries behind BonRise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Visual Fix: High Contrast Hover States */}
                <div className="relative z-10 p-12 md:p-16 rounded-[4rem] border-2 border-primary/5 transition-all duration-500 h-full flex flex-col items-center text-center shadow-xl hover:shadow-[0_48px_80px_-32px_rgba(3,4,94,0.15)] hover:border-secondary group/card">
                  {/* Icon Hover: Subtle Pulse */}
                  <motion.div
                    whileHover={{
                      boxShadow: "0 0 0 12px rgba(46,196,182,0.1)",
                    }}
                    className="w-32 h-32 mb-12 rounded-[2.5rem] bg-secondary/10 flex items-center justify-center transition-all duration-500 shadow-inner overflow-hidden relative border border-secondary/20"
                  >
                    <UserCircle2 className="w-16 h-16 text-secondary" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-black text-primary uppercase tracking-tight mb-3 transition-colors group-hover/card:text-secondary">
                    {founder.name}
                  </h3>
                  <div className="text-secondary font-black mb-10 uppercase text-xs tracking-[0.4em]">
                    {founder.role}
                  </div>

                  <div className="w-12 h-1.5 bg-secondary/20 mb-10 rounded-full transition-all group-hover/card:w-20 group-hover/card:bg-secondary/40"></div>

                  <p className="text-primary/60 mb-14 grow leading-relaxed font-bold italic text-lg px-4">
                    "{founder.bio}"
                  </p>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-[1.5rem] font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 hover:bg-secondary shadow-lg active:bg-secondary"
                  >
                    <FaLinkedin size={22} className="text-white" />
                    Connect via LinkedIn
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
