"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-full h-screen flex flex-col justify-center text-white bg-black items-center "
    >
      <h1 className="mb-32 text-[52px]">Animated Menu</h1>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-[8rem] flex items-center gap-2 rounded-lg bg-[#7b0460] justify-center p-4"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="w-[8rem] bg-[#7b0460] flex flex-col justify-center items-center"
      >
        <motion.li
          className="hover:bg-[#4c024d]  w-full flex justify-center p-2 cursor-pointer"
          variants={itemVariants}
        >
          Item 1{" "}
        </motion.li>
        <motion.li
          className="hover:bg-[#4c024d]   w-full flex justify-center p-2 cursor-pointer"
          variants={itemVariants}
        >
          Item 2{" "}
        </motion.li>
        <motion.li
          className="hover:bg-[#4c024d]   w-full flex justify-center p-2 cursor-pointer"
          variants={itemVariants}
        >
          Item 3{" "}
        </motion.li>
        <motion.li
          className="hover:bg-[#4c024d]   w-full flex justify-center p-2 cursor-pointer"
          variants={itemVariants}
        >
          Item 4{" "}
        </motion.li>
        <motion.li
          className="hover:bg-[#4c024d]   w-full flex justify-center p-2 cursor-pointer"
          variants={itemVariants}
        >
          Item 5{" "}
        </motion.li>
      </motion.ul>
      <h1 className="mt-32 text-[52px]">Repository</h1>
    </motion.nav>
  );
}
