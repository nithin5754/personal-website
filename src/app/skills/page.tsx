"use client";

import Container from "@/components/Component";
import Heading from "@/components/Heading";
import { AppWindowMac, Laptop, Palette } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animations";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import tabButtonClass from "@/components/TabButtonClass";

enum SkillType {
  TECH = "TECH",
  INTEGRATION = "INTEGRATION",
  TOOLS = "TOOLS",
}

const mainSkills = [
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

const allSkills = [
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

export default function Skills() {
  const [type, setType] = useState<SkillType>(SkillType.INTEGRATION);
  const [skillsToShow, setSkillsToShow] = useState(allSkills.filter(skill => skill.type === SkillType.INTEGRATION));

  useEffect(() => {
    const filtered = allSkills.filter((skill) => skill.type === type);
    setSkillsToShow(filtered);
  }, [type]);

  return (
    <section id="skills" className="py-12">
      <Container>
        <Heading className="mb-4">Skills</Heading>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Left Column: Main Skills */}
          <section className="grid h-fit grid-cols-1 gap-4">
            {mainSkills.map((skill, index) => (
       <Fragment key={index}>
               <motion.div
                key={skill.name}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-xl border p-4 shadow-md"
              >
                <div className="rounded-full bg-primary/20 p-3 text-primary">{skill.icon}</div>
                <div>
                  <p className="font-semibold">{skill.name}</p>
                  <small className="text-muted-foreground">{skill.caption}</small>
                </div>
              </motion.div>
       </Fragment>
            ))}
          </section>

  
          <motion.section className="col-span-2">
            <Tabs defaultValue={SkillType.INTEGRATION} onValueChange={(val) => setType(val as SkillType)}>
              <TabsList className="mb-4 flex gap-2">
                {Object.values(SkillType).map((tabType) => (
                <TabsTrigger key={tabType} value={tabType}>
                <span className={tabButtonClass(type === tabType)}>{tabType}</span>
              </TabsTrigger>
              
                ))}
              </TabsList>

              {Object.values(SkillType).map((tabType) => (
                <TabsContent key={tabType} value={tabType}>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial="initial"
                    animate="animate"
                  >
                    {skillsToShow.map((skill, index) => (
                <Fragment key={index}>
                        <motion.div
                        key={skill.name}
                        variants={defaultAnimation}
                        transition={{ delay: index * 0.05 }}
                        className="rounded-md bg-muted px-4 py-2 text-sm shadow hover:scale-105 transition-transform duration-200"
                      >
                        {skill.name}
                      </motion.div>
                </Fragment>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.section>
        </div>
      </Container>
    </section>
  );
}
