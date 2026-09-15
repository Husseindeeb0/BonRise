export interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  bio: string;
}

export interface WorkStep {
  title: string;
  description: string;
  stepNumber: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  tag: string;
}

export interface BrandFeature {
  title: string;
  description: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Hussein Deeb",
    role: "Team Leader & Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/hussein-deeb0/",
    // bio: "Visionary leader dedicated to building high-converting e-commerce ecosystems, scalable product catalogs, and custom shopping platforms that empower merchants with full operational control.",
    bio: ""
  },
  {
    name: "Mustafa Fawaz",
    role: "Sales Manager",
    linkedin: "https://www.linkedin.com/",
    // bio: "Leading commercial strategy and client partnerships, ensuring every e-commerce solution is tailor-crafted to maximize sales growth and customer acquisition.",
    bio: ""
  },
  {
    name: "Ahmad Allouch",
    role: "Social Media Manager & Full Stack Developer",
    linkedin: "https://www.linkedin.com/",
    // bio: "Driving brand visibility and community growth across social platforms, crafting compelling digital campaigns that connect BonRise clients with their target audience.",
    bio: ""
  },
  {
    name: "Ali Ghaith",
    role: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/",
    // bio: "Building robust full-stack web applications with clean architecture, scalable APIs, and seamless front-to-back integrations that power reliable, high-performance platforms.",
    bio: ""
  },
];

export const ECOMMERCE_SERVICES: ServiceFeature[] = [
  {
    title: "E-Commerce & Store Architecture",
    description: "Tailored online storefronts with rich product catalog systems, intelligent search, filters, and high-converting checkout flows. No rigid templates—just custom architecture built to sell.",
    tag: "Conversion Focused",
  },
  {
    title: "Order & Catalog Control Center",
    description: "Complete operational control over your store: real-time order processing, automated stock tracking, dynamic product variants, and streamlined inventory management.",
    tag: "Full Control",
  },
  {
    title: "Multilingual & Localized Commerce",
    description: "Seamless bilingual support for English and Arabic with native RTL/LTR layouts, localized pricing, and regional payment gateway integrations.",
    tag: "EN / AR Support",
  },
  {
    title: "Secure Auth & User Portals",
    description: "Frictionless customer authentication, personalized customer dashboards, order history tracking, and encrypted checkout protocols ensuring complete buyer trust.",
    tag: "Buyer Trust",
  },
];

export const BRAND_FEATURES: BrandFeature[] = [
  {
    title: "Digital Storefront Fortress",
    description: "Building custom-owned e-commerce platforms that safeguard your brand data, client records, and transactions.",
  },
  {
    title: "Product & Market Authority",
    description: "Showcasing your catalog with high-speed performance, premium aesthetics, and search-optimized discovery.",
  },
  {
    title: "Scalable Order Flow",
    description: "Order management pipelines engineered to smoothly handle high-volume sales spikes and seasonal promotions.",
  },
  {
    title: "Absolute Business Control",
    description: "Complete autonomy over your inventory, pricing models, customer relationships, and platform rules without third-party platform limitations.",
  },
];
