import { motion } from "framer-motion";
import {
  Rocket,
  Star,
  Heart,
  Cloud,
  Sparkles,
  Leaf,
  Bird,
  Flower2,
  Rainbow,
  Sun,
  Moon,
  Plane,
} from "lucide-react";

interface FlyingItem {
  Icon: React.ElementType;
  color: string;
  size: number;
  top: string;
  duration: number;
  delay: number;
  direction: "left" | "right" | "down";
}

const flyingItems: FlyingItem[] = [
  { Icon: Rocket, color: "#F39EB6", size: 28, top: "8%", duration: 14, delay: 0, direction: "left" },
  { Icon: Bird, color: "#B8DB80", size: 24, top: "18%", duration: 18, delay: 3, direction: "right" },
  { Icon: Star, color: "#F7C948", size: 20, top: "30%", duration: 11, delay: 6, direction: "left" },
  { Icon: Leaf, color: "#E8A0BF", size: 26, top: "45%", duration: 16, delay: 2, direction: "right" },
  { Icon: Plane, color: "#A0C4FF", size: 22, top: "55%", duration: 13, delay: 8, direction: "left" },
  { Icon: Heart, color: "#F39EB6", size: 18, top: "68%", duration: 20, delay: 5, direction: "right" },
  { Icon: Cloud, color: "#D4D4D4", size: 32, top: "12%", duration: 25, delay: 0, direction: "left" },
  { Icon: Cloud, color: "#E0E0E0", size: 28, top: "35%", duration: 30, delay: 10, direction: "left" },
  { Icon: Sparkles, color: "#F7C948", size: 16, top: "75%", duration: 12, delay: 4, direction: "left" },
  { Icon: Rainbow, color: "#F39EB6", size: 22, top: "85%", duration: 17, delay: 7, direction: "right" },
  { Icon: Flower2, color: "#B8DB80", size: 20, top: "22%", duration: 19, delay: 12, direction: "down" },
  { Icon: Sun, color: "#F7C948", size: 18, top: "60%", duration: 15, delay: 9, direction: "down" },
  { Icon: Moon, color: "#C4B5FD", size: 16, top: "50%", duration: 22, delay: 14, direction: "left" },
];

const getAnimationProps = (item: FlyingItem) => {
  if (item.direction === "left") {
    return {
      x: ["-100px", "calc(100vw + 100px)"],
      y: [0, -30, 10, -20, 0],
      rotate: [0, 5, -5, 10, 15],
    };
  }
  if (item.direction === "right") {
    return {
      x: ["calc(100vw + 100px)", "-100px"],
      y: [0, 20, -10, 15, 0],
      rotate: [0, -5, 5, -10, -15],
    };
  }
  // down
  return {
    y: ["-50px", "calc(100vh + 50px)"],
    x: [0, 30, -20, 40],
    rotate: [0, 15, -10, 30, 45],
  };
};

const FlyingCartoons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flyingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: item.direction === "down" ? undefined : item.top,
            left: item.direction === "down" ? `${15 + i * 7}%` : undefined,
          }}
          animate={getAnimationProps(item)}
          transition={{
            repeat: Infinity,
            duration: item.duration,
            delay: item.delay,
            ease: "linear",
            y: { duration: item.duration, ease: "easeInOut", repeat: Infinity },
            rotate: { duration: item.duration, ease: "easeInOut", repeat: Infinity },
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: item.delay * 0.3 }}
          >
            <item.Icon
              size={item.size}
              style={{ color: item.color }}
              className="drop-shadow-md opacity-40"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FlyingCartoons;
