// components/ui/Reveal.jsx

import { motion } from "motion/react";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 60 : 0,
      x:
        direction === "left"
          ? -60
          : direction === "right"
          ? 60
          : 0,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}