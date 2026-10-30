export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  status: "Built" | "In development" | "Concept";
};

export const projects: Project[] = [
  {
    number: "01",
    name: "FLOWDESK",
    category: "Workflow & communication",
    description:
      "A departmental communication platform designed to support internal messaging, document sharing and coordinated team workflows.",
    stack: ["Django", "Python", "SQLite", "Tailwind CSS"],
    status: "Built"
  },
  {
    number: "02",
    name: "GROT Property Management",
    category: "Property technology",
    description:
      "A property and rental management system focused on organizing property records, tenants and operational information.",
    stack: ["PHP", "MariaDB", "SQLite", "Bootstrap"],
    status: "Built"
  },
  {
    number: "03",
    name: "JARVIS OS",
    category: "AI & intelligent interfaces",
    description:
      "An exploration of a voice-enabled personal assistant, bringing conversational interaction and AI capabilities into a desktop workflow.",
    stack: ["Python", "Gemini API", "Audio"],
    status: "In development"
  },
  {
    number: "04",
    name: "BiasharaOS",
    category: "SME business technology",
    description:
      "A product vision for practical digital infrastructure that can help small and medium-sized businesses operate more effectively across East Africa.",
    stack: ["Django", "Payments", "Business tools"],
    status: "Concept"
  }
];
