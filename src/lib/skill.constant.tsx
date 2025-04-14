"use client"
import { AppWindowMac, Laptop, Palette } from "lucide-react";

export enum SkillType {
  ALL='ALL',
  TECH = "TECH",
  INTEGRATION = "INTEGRATION",
  TOOLS = "TOOLS"
}

export const mainSkills = [
  {
    name: "Full Stack Web Development",
    caption: "Building robust applications using the MERN stack with TypeScript and Clean Architecture",
    icon: <Laptop size="1.5em" />,
  },
  {
    name: "Real-Time Systems & Integrations",
    caption: "Implementing live collaboration features and third-party service integrations",
    icon: <AppWindowMac size="1.5em" />,
  },
  {
    name: "Fast Learner & Tech Explorer",
    caption: "Quickly adapting to industry trends through self-driven learning and hands-on projects",
    icon: <Laptop size="1.5em" />,
  },
];



export const allSkills = [
  // TECH
  { name: "TypeScript", type: SkillType.TECH },
  { name: "JavaScript", type: SkillType.TECH },
  { name: "React.js", type: SkillType.TECH },
  { name: "Redux Toolkit", type: SkillType.TECH },
  { name: "Next.js", type: SkillType.TECH },
  { name: "Angular", type: SkillType.TECH },
  { name: "Node.js", type: SkillType.TECH },
  { name: "Express.js", type: SkillType.TECH },
  { name: "MongoDB", type: SkillType.TECH },
  { name: "PostgreSQL", type: SkillType.TECH },
  { name: "Redis", type: SkillType.TECH },
  { name: "Firebase", type: SkillType.TECH },
  { name: "Clean Architecture", type: SkillType.TECH },
  { name: "Socket.IO", type: SkillType.TECH },
  { name: "GraphQL", type: SkillType.TECH },
  { name: "Tailwind CSS", type: SkillType.TECH },
  { name: "Bootstrap", type: SkillType.TECH },

  // INTEGRATION
  { name: "JWT", type: SkillType.INTEGRATION },
  { name: "OAuth", type: SkillType.INTEGRATION },
  { name: "Auth0", type: SkillType.INTEGRATION },
  { name: "Google OAuth", type: SkillType.INTEGRATION },
  { name: "ZEGOcloud", type: SkillType.INTEGRATION },
  { name: "Multer", type: SkillType.INTEGRATION },
  { name: "Cloudinary", type: SkillType.INTEGRATION },
  { name: "Razorpay", type: SkillType.INTEGRATION },
  { name: "PM2", type: SkillType.INTEGRATION },
  { name: "Nginx", type: SkillType.INTEGRATION },
  { name: "SES", type: SkillType.INTEGRATION },
  { name: "CI/CD Pipelines", type: SkillType.INTEGRATION },

  // TOOLS
  { name: "Docker", type: SkillType.TOOLS },
  { name: "Git", type: SkillType.TOOLS },
  { name: "Postman", type: SkillType.TOOLS },
  { name: "Figma", type: SkillType.TOOLS },
  { name: "Jest", type: SkillType.TOOLS },
  { name: "React Testing Library", type: SkillType.TOOLS },
  { name: "Webpack", type: SkillType.TOOLS },
  { name: "Babel", type: SkillType.TOOLS },
  { name: "YAML", type: SkillType.TOOLS },
];