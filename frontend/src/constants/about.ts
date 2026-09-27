export interface TeamMember {
  name: string;
  role: string;
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
    bio: "Leading development efforts, coordinating teams, and designing scalable, consistent, and maintainable systems. Focused on turning requirements into reliable solutions while maintaining strong engineering practices and clear development workflows.",
  },
  {
    name: "Mustafa Fawaz",
    role: "Sales Manager",
    bio: "Building client relationships, identifying opportunities, and connecting businesses with solutions that fit their needs. Focused on communication, understanding client requirements, and driving new business opportunities.",
  },
  {
    name: "Ahmad Allouch",
    role: "Social Media Manager & Full Stack Developer",
    bio: "Managing our digital presence and content while contributing to the development side of our projects. Focused on clear communication, consistent branding, and connecting our technical work with the audience.",
  },
  {
    name: "Ali Ghaith",
    role: "Full Stack Developer",
    bio: "Full-Stack Developer with experience in web development, backend systems, databases, and API development. Skilled in building practical, scalable web solutions and passionate about turning business requirements into reliable digital products.",
  },
  {
    name: "Mohammad Kteich",
    role: "QA Tester",
    bio: "Testing our systems from the client’s perspective, checking features, workflows, and edge cases to ensure everything works reliably and as expected before delivery.",
  },
];

export const ECOMMERCE_SERVICES: ServiceFeature[] = [
  {
    title: "E-Commerce & Store Architecture",
    description:
      "Tailored online storefronts with rich product catalog systems, intelligent search, filters, and high-converting checkout flows. No rigid templates—just custom architecture built to sell.",
    tag: "Conversion Focused",
  },
  {
    title: "Order & Catalog Control Center",
    description:
      "Complete operational control over your store: real-time order processing, automated stock tracking, dynamic product variants, and streamlined inventory management.",
    tag: "Full Control",
  },
  {
    title: "Multilingual & Localized Commerce",
    description:
      "Seamless bilingual support for English and Arabic with native RTL/LTR layouts, localized pricing, and regional payment gateway integrations.",
    tag: "EN / AR Support",
  },
  {
    title: "Secure Auth & User Portals",
    description:
      "Frictionless customer authentication, personalized customer dashboards, order history tracking, and encrypted checkout protocols ensuring complete buyer trust.",
    tag: "Buyer Trust",
  },
];

export const BRAND_FEATURES: BrandFeature[] = [
  {
    title: "Digital Storefront Fortress",
    description:
      "Building custom-owned e-commerce platforms that safeguard your brand data, client records, and transactions.",
  },
  {
    title: "Product & Market Authority",
    description:
      "Showcasing your catalog with high-speed performance, premium aesthetics, and search-optimized discovery.",
  },
  {
    title: "Scalable Order Flow",
    description:
      "Order management pipelines engineered to smoothly handle high-volume sales spikes and seasonal promotions.",
  },
  {
    title: "Absolute Business Control",
    description:
      "Complete autonomy over your inventory, pricing models, customer relationships, and platform rules without third-party platform limitations.",
  },
];
