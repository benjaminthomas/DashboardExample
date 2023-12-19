"use client";

import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

interface TitleTextProps {
  children?: React.ReactNode;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`h2 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2()}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const SecondaryTitleText = ({
  children,
  textStyles,
}: TitleTextProps) => (
  <motion.h2
    variants={textVariant2()}
    initial="hidden"
    whileInView="show"
    viewport={{
      once: true,
    }}
    className={`h2 mb-4 text-gray-900 dark:text-gray-200 ${textStyles}`}
  >
    {children}
  </motion.h2>
);
export const DescriptionText = ({ children, textStyles }: TitleTextProps) => (
  <motion.p
    variants={textVariant2(0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{
      once: true,
    }}
    className={`text-xl text-gray-900 dark:text-gray-400 ${textStyles}`}
  >
    {children}
  </motion.p>
);
