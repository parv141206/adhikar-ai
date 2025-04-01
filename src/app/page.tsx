"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const FLOAT_ANIMATION = {
  y: [0, 6, 0, -6, 0],
  rotate: [0, 2, 0, -2, 0],
};

const FLOAT_TRANSITION = {
  y: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
  rotate: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const MotionBubble = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className={`h-fit rounded-3xl bg-gray-100 p-5 text-xl text-black shadow-md shadow-black/10 dark:shadow-black/50 ${className}`}
    animate={FLOAT_ANIMATION}
    transition={FLOAT_TRANSITION}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const adhikarLetters = useMemo(
    () =>
      "ADHIKAR".split("").map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: [0, -10, 0], filter: "blur(0px)" }}
          transition={{
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="title relative h-fit text-center text-7xl md:text-9xl"
        >
          {e === " " ? "\u00A0" : e}
        </motion.div>
      )),
    [],
  );

  const aiLetters = useMemo(
    () =>
      "AI".split("").map((e, i) => (
        <motion.i
          key={i}
          initial={{ opacity: 0, y: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: [0, -10, 0], filter: "blur(0px)" }}
          transition={{
            delay: 0.8 + i * 0.1,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="sub-title relative h-fit scale-150 text-center text-7xl md:text-9xl"
        >
          {e === " " ? "\u00A0" : e}
        </motion.i>
      )),
    [],
  );

  return (
    <motion.div
      initial={{ filter: "blur(10px)" }}
      animate={{ filter: "blur(0px)" }}
      className="flex justify-center"
    >
      <section className="relative container flex min-h-[85vh] flex-col items-center justify-center gap-5">
        <MotionBubble className="fixed bottom-4 z-50 w-80 bg-gray-200 md:right-10 md:bottom-10">
          <h2 className="font-bold">Justice at Your Fingertips</h2>
          Your go-to platform for quick, reliable, and AI-powered legal answers
          tailored for India. No jargon, no confusion—just clear guidance when
          you need it most.
        </MotionBubble>

        <MotionBubble className="fixed top-16 z-50 hidden md:top-24 md:right-60 md:block">
          <h2 className="font-bold">Ask</h2>
        </MotionBubble>

        <MotionBubble className="absolute z-50 hidden md:bottom-20 md:left-40 md:block">
          <h2 className="font-bold">Understand</h2>
        </MotionBubble>

        <MotionBubble className="absolute z-50 hidden md:bottom-8 md:left-96 md:block">
          <h2 className="font-bold">Empower</h2>
        </MotionBubble>

        <Link href="/chat">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="relative z-50 cursor-pointer rounded-xl bg-white px-5 py-3 text-center text-3xl text-black shadow-2xl shadow-gray-400/30 active:border-none active:outline-none dark:bg-black dark:text-white"
          >
            Get Started
          </motion.button>
        </Link>

        <div className="absolute top-20 flex flex-col items-center justify-center gap-1 md:top-10 md:left-10 md:items-start">
          <div className="flex items-center justify-center gap-1 md:items-start md:justify-start">
            {adhikarLetters}
          </div>
          <motion.div
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: "easeInOut",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ms-3 mt-6 flex gap-9 md:mt-0"
          >
            {aiLetters}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
