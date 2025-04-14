"use client";
import Container from "@/components/Component";
import Heading from "@/components/Heading";
import { ProjectsData, ProjectsType } from "@/hello";
import { defaultAnimation } from "@/lib/animations";
import { Fragment } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import HeaderSearchInput from "@/components/search/HeaderSearchInput";

const page = () => {
  return (
    <section id="skills" className="py-12">
      <Container>
        <div className="flex justify-between">
          <Heading className="mb-4">Projects</Heading>
         <div className="w-[400px]">
         <HeaderSearchInput />
         </div>
        </div>

        <section className=" flex flex-wrap justify-between  m-auto gap-4 h-fit w-full">
          {ProjectsData &&
            ProjectsData.map((project: ProjectsType) => (
              <Fragment key={project.id}>
                <motion.div
                  variants={defaultAnimation}
                  initial="initial"
                  whileInView="animate"
                  whileTap="tap"
                  transition={{
                    duration: 0.3,
                  }}
                  whileHover="hover"
                >
                  <Card data={project} />
                </motion.div>
              </Fragment>
            ))}
        </section>
      </Container>
    </section>
  );
};
export default page;
