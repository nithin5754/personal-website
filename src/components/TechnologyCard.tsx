"use client";
import React from "react";

import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import Container from "./Component";
import Heading from "./Heading";
import { motion } from "framer-motion";

import ExpressImage from "../images/express_js.png";
import NodeJsImage from "../images/node_js.png";
import ReactJsImage from "../images/react_js.png";
import NextJsImage from "../images/nextjs.png";
import AngularImage from "../images/angularjs.png";
import MongodbImage from "../images/mongodb.png";
import JwtImage from "../images/icons8-jwt-512.png";
import TailwindcssImage from "../images/tailwindcss.png";

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
            <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={ExpressImage}
                alt="express"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                EXPRESS JS
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] w-full max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={NodeJsImage}
                alt="node js"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                NODE JS
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={ReactJsImage}
                alt="react"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                REACT JS
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={NextJsImage}
                alt="react"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                NEXT JS
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={AngularImage}
                alt="react"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                ANGULAR JS
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={MongodbImage}
                alt="react"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                MONGODB
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={TailwindcssImage}
                alt="react"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                TAILWIND CSS
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>

            <BackgroundGradient className="rounded-[22px] w-full  max-w-[250px] h-auto p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <Image
                src={JwtImage}
                alt="react"
                height="200"
                width="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                JSON WEB TOKEN
              </p>

              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
