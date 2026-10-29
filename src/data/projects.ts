export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role?: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  category: "Web & Geospatial" | "Web3 & Blockchain" | "Full-Stack & AI" | "Backend Systems";
}

export const PROJECTS: Project[] = [
  {
    id: "routex",
    title: "RouteX",
    subtitle: "Smart Logistics & Accessibility Intelligence Platform",
    description:
      "A geospatial logistics platform designed to improve road-network visibility and support accessibility planning in challenging terrain.",
    role: "Frontend development and integration of geographic road-network data with the backend.",
    technologies: ["Next.js", "TypeScript", "MapLibre GL JS", "OpenStreetMap", "Tailwind CSS"],
    features: [
      "Interactive map visualization for high-altitude & complex road networks",
      "Dynamic layer filtering and road-network data rendering",
      "Seamless integration with backend geographic data endpoints",
    ],
    liveUrl: "https://route-x-two.vercel.app",
    githubUrl: "https://github.com/atharva-vaish240/RouteX",
    accentColor: "#E52332",
    category: "Web & Geospatial",
  },
  {
    id: "chainpass",
    title: "ChainPass",
    subtitle: "Decentralized Event Ticketing Platform",
    description:
      "A blockchain-based ticketing platform designed to support transparent ticket management, gasless transactions, and verifiable reward distribution.",
    role: "Full-Stack Web3 Developer (Hackathon Project)",
    technologies: [
      "React",
      "Solidity",
      "Wagmi",
      "Ethereum Sepolia",
      "ERC-4337",
      "Chainlink VRF",
      "GraphQL",
      "The Graph",
    ],
    features: [
      "Smart-contract-based NFT ticketing deployed on Ethereum Sepolia",
      "ERC-4337 Account Abstraction for gasless, frictionless onboarding",
      "Chainlink VRF integration for cryptographically verifiable random reward selection",
      "GraphQL queries via The Graph for real-time on-chain event indexing",
    ],
    githubUrl: "https://github.com/Aadya25416/ChainPass",
    accentColor: "#6366F1",
    category: "Web3 & Blockchain",
  },
  {
    id: "lumina",
    title: "Lumina",
    subtitle: "AI-Powered Online Thrifting Platform",
    description:
      "An online thrifting experience combining product discovery, conversational assistance, and seller-facing functionality.",
    role: "Full-Stack Developer",
    technologies: ["React", "Firebase", "Gemini AI", "Vanilla CSS", "Cloudinary"],
    features: [
      "AI-assisted product discovery with semantic search",
      "Gemini AI powered conversational shopping assistant for real-time queries",
      "Firebase Authentication and real-time database state management",
      "Seller inventory dashboard with photo uploads via Cloudinary and live analytics",
    ],
    githubUrl: "https://github.com/Aadya25416/Lumina",
    accentColor: "#EC4899",
    category: "Full-Stack & AI",
  },
  {
    id: "hireportfolio",
    title: "HirePortfolio",
    subtitle: "Collaborative Developer Portfolio Platform",
    description:
      "A collaborative platform enabling developers to build, showcase, and manage developer portfolios with fine-grained access control.",
    role: "Backend Developer (Collaborative project)",
    technologies: ["Firebase", "JavaScript", "EmailJS", "HTML5", "CSS3"],
    features: [
      "Firebase Authentication with Google sign-in and user session-locking",
      "Normalized Firebase database architecture for user and portfolio models",
      "Role-based portfolio deletion permissions and access safeguards",
      "LeapBot backend webhook integration and automated EmailJS alerts",
    ],
    liveUrl: "https://srujantag.github.io/HirePortfolio/",
    githubUrl: "https://github.com/srujantag/HirePortfolio",
    accentColor: "#10B981",
    category: "Backend Systems",
  },
];
