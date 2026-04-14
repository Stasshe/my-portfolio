export type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web Design",
    description: "A bold reimagining of digital storytelling through interactive design.",
    tags: ["Design", "Frontend"],
    gradient: "linear-gradient(135deg, #14A8C7 0%, #273582 100%)",
  },
  {
    id: 2,
    title: "Project Beta",
    category: "Branding",
    description: "Visual identity system that bridges tradition and modernity.",
    tags: ["Branding", "Identity"],
    gradient: "linear-gradient(135deg, #AC5D7B 0%, #273582 100%)",
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "Development",
    description: "Full-stack application built for scale and elegance.",
    tags: ["React", "Node.js"],
    gradient: "linear-gradient(135deg, #8099B2 0%, #14A8C7 100%)",
  },
  {
    id: 4,
    title: "Project Delta",
    category: "UI/UX",
    description: "Experience design focused on delight, usability, and craft.",
    tags: ["UX", "Prototype"],
    gradient: "linear-gradient(135deg, #273582 0%, #AC5D7B 100%)",
  },
  {
    id: 5,
    title: "Project Epsilon",
    category: "Motion",
    description: "A refined motion system for interface branding and pleasant interaction.",
    tags: ["Motion", "Animation"],
    gradient: "linear-gradient(135deg, #8099B2 0%, #14A8C7 100%)",
  },
];

export const MARQUEE_ITEMS = [
  "Design",
  "Development",
  "Branding",
  "Strategy",
  "Creative",
  "Digital",
  "Craft",
  "Experience",
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Figma",
  "UI Design",
  "GSAP",
  "Motion",
  "CSS",
  "Tailwind",
];
