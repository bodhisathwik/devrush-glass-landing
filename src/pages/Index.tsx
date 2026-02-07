import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import LandingScreen from "@/components/LandingScreen";
import PreparingScreen from "@/components/PreparingScreen";
import ChallengeModulesScreen from "@/components/ChallengeModulesScreen";
import Footer from "@/components/Footer";

type Screen = "landing" | "preparing" | "modules";

const pageVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.3, ease: "easeIn" } },
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");

  const handleJoinNow = useCallback(() => setScreen("preparing"), []);
  const handleContinue = useCallback(() => setScreen("modules"), []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar onJoinNow={handleJoinNow} />

      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          {screen === "landing" && (
            <motion.div
              key="landing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <LandingScreen />
            </motion.div>
          )}

          {screen === "preparing" && (
            <motion.div
              key="preparing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PreparingScreen onContinue={handleContinue} />
            </motion.div>
          )}

          {screen === "modules" && (
            <motion.div
              key="modules"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ChallengeModulesScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
