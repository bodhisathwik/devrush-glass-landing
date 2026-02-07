import { motion } from "framer-motion";

const ChallengeUnlockedScreen = () => {
  return (
    <div
      className="flex items-center justify-center min-h-[80vh] px-4 pt-20"
      style={{
        background: "linear-gradient(135deg, hsl(260, 60%, 55%), hsl(200, 90%, 55%), hsl(185, 90%, 55%))",
      }}
    >
      <motion.div
        className="rounded-2xl px-10 py-10 md:px-16 md:py-14 text-center max-w-md w-full shadow-2xl"
        style={{
          background: "hsl(0, 0%, 100%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold mb-3"
          style={{ color: "hsl(222, 47%, 11%)" }}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Challenge Unlocked 🚀
        </motion.h2>
        <motion.p
          className="text-base md:text-lg"
          style={{ color: "hsl(222, 20%, 40%)" }}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          Your timer starts now. Good luck!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ChallengeUnlockedScreen;
