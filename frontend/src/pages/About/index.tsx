import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Rocket, 
  Lightbulb, 
  Code2, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const founders = [
    {
      name: "Hussein Deeb",
      role: "Founder & CEO",
      imagePath: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hussein",
      linkedin: "https://www.linkedin.com/in/hussein-deeb-0/",
      bio: "Visionary leader dedicated to transforming how businesses operate in the digital age. Bridge the gap between social selling and robust digital ecosystems."
    },
    {
      name: "Team Lead",
      role: "Operations Director",
      imagePath: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      linkedin: "https://www.linkedin.com/",
      bio: "Ensuring every project meets our rigorous standards of excellence and client satisfaction."
    }
  ];

  const steps = [
    {
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and current bottlenecks to craft a personalized digital roadmap.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Design & UX Excellence",
      description: "Our designers create high-end, conversion-focused interfaces that reflect your brand's unique identity and prestige.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Precision Development",
      description: "We build scalable, high-performance systems using cutting-edge technology to ensure your platform is future-proof.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Deployment & Growth",
      description: "After rigorous testing, we launch your platform and provide the tools needed to dominate your market space.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-primary pt-20">
      {/* Intro Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Office" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-secondary uppercase bg-secondary/10 rounded-lg border border-secondary/20 backdrop-blur-md">
              Welcome to BonRise
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
              Architecture of <span className="text-secondary italic">Trust</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
              We don't just build software; we architect the digital future of your business with passion and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-black text-primary leading-none uppercase tracking-tighter mb-8">
                  What We <br /> <span className="text-secondary italic font-serif text-5xl md:text-7xl">Do Best</span>
                </h2>
                <div className="h-1.5 w-24 bg-secondary"></div>
              </div>
              
              <div className="space-y-6 text-lg text-primary/80 leading-relaxed font-medium">
                <p>
                  At <span className="text-primary font-black">BOnRise</span>, our mission is simple: to help businesses transition from outdated, manual sales methods to high-performance digital ecosystems.
                </p>
                <p>
                  We are a group of passionate innovators who believe that every business deserves an online presence that works as hard as they do. Our members are dedicated to creating something truly special for your brand, focusing entirely on your unique needs and achieving the specific goals that matter to you.
                </p>
                <div className="flex items-center gap-4 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 italic">
                  <CheckCircle2 className="text-secondary shrink-0" />
                  <span>"We concentrate on achieving the unique needs and goals of each client, ensuring every solution is as unique as the business it serves."</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/10 blur-3xl -z-10 rounded-full animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="rounded-[3rem] shadow-2xl border-2 border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 bg-primary/50 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-4">
              How we <span className="text-secondary">Work</span>
            </h2>
            <p className="text-primary/60 font-bold uppercase tracking-widest text-[10px]">How we achieve your results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-full"
              >
                <div className="h-full p-8 glass-morphism rounded-3xl border-2 border-primary/5 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl flex flex-col">
                  <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:bg-secondary transition-all">
                    {step.icon}
                  </div>
                  <div className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4">
                    Step 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black text-primary mb-4 uppercase leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-primary/60 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 translate-y-[-50%] z-20">
                      <ArrowRight className="text-primary/10 w-8 h-8" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-secondary/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-accent-1/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-10"
            >
              <Target className="text-secondary w-12 h-12" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10">
              Our <span className="text-secondary italic">Ultimate Goal</span>
            </h2>
            <div className="p-10 md:p-16 glass-morphism rounded-[3rem] border-2 border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <p className="text-xl md:text-3xl font-bold text-white leading-relaxed italic">
                "To establish absolute digital authority for every client we serve, transforming their business into a scalable powerhouse through innovative software and uncompromising performance."
              </p>
              <div className="mt-12 flex justify-center gap-10">
                <div className="text-center">
                  <div className="text-4xl font-black text-secondary">100%</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Ownership</div>
                </div>
                <div className="w-px bg-white/10"></div>
                <div className="text-center">
                  <div className="text-4xl font-black text-secondary">24/7</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex justify-center mb-6">
              <Users className="text-secondary w-16 h-16" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter mb-6 underline decoration-secondary decoration-8 underline-offset-12">
              Founders & Leadership
            </h2>
            <p className="text-primary/60 font-bold uppercase tracking-widest text-[10px]">The visionaries behind BonRise</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative z-10 p-10 glass-morphism rounded-[2.5rem] border-2 border-primary/5 hover:border-secondary transition-all h-full flex flex-col items-center text-center group-hover:shadow-[0_48px_80px_-32px_rgba(46,196,182,0.2)]">
                  <div className="w-40 h-40 mb-8 rounded-4xl overflow-hidden border-4 border-secondary/20 group-hover:border-secondary group-hover:scale-105 transition-all duration-500 shadow-xl">
                    <img 
                      src={founder.imagePath} 
                      alt={founder.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-2">{founder.name}</h3>
                  <p className="text-secondary font-black mb-6 uppercase text-xs tracking-[0.3em]">{founder.role}</p>
                  <p className="text-primary/70 mb-10 grow leading-relaxed italic font-medium">"{founder.bio}"</p>
                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-secondary transition-all shadow-xl hover:shadow-secondary/30 active:scale-95"
                  >
                    <FaLinkedin size={20} />
                    Connect
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
