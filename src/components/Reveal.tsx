'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  stagger?: number;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  className = "", 
  delay = 0,
  stagger = 0.1 
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Luxury cubic-bezier
      },
    },
  } as const;

  // If children is already an array, treat them as items to stagger
  // If it's a single item (like a paragraph), we might want to split it by lines manually
  // For most of our use cases, we wrap existing blocks.
  
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {React.Children.map(children, (child) => {
          if (!child) return null;
          return (
            <motion.div variants={itemVariants}>
              {child}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
