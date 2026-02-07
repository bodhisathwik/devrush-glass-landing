import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const stats = [
  { value: "15+", label: "Minutes" },
  { value: "30", label: "Points" },
  { value: "1", label: "Winner" },
];

const LandingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 pt-20">
      {/* Hero glass card */}
      <GlassCard
        hoverable={false}
        className="max-w-xl w-full text-center p-8 md:p-12"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Build Under{" "}
          <span className="gradient-text">Pressure</span>
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-base md:text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          Speed, precision, and creativity decide the winner.
        </motion.p>
      </GlassCard>

      {/* Stats */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute w-72 h-72 rounded-full animate-float opacity-20"
          style={{
            background: "radial-gradient(circle, hsla(190, 95%, 50%, 0.15), transparent 70%)",
            top: "10%",
            left: "5%",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full animate-float opacity-15"
          style={{
            background: "radial-gradient(circle, hsla(217, 91%, 60%, 0.12), transparent 70%)",
            bottom: "5%",
            right: "5%",
            animationDelay: "3s",
          }}
        />
      </div>
    </div>
  );
};

export default LandingScreen;
