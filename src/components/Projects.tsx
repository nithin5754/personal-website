"use client";
import Container from "./Component";
import { motion } from "framer-motion";
import Heading from "./Heading";
import { defaultAnimation } from "@/lib/animations";

import { Fragment } from "react";


import { ProjectsData, ProjectsType } from "@/hello";
import Card from "./Card";

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string|null;
  language: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  [key: string]: any;
}


const Projects = () => {
  // const [repos, setRepos] = useState<GitHubRepo[]>([]);

  // useEffect(() => {
  //   // getALL()

  //   fetch("https://api.github.com/users/Nithin5754/repos")
  //     .then((res) => res.json())
  //     .then((data) => setRepos(data))
  //     .catch((err) => console.error(err));
      
  // }, []);
  return (
    <section id="projects" className="bg-default-50/50 py-8">
      <Container>
        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <Heading className="text-primary">Projects</Heading>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ProjectsData &&
              ProjectsData.map((project:ProjectsType) => (
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
                    <Card data={project}  />

                  </motion.div>
                </Fragment>
              ))}
          </section>
        </motion.div>
      </Container>
    </section>
  );
};
export default Projects;
