import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-6 text-center text-sm text-muted-foreground tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      © TECHVERSE 2026
    </motion.footer>
  );
};

export default Footer;
