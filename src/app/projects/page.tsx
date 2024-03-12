"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        id="projects"
        layoutId="projects"
        className="bg-[#30D158] min-h-screen"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1>Projects</h1>
      </motion.section>
    </AnimatePresence>
  );
}
