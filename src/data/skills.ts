export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for algorithms, systems, and smart contracts",
    skills: ["C++", "JavaScript", "TypeScript", "Python", "Java", "SQL", "Solidity"],
  },
  {
    category: "Frontend Development",
    description: "Modern, responsive, and performance-oriented web interfaces",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & Systems",
    description: "API design, business logic, and server-side architectures",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and in-memory data persistence",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    category: "Web3 & Blockchain",
    description: "Smart contract development, tooling, and decentralized protocols",
    skills: [
      "Ethereum",
      "Solidity",
      "Wagmi",
      "Viem",
      "Foundry",
      "ERC-4337",
      "Chainlink VRF",
      "GraphQL",
      "The Graph",
    ],
  },
  {
    category: "Tools & Infrastructure",
    description: "Version control, containerization, and developer environments",
    skills: ["Git", "GitHub", "Linux", "Docker", "AWS", "VS Code"],
  },
];
