"use client";

import Projects from "@/components/Projects";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { TechnologyCardsList } from "@/components/TechnologyCard";

export default function Home() {
  return (
    <>
      <motion.main
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw" }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <Hero />
        <TechnologyCardsList />
        <Projects />
      </motion.main>
    </>
  );
}
