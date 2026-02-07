import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface Module {
  title: string;
  description: string;
  highlighted?: boolean;
}

const modules: Module[] = [
  { title: "Precision", description: "Exact spacing and alignment" },
  { title: "Speed", description: "Time works against you", highlighted: true },
  { title: "Focus", description: "No distractions allowed" },
  { title: "Layout Replication", description: "Pixel-perfect recreation" },
  { title: "CSS Styling", description: "Master the cascade" },
  { title: "Glass UI", description: "Frosted glass mastery", highlighted: true },
  { title: "Color Theory", description: "Harmony in hues" },
  { title: "Spacing Logic", description: "Rhythm and proportion" },
  { title: "Time Control", description: "Race the clock" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ChallengeModulesScreen = () => {
  return (
    <div className="flex flex-col items-center min-h-[80vh] px-4 pt-24 pb-20">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Challenge{" "}
        <span className="gradient-text">Modules</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {modules.map((mod) => (
          <GlassCard
            key={mod.title}
            highlighted={mod.highlighted}
            hoverable
            className="cursor-pointer p-5 md:p-6"
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className={`text-lg font-bold mb-1 ${mod.highlighted ? "gradient-text" : ""}`}>
              {mod.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {mod.description}
            </p>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  );
};

export default ChallengeModulesScreen;
