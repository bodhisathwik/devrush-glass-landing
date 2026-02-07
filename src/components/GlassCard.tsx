import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  highlighted?: boolean;
  hoverable?: boolean;
  children: React.ReactNode;
}

const GlassCard = ({
  highlighted = false,
  hoverable = true,
  className,
  children,
  ...props
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6",
        highlighted ? "glass-highlighted" : "glass",
        hoverable && !highlighted && "glass-hover",
        highlighted && hoverable && "transition-all duration-300 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
