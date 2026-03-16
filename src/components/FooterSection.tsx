import { motion } from "framer-motion";
import { Linkedin, Mail, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-4 text-center">
      <motion.div
        className="max-w-2xl mx-auto bg-clay-pink-soft clay-surface-sm p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-clay-pink-bold font-display mb-3">
          Let's Connect
        </h2>
        <p className="font-hand text-lg text-foreground/70 mb-6">
          Open to opportunities, collaborations, and meaningful conversations.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <motion.a
            href="https://www.linkedin.com/in/sneha-shree-das-586104382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-button !px-5 !py-3 text-primary-foreground flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:dassnehashree859@gmail.com"
            className="clay-button !px-5 !py-3 text-primary-foreground flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Email
          </motion.a>
        </div>

        <p className="font-hand text-foreground/50 text-sm flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-clay-pink-bold" /> and lots of clay
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
