import { motion } from "framer-motion";
import {
  BookOpen,
  PenLine,
  Bike,
  Code,
  Trophy,
  PersonStanding,
  Newspaper,
} from "lucide-react";
import stickersImg from "@/assets/stickers-sheet.png";

const hobbies = [
  { icon: BookOpen, label: "Diary Writing", color: "bg-clay-pink-soft" },
  { icon: PenLine, label: "Journaling", color: "bg-cream" },
  { icon: Bike, label: "Cycling", color: "bg-clay-green/30" },
  { icon: Code, label: "Coding", color: "bg-clay-pink-soft" },
  { icon: Trophy, label: "Badminton", color: "bg-cream" },
  { icon: PersonStanding, label: "Athletics", color: "bg-clay-green/30" },
  { icon: Newspaper, label: "Current Affairs", color: "bg-clay-pink-soft" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const HobbiesSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <motion.img
        src={stickersImg}
        alt=""
        className="absolute right-0 top-10 w-60 md:w-80 opacity-20 pointer-events-none"
        animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-clay-pink-bold text-center font-display mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Interests & Hobbies
        </motion.h2>
        <motion.p
          className="text-center font-hand text-lg text-foreground/60 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Beyond the code — things that keep me inspired
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.label}
                className={`${hobby.color} sticker px-6 py-4 font-hand text-lg text-foreground cursor-default flex items-center gap-2`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                  boxShadow: "6px 6px 20px rgba(0,0,0,0.2)",
                }}
              >
                <Icon size={20} className="text-clay-pink-bold" />
                {hobby.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HobbiesSection;
