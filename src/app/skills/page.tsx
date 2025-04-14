"use client";
import Container from "@/components/Component";
import Heading from "@/components/Heading";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animations";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import tabButtonClass from "@/components/TabButtonClass";
import { SkillType, allSkills, mainSkills } from "@/lib/skill.constant";

export default function Skills() {
  const [type, setType] = useState<SkillType>(SkillType.INTEGRATION);
  const [skillsToShow, setSkillsToShow] = useState(
    allSkills.filter((skill) => skill.type === SkillType.INTEGRATION)
  );

  useEffect(() => {
    const filtered = allSkills.filter((skill) => skill.type === type);
    setSkillsToShow(filtered);
  }, [type]);

  return (
    <section id="skills" className="py-12">
      <Container>
        <Heading className="mb-4">Skills</Heading>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
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
                  <div className="rounded-full bg-primary/20 p-3 text-primary">
                    {skill.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{skill.name}</p>
                    <small className="text-muted-foreground">
                      {skill.caption}
                    </small>
                  </div>
                </motion.div>
              </Fragment>
            ))}
          </section>

          <motion.section className="col-span-2">
            <Tabs
              defaultValue={SkillType.INTEGRATION}
              onValueChange={(val) => setType(val as SkillType)}
            >
              <TabsList className="mb-4 flex gap-2">
                {Object.values(SkillType).map((tabType) => (
                  <TabsTrigger key={tabType} value={tabType}>
                    <span className={tabButtonClass(type === tabType)}>
                      {tabType}
                    </span>
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
