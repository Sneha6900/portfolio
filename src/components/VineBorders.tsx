import { motion } from "framer-motion";

const leftLeaves = [
  { y: 80, size: "lg", flip: false },
  { y: 220, size: "sm", flip: true },
  { y: 380, size: "md", flip: false },
  { y: 520, size: "sm", flip: true },
  { y: 680, size: "lg", flip: false },
  { y: 830, size: "md", flip: true },
  { y: 980, size: "sm", flip: false },
  { y: 1140, size: "lg", flip: true },
  { y: 1300, size: "md", flip: false },
  { y: 1450, size: "sm", flip: true },
  { y: 1620, size: "lg", flip: false },
  { y: 1780, size: "md", flip: true },
  { y: 1940, size: "sm", flip: false },
  { y: 2100, size: "lg", flip: true },
  { y: 2280, size: "md", flip: false },
  { y: 2440, size: "sm", flip: true },
  { y: 2600, size: "lg", flip: false },
  { y: 2780, size: "md", flip: true },
  { y: 2940, size: "sm", flip: false },
  { y: 3100, size: "lg", flip: true },
  { y: 3280, size: "md", flip: false },
  { y: 3450, size: "sm", flip: true },
  { y: 3620, size: "lg", flip: false },
  { y: 3800, size: "md", flip: true },
];

const rightLeaves = [
  { y: 150, size: "md", flip: true },
  { y: 310, size: "lg", flip: false },
  { y: 460, size: "sm", flip: true },
  { y: 600, size: "md", flip: false },
  { y: 760, size: "lg", flip: true },
  { y: 910, size: "sm", flip: false },
  { y: 1060, size: "md", flip: true },
  { y: 1220, size: "lg", flip: false },
  { y: 1380, size: "sm", flip: true },
  { y: 1540, size: "md", flip: false },
  { y: 1700, size: "lg", flip: true },
  { y: 1860, size: "sm", flip: false },
  { y: 2020, size: "md", flip: true },
  { y: 2180, size: "lg", flip: false },
  { y: 2350, size: "sm", flip: true },
  { y: 2520, size: "md", flip: false },
  { y: 2700, size: "lg", flip: true },
  { y: 2860, size: "sm", flip: false },
  { y: 3020, size: "md", flip: true },
  { y: 3200, size: "lg", flip: false },
  { y: 3370, size: "sm", flip: true },
  { y: 3540, size: "md", flip: false },
  { y: 3720, size: "lg", flip: true },
  { y: 3900, size: "sm", flip: false },
];

const flowers = [
  { y: 300, side: "left" as const, color: "#F39EB6", type: "daisy" },
  { y: 900, side: "right" as const, color: "#F7C948", type: "tulip" },
  { y: 1500, side: "left" as const, color: "#C4B5FD", type: "daisy" },
  { y: 2100, side: "right" as const, color: "#F39EB6", type: "tulip" },
  { y: 2700, side: "left" as const, color: "#F7C948", type: "daisy" },
  { y: 3300, side: "right" as const, color: "#C4B5FD", type: "tulip" },
  { y: 3750, side: "left" as const, color: "#F39EB6", type: "daisy" },
];

const LeafSvg = ({
  size,
  flip,
  delay,
}: {
  size: "sm" | "md" | "lg";
  flip: boolean;
  delay: number;
}) => {
  const scale = size === "sm" ? 0.6 : size === "md" ? 0.85 : 1.1;
  return (
    <motion.svg
      width={40 * scale}
      height={28 * scale}
      viewBox="0 0 40 28"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      animate={{ rotate: flip ? [-2, 4, -2] : [2, -4, 2] }}
      transition={{
        duration: 3 + delay * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 0.15,
      }}
    >
      <path
        d="M2,14 Q10,2 20,4 Q30,6 38,14 Q30,22 20,24 Q10,26 2,14 Z"
        fill="#B8DB80"
        opacity={0.5 + (size === "lg" ? 0.15 : size === "md" ? 0.1 : 0)}
      />
      <path
        d="M2,14 Q12,12 20,14 Q28,13 38,14"
        fill="none"
        stroke="#8BBF4A"
        strokeWidth="1"
        opacity={0.6}
      />
      <path
        d="M12,10 Q16,12 20,14"
        fill="none"
        stroke="#8BBF4A"
        strokeWidth="0.6"
        opacity={0.4}
      />
      <path
        d="M28,10 Q24,12 20,14"
        fill="none"
        stroke="#8BBF4A"
        strokeWidth="0.6"
        opacity={0.4}
      />
    </motion.svg>
  );
};

const FlowerSvg = ({ color, type }: { color: string; type: string }) => {
  if (type === "daisy") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="12"
            cy="5"
            rx="3"
            ry="5"
            fill={color}
            opacity="0.6"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
        <circle cx="12" cy="12" r="3.5" fill="#F7C948" opacity="0.8" />
      </svg>
    );
  }
  return (
    <svg width="20" height="26" viewBox="0 0 20 26">
      <path
        d="M10,2 Q4,8 4,14 Q4,22 10,24 Q16,22 16,14 Q16,8 10,2 Z"
        fill={color}
        opacity="0.55"
      />
      <path
        d="M10,10 L10,24"
        stroke="#8BBF4A"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
};

const VineBorders = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden hidden md:block">
      {/* Left vine stem */}
      <svg
        className="absolute left-[18px] top-0 h-full w-[4px]"
        preserveAspectRatio="none"
      >
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="100%"
          stroke="#8BBF4A"
          strokeWidth="2.5"
          strokeDasharray="12 8"
          opacity="0.3"
        />
      </svg>

      {/* Right vine stem */}
      <svg
        className="absolute right-[18px] top-0 h-full w-[4px]"
        preserveAspectRatio="none"
      >
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="100%"
          stroke="#8BBF4A"
          strokeWidth="2.5"
          strokeDasharray="12 8"
          opacity="0.3"
        />
      </svg>

      {/* Left side leaves */}
      {leftLeaves.map((leaf, i) => (
        <div
          key={`ll-${i}`}
          className="absolute"
          style={{ top: leaf.y, left: 6 }}
        >
          <LeafSvg
            size={leaf.size as "sm" | "md" | "lg"}
            flip={leaf.flip}
            delay={i}
          />
        </div>
      ))}

      {/* Right side leaves */}
      {rightLeaves.map((leaf, i) => (
        <div
          key={`rl-${i}`}
          className="absolute"
          style={{ top: leaf.y, right: 6 }}
        >
          <LeafSvg
            size={leaf.size as "sm" | "md" | "lg"}
            flip={!leaf.flip}
            delay={i + 5}
          />
        </div>
      ))}

      {/* Flowers scattered on the vines */}
      {flowers.map((flower, i) => (
        <motion.div
          key={`f-${i}`}
          className="absolute"
          style={{
            top: flower.y,
            ...(flower.side === "left" ? { left: 8 } : { right: 8 }),
          }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          <FlowerSvg color={flower.color} type={flower.type} />
        </motion.div>
      ))}

      {/* Small curly tendrils on left vine */}
      {[160, 580, 1000, 1420, 1850, 2300, 2750, 3200, 3650].map((y, i) => (
        <motion.svg
          key={`tl-${i}`}
          className="absolute"
          style={{ top: y, left: 20 }}
          width="20"
          height="30"
          viewBox="0 0 20 30"
          animate={{ rotate: [0, 8, -4, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        >
          <path
            d="M0,15 Q8,5 12,10 Q16,16 10,20 Q6,24 8,28"
            fill="none"
            stroke="#8BBF4A"
            strokeWidth="1.2"
            opacity="0.4"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}

      {/* Small curly tendrils on right vine */}
      {[240, 660, 1100, 1540, 1980, 2420, 2880, 3340, 3780].map((y, i) => (
        <motion.svg
          key={`tr-${i}`}
          className="absolute"
          style={{ top: y, right: 20 }}
          width="20"
          height="30"
          viewBox="0 0 20 30"
          animate={{ rotate: [0, -8, 4, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        >
          <path
            d="M20,15 Q12,5 8,10 Q4,16 10,20 Q14,24 12,28"
            fill="none"
            stroke="#8BBF4A"
            strokeWidth="1.2"
            opacity="0.4"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}
    </div>
  );
};

export default VineBorders;
