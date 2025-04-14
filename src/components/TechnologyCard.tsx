"use client";
import React, { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import Container from "./Component";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { dataTechnologyArray } from "@/lib/technology.constant";

export interface ITechnologyCardsList {
  title: string;
  image: StaticImageData;
}

export function TechnologyCardsList() {
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
          <Heading className="text-primary">Technologies</Heading>
          <div className="flex flex-row flex-wrap gap-6 justify-center">
            {dataTechnologyArray &&
              dataTechnologyArray.map((technology: ITechnologyCardsList) => (
                <Fragment key={technology.title}>
                  <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
                    <Image
                      src={technology.image}
                      alt="express"
                      height="100"
                      width="100"
                      className="object-contain"
                    />
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {technology.title}
                    </p>
                  </BackgroundGradient>
                </Fragment>
              ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
