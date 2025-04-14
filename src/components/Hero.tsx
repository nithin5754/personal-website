"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./Component";
import DownloadResume from "./DownloadResume";
import { Button } from "./ui/button";
function Hero() {
  return (
    <>
      <div className="grid place-items-center pb-16 pt-6 text-center">
        <Container>
          <div className="max-w-[85vw] md:hidden">
            <motion.h1
              initial={{
                opacity: 0,
                fontSize: "4rem",
              }}
              animate={{
                originY: 0,
                fontSize: "2rem",
                opacity: [1, 1],
              }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              className="truncate font-bold text-primary"
            >
              Nithin Joji
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                fontSize: "1rem",
              }}
              animate={{
                originY: 0,
                fontSize: "0.75rem",
                opacity: [1, 1],
              }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              className="truncate"
            >
              Self-Taught Graphic Designer <br />
              Turned Self-Taught Web Developer
            </motion.p>
          </div>
          <div className="hidden md:block">
            <motion.h1
              initial={{
                opacity: 0,
                fontSize: "10rem",
              }}
              animate={{
                originY: 0,
                fontSize: "7rem",
                opacity: [1, 1],
              }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              className="truncate font-bold text-primary"
            >
              Nithin Joji
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                fontSize: "4rem",
              }}
              animate={{
                originY: 0,
                fontSize: "1.5rem",
                opacity: [1, 1],
              }}
              transition={{
                duration: 1,
                ease: "anticipate",
              }}
              className="truncate"
            >
              Full Stack Developer <br />
            </motion.p>
          </div>
          <div className="my-4"></div>
          <Button className="text-black capitalize">
            {" "}
            <DownloadResume>download resume</DownloadResume>
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Hero;
