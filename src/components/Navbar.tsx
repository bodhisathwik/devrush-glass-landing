import { motion } from "framer-motion";

interface NavbarProps {
  onJoinNow: () => void;
}

const Navbar = ({ onJoinNow }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold tracking-tight">
          <span className="gradient-text">DevRush</span>
        </span>
        <span className="hidden sm:inline text-sm text-muted-foreground font-medium tracking-wide">
          Build. Fix. Escape.
        </span>
      </div>

      <button
        onClick={onJoinNow}
        className="btn-gradient text-sm"
      >
        Join Now
      </button>
    </motion.nav>
  );
};

export default Navbar;
