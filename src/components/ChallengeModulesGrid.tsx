import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface Module {
  title: string;
  highlighted?: boolean;
}

const modules: Module[] = [
  { title: "Layout Replication" },
  { title: "CSS Styling" },
  { title: "Glass UI", highlighted: true },
  { title: "Color Theory" },
  { title: "Spacing Logic" },
  { title: "Time Control" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 25, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ChallengeModulesGrid = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Challenge Modules
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl w-full"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {modules.map((mod) => (
          <GlassCard
            key={mod.title}
            highlighted={mod.highlighted}
            hoverable
            className="cursor-pointer px-6 py-5 text-center"
            variants={item}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className={`text-base font-semibold ${mod.highlighted ? "gradient-text" : ""}`}>
              {mod.title}
            </span>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  );
};

export default ChallengeModulesGrid;
