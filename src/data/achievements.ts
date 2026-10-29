export interface Achievement {
  id: string;
  metric: string;
  metricLabel: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
  year?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "adobe-hackathon",
    metric: "Round 2",
    metricLabel: "Top Nationwide Tier",
    title: "Adobe University Hackathon 2026",
    organization: "Adobe",
    description:
      "Qualified for Round 2 in a highly selective nationwide competition with over 300,000 participating student developers across India.",
    badge: "Hackathon",
    year: "2026",
  },
  {
    id: "devsprint",
    metric: "2nd",
    metricLabel: "Position / 60+ Teams",
    title: "DevSprint — IIIT Lucknow Techfest",
    organization: "IIIT Lucknow",
    description:
      "Secured 2nd position among 60+ competitive teams in an intensive three-day hackathon spanning competitive programming, ML, web development, app development, and UI/UX design.",
    badge: "Hackathon",
  },
  {
    id: "contract-battle",
    metric: "2nd",
    metricLabel: "Position / Web3 Track",
    title: "Contract Battle — Techfest",
    organization: "Web3 Wing, IIIT Lucknow",
    description:
      "Secured 2nd position in Contract Battle, a competitive smart contract hacking and development challenge conducted during the institute's annual Techfest.",
    badge: "Web3",
  },
  {
    id: "codeforces",
    metric: "300+",
    metricLabel: "Problems Solved",
    title: "Codeforces Competitive Programming",
    organization: "Codeforces",
    description:
      "Solved 300+ competitive programming problems and secured 5791th rank in Codeforces Round 1119 (Div. 3). Active handles: Aadya25 and Aadyaa432.",
    badge: "CP",
  },
  {
    id: "jee-main",
    metric: "99.02",
    metricLabel: "Percentile (AIR 15090)",
    title: "JEE Main 2025",
    organization: "National Testing Agency (NTA)",
    description:
      "Achieved 99.02 percentile and All India Rank 15,090 among approximately 1.5 million candidates appearing for India's premier engineering entrance examination.",
    badge: "National Exam",
    year: "2025",
  },
  {
    id: "jee-advanced",
    metric: "AIR 21478",
    metricLabel: "Among 200k+ Qualified",
    title: "JEE Advanced 2025",
    organization: "IITs / NTA",
    description:
      "Secured All India Rank 21,478 among over 2 lakh shortlisted top candidates who qualified for India's most rigorous engineering examination.",
    badge: "National Exam",
    year: "2025",
  },
];
