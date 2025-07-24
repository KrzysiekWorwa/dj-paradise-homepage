import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const StaggeredContainer = ({ children }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export const StaggeredItem = ({ children }) => (
  <motion.div style={{ width: "100%", height: "100%", willChange: "transform, opacity" }} variants={itemVariants}>{children}</motion.div>
);
