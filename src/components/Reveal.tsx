'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  boxClassName?: string;
  delay?: number;
  stagger?: number;
  threshold?: number;
  duration?: number;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  className = "", 
  boxClassName = "block",
  delay = 0,
  stagger = 0.1,
  threshold = 0.1,
  duration = 0.7
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden"); // Ensure it can reset
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.22, 1, 0.36, 1], // Luxury cubic-bezier
      },
    },
  } as const;

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {React.Children.map(children, (child) => {
          if (!child) return null;
          return (
            <motion.div variants={itemVariants} className={boxClassName}>
              {child}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
