import { motion } from "framer-motion";
import { Bike, Trophy, Code, BookOpen } from "lucide-react";

const stickers = [
  { Icon: Bike, top: "15%", left: "3%", delay: 0 },
  { Icon: Trophy, top: "40%", right: "2%", delay: 0.5 },
  { Icon: Code, top: "65%", left: "4%", delay: 1 },
  { Icon: BookOpen, top: "80%", right: "3%", delay: 1.5 },
];

const FloatingStickers = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden lg:block">
      {stickers.map((s, i) => (
        <motion.div
          key={i}
          className="absolute sticker bg-cream px-3 py-2 pointer-events-auto cursor-pointer"
          style={{ top: s.top, left: (s as any).left, right: (s as any).right }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: s.delay, ease: "easeInOut" }}
          whileHover={{ rotate: 12, scale: 1.2, boxShadow: "6px 6px 20px rgba(0,0,0,0.2)" }}
        >
          <s.Icon size={20} className="text-clay-pink-bold" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingStickers;
