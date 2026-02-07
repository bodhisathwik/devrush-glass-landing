import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface FeaturedModule {
  title: string;
  description: string;
  highlighted?: boolean;
}

const featured: FeaturedModule[] = [
  { title: "Precision", description: "Exact spacing and alignment." },
  { title: "Speed", description: "Time works against you.", highlighted: true },
  { title: "Focus", description: "No distractions allowed." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const FeaturedModules = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl w-full"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {featured.map((mod) => (
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
  );
};

export default FeaturedModules;
