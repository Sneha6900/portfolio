import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring" as const, stiffness: 200, damping: 20 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-clay-pink-bold text-center font-display mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            className="bg-clay-pink-soft p-8 clay-surface transform rotate-1"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-clay-pink-bold/20 p-3 rounded-full">
                <GraduationCap size={24} className="text-clay-pink-bold" />
              </div>
              <h3 className="text-2xl font-bold text-clay-pink-bold font-display">Education</h3>
            </div>
            <div className="space-y-4 font-hand text-lg text-foreground/80">
              <motion.div
                className="bg-cream/60 p-4 rounded-[20px]"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-bold text-foreground">Garden City University, Bangalore</p>
                <p>Bachelor of Engineering (Pursuing)</p>
                <p className="text-sm text-foreground/60">Coursework: HTML, CSS, JavaScript</p>
              </motion.div>
              <motion.div
                className="bg-cream/60 p-4 rounded-[20px]"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-bold text-foreground">Kendriya Vidyalaya No.1, Balasore</p>
                <p>Senior Secondary — PCMB Stream</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="bg-clay-green/30 p-8 clay-surface transform -rotate-1"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-clay-green/40 p-3 rounded-full">
                <Briefcase size={24} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-clay-pink-bold font-display">Experience</h3>
            </div>
            <div className="font-hand text-lg text-foreground/80">
              <motion.div
                className="bg-cream/60 p-4 rounded-[20px]"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-bold text-foreground">Frontend Developer Intern</p>
                <p className="text-clay-pink-bold font-bold">Nerds and Geeks</p>
                <p className="mt-2">
                  Building responsive, accessible web experiences with modern frontend technologies and best practices.
                </p>
              </motion.div>
            </div>

            <div className="flex items-center gap-3 mb-4 mt-8">
              <div className="bg-clay-green/40 p-3 rounded-full">
                <Globe size={24} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-clay-pink-bold font-display">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Hindi", "English", "Odia"].map((lang) => (
                <motion.span
                  key={lang}
                  className="bg-cream/80 px-5 py-2 rounded-full font-hand text-foreground border-2 border-clay-green/40"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
