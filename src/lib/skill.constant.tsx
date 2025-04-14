"use client"
import { AppWindowMac, Laptop, Palette } from "lucide-react";

export enum SkillType {
  TECH = "TECH",
  INTEGRATION = "INTEGRATION",
  TOOLS = "TOOLS",
}

export const mainSkills = [
  {
    name: "Software development",
    caption: "Crafting intuitive applications for optimal user satisfaction",
    icon: <Laptop size="1.5em" />,
  },
  {
    name: "Graphic design",
    caption: "Creating visually content for effective communication",
    icon: <Palette size="1.5em" />,
  },
  {
    name: "UI/UX",
    caption: "Designing sleek interfaces for seamless user experiences",
    icon: <AppWindowMac size="1.5em" />,
  },
];

export const allSkills = [
  { name: "Typescript", type: SkillType.TECH },
  { name: "Next.js", type: SkillType.TECH },
  { name: "Node.js", type: SkillType.TECH },
  { name: "Microservice", type: SkillType.TECH },
  { name: "Docker", type: SkillType.TECH },
  { name: "Kubernetes", type: SkillType.TECH },
  { name: "Kafka", type: SkillType.TECH },
  { name: "Express.js", type: SkillType.TECH },
  { name: "React.js", type: SkillType.TECH },
  { name: "Redux", type: SkillType.TECH },
  { name: "MongoDB", type: SkillType.TECH },
  { name: "Postgress", type: SkillType.TECH },
  { name: "CLEAN architecture", type: SkillType.TECH },
  { name: "MVC architecture", type: SkillType.TECH },
  { name: "Tailwind", type: SkillType.TECH },
  { name: "Sequelize", type: SkillType.INTEGRATION },
  { name: "Swagger", type: SkillType.INTEGRATION },
  { name: "Firebase", type: SkillType.INTEGRATION },
  { name: "S3", type: SkillType.INTEGRATION },
  { name: "Lambda", type: SkillType.INTEGRATION },
  { name: "EC2", type: SkillType.INTEGRATION },
  { name: "WebSocket", type: SkillType.INTEGRATION },
  { name: "Socket.IO", type: SkillType.INTEGRATION },
  { name: "Razorpay", type: SkillType.INTEGRATION },
  { name: "Cloudinary", type: SkillType.INTEGRATION },
  { name: "SendGrid", type: SkillType.INTEGRATION },
  { name: "Node Mailer", type: SkillType.INTEGRATION },
  { name: "Multer", type: SkillType.INTEGRATION },
  { name: "Winston", type: SkillType.INTEGRATION },
  { name: "Morgan", type: SkillType.INTEGRATION },
  { name: "Logstash", type: SkillType.INTEGRATION },
  { name: "Kibana", type: SkillType.INTEGRATION },
  { name: "Elasticsearch", type: SkillType.INTEGRATION },
  { name: "Git", type: SkillType.TOOLS },
  { name: "Postman", type: SkillType.TOOLS },
  { name: "Figma", type: SkillType.TOOLS },
  { name: "Illustrator", type: SkillType.TOOLS },
  { name: "Photoshop", type: SkillType.TOOLS },
];