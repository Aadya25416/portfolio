export interface OpenSourceContribution {
  id: string;
  project: string;
  repository: string;
  description: string;
  prUrl?: string;
  type?: string;
  technologies: string[];
}

export const OPEN_SOURCE_CONTRIBUTIONS: OpenSourceContribution[] = [
  {
    id: "bounty-raffle",
    project: "BountyRaffle",
    repository: "iiitl/BountyRaffle",
    description:
      "Developed comprehensive Foundry test suites covering the raffle lifecycle, fee validation, participant constraints, winner selection, reward distribution, and edge-case handling.",
    prUrl: "https://github.com/iiitl/BountyRaffle/pull/14",
    type: "Pull Request #14",
    technologies: ["Solidity", "Foundry", "Smart Contracts", "Fuzz Testing"],
  },
  {
    id: "mission-sakhi",
    project: "Mission Sakhi",
    repository: "iiitl/MissionSakhi",
    description:
      "Implemented a privacy-focused panic switch and responsive decoy interface, enabling rapid content concealment and redirection to a dummy page across desktop, tablet, and mobile devices.",
    prUrl: "https://github.com/iiitl/MissionSakhi/pull/26",
    type: "Pull Request #26",
    technologies: ["React", "JavaScript", "Security & Privacy", "Responsive UI"],
  },
  {
    id: "hacktoberfest",
    project: "Hacktoberfest 2025",
    repository: "DigitalOcean / Open Source",
    description:
      "Successfully contributed to verified community open-source repositories during Hacktoberfest 2025, solving practical issues and collaborating with maintainers.",
    type: "Community Contributor",
    technologies: ["Git", "GitHub", "Open Source Collaborations"],
  },
];
