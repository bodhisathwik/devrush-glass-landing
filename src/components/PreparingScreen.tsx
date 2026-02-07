import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface PreparingScreenProps {
  onContinue: () => void;
}

const PreparingScreen = ({ onContinue }: PreparingScreenProps) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      onContinue();
      return;
    }

    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, onContinue]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 pt-20">
      <GlassCard
        hoverable={false}
        className="max-w-md w-full text-center p-10 md:p-14"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Spinner */}
        <motion.div
          className="mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="spinner mx-auto" />
        </motion.div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-3"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Preparing Your{" "}
          <span className="gradient-text">Challenge</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-8"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          You will be redirected in{" "}
          <span className="text-primary font-semibold">{countdown}</span>{" "}
          seconds
        </motion.p>

        <motion.button
          onClick={onContinue}
          className="text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium tracking-wide underline underline-offset-4 decoration-primary/40 hover:decoration-secondary/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip & Continue →
        </motion.button>
      </GlassCard>
    </div>
  );
};

export default PreparingScreen;
