import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import deskScene from "@/assets/desk-scene.png";

const clayTransition = { type: "spring" as const, stiffness: 300, damping: 20 };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Desk scene background */}
      <motion.img
        src={deskScene}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl opacity-30 pointer-events-none"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1.2 }}
      />

      {/* Profile totem */}
      <motion.div
        className="relative z-10 mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ...clayTransition }}
        whileHover={{ scale: 0.95 }}
      >
        <div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-clay-pink-soft"
          style={{
            boxShadow:
              "12px 12px 24px #d1d0b3, -12px -12px 24px #ffffff, inset 8px 8px 16px rgba(0,0,0,0.05)",
          }}
        >
          <img src={profileImg} alt="Sneha Shree Das" className="w-full h-full object-cover" />
        </div>
        {/* Decorative ring */}
        <motion.div
          className="absolute inset-0 -m-3 rounded-full border-4 border-clay-green/40"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 -m-6 rounded-full border-2 border-clay-pink-bold/20"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="relative z-10 text-5xl md:text-7xl font-bold text-clay-pink-bold text-center font-display"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, ...clayTransition }}
      >
        Sneha Shree Das
      </motion.h1>

      <motion.p
        className="relative z-10 text-xl md:text-2xl text-foreground/80 text-center mt-4 max-w-2xl font-hand"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, ...clayTransition }}
      >
        Frontend Developer &bull; Engineering Student &bull; Creative Thinker
      </motion.p>

      {/* Social links */}
      <motion.div
        className="relative z-10 flex gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, ...clayTransition }}
      >
        <motion.a
          href="https://www.linkedin.com/in/sneha-shree-das-586104382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="clay-button !px-4 !py-3 text-primary-foreground flex items-center gap-2"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={clayTransition}
        >
          <Linkedin size={20} />
          <span className="text-sm font-bold">LinkedIn</span>
        </motion.a>
        <motion.a
          href="mailto:sneha@example.com"
          className="clay-button !px-4 !py-3 text-primary-foreground flex items-center gap-2"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={clayTransition}
        >
          <Mail size={20} />
          <span className="text-sm font-bold">Contact</span>
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 z-10 flex flex-col items-center text-foreground/50 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-hand text-sm mb-1">Scroll Down</span>
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
