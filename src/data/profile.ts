export interface ProfileData {
  name: string;
  eyebrow: string;
  greeting: string;
  headline: string;
  description: string;
  university: string;
  degree: string;
  sgpa: string;
  location: string;
  status: string;
  contacts: {
    email: string;
    github: string;
    githubUser: string;
    linkedin: string;
    linkedinUser: string;
    codeforces: string[];
    leetcode: string;
    phone: string;
  };
}

export const PROFILE: ProfileData = {
  name: "Aadya Agrawal",
  eyebrow: "SOFTWARE ENGINEERING • WEB DEVELOPMENT • PROBLEM SOLVING",
  greeting: "Hi, I'm",
  headline: "Building for the web. Solving problems with code.",
  description:
    "I'm a Computer Science undergraduate at IIIT Lucknow, passionate about software engineering, backend systems, web development, and competitive programming.",
  university: "Indian Institute of Information Technology, Lucknow",
  degree: "Bachelor of Technology — Computer Science (2025–2029)",
  sgpa: "9.225",
  location: "Lucknow, India",
  status: "Available for Software Engineering Internships",
  contacts: {
    email: "aadyaa257@gmail.com",
    github: "https://github.com/Aadya25416",
    githubUser: "Aadya25416",
    linkedin: "https://www.linkedin.com/in/aadya-agrawal-682711380/",
    linkedinUser: "aadya-agrawal-682711380",
    codeforces: ["Aadya25", "Aadyaa432"],
    leetcode: "Aadya25",
    phone: "+91 950 8088 864",
  },
};
