import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Rocket, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const AboutUs: React.FC = () => {
  const founders = [
    {
      name: "Hussein Deeb",
      role: "Founder & CEO",
      imagePath: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hussein", // Placeholder
      linkedin: "https://www.linkedin.com/in/hussein-deeb-0/", // Placeholder
      bio: "Visionary leader dedicated to transforming how businesses operate in the digital age. With a focus on bridging the gap between traditional social selling and robust digital ecosystems."
    },
    {
      name: "John Doe",
      role: "Co-Founder & CTO",
      imagePath: "https://api.dicebear.com/7.x/avataaars/svg?seed=John", // Placeholder
      linkedin: "https://www.linkedin.com/", // Placeholder
      bio: "Tech strategist with a passion for building scalable solutions that empower entrepreneurs to take full control of their digital presence."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "End-to-End Solutions",
      description: "We don't just build websites; we build complete business ecosystems that handle everything from discovery to conversion."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
      title: "Digital Ownership",
      description: "Unlike social media platforms, we help you own your data, your customers, and your brand's future."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Scalable Growth",
      description: "Our platforms are designed to grow with you, moving beyond the limitations of manual social media management."
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "High Performance",
      description: "Blazing fast load times and optimized user experiences that turn visitors into loyal customers."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-secondary/20 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-accent-1/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-secondary uppercase bg-secondary/10 rounded-lg border border-secondary/20">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Empowering the Next Generation of <span className="text-secondary italic">Digital Sellers</span>
            </h1>
            <p className="text-xl text-neutral/80 leading-relaxed max-w-2xl mx-auto">
              At BonRise, we bridge the gap between social media presence and true digital ownership, helping businesses rise to their full potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Goal & Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 flex items-center gap-4">
                    <Target className="text-secondary w-10 h-10" />
                    Our Focus
                  </h2>
                  <p className="text-lg text-primary/80 leading-relaxed">
                    Many businesses today are trapped in the "old way" of online selling—relying solely on social media algorithms and direct messages to close sales. This approach is manual, unscalable, and risky.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-4 flex items-center gap-4">
                    <Rocket className="text-secondary w-8 h-8" />
                    Our Mission
                  </h3>
                  <p className="text-lg text-primary/80 leading-relaxed">
                    Our mission is to empower these entrepreneurs by providing them with professional, high-performance web platforms. We transform their social media "presence" into "digital ownership," giving them the tools they need to automate their sales and own their customer relationships.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-secondary/10 blur-[50px] -z-10 group-hover:bg-secondary/20 transition-all"></div>
              <div className="glass-morphism p-8 rounded-3xl border-2 border-secondary/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl">
                      <CheckCircle2 className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-xl">The Social Media Trap</h4>
                      <p className="text-primary/70">Manual DMs, platform dependency, and unstable algorithms.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="text-secondary font-black text-4xl"
                    >
                      ↓
                    </motion.div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <CheckCircle2 className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-xl">The BonRise Way</h4>
                      <p className="text-primary/70">Automated sales, branded experience, and complete data control.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">
              We don't just provide a service; we provide a competitive advantage that sets your business apart.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/50 backdrop-blur-sm border border-primary/5 rounded-2xl hover:shadow-xl transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-primary/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <Users className="text-secondary w-12 h-12" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">The Minds Behind BonRise</h2>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto">
              Our team consists of digital strategists and tech enthusiasts committed to your success.
            </p>
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
                <div className="relative z-10 p-8 glass-morphism rounded-3xl border-2 border-primary/5 hover:border-secondary transition-colors h-full flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-6 rounded-2xl overflow-hidden border-4 border-secondary/20 group-hover:border-secondary transition-all">
                    <img 
                      src={founder.imagePath} 
                      alt={founder.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-primary uppercase tracking-tight">{founder.name}</h3>
                  <p className="text-secondary font-bold mb-4 uppercase text-xs tracking-widest">{founder.role}</p>
                  <p className="text-primary/70 mb-8 flex-grow leading-relaxed italic font-medium">"{founder.bio}"</p>
                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20"
                  >
                    <FaLinkedin size={20} />
                    Connect on LinkedIn
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
