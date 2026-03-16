import { motion } from "framer-motion";
import { Code, Layout, Palette, Terminal, FileCode, Boxes } from "lucide-react";

const skills = [
  { name: "HTML5", level: 75, icon: FileCode, color: "bg-clay-pink-bold/20" },
  { name: "CSS3", level: 65, icon: Palette, color: "bg-clay-green/30" },
  { name: "JavaScript", level: 55, icon: Terminal, color: "bg-clay-pink-soft" },
  { name: "React", level: 40, icon: Boxes, color: "bg-cream" },
  { name: "Responsive Design", level: 70, icon: Layout, color: "bg-clay-green/30" },
  { name: "Version Control", level: 50, icon: Code, color: "bg-clay-pink-soft" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-clay-pink-bold text-center font-display mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="text-center font-hand text-lg text-foreground/60 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Technologies and tools I work with
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="bg-cream clay-surface-sm p-6 group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  y: -6,
                  boxShadow:
                    "12px 12px 24px #dcdbb8, -12px -12px 24px #ffffff, inset 8px 8px 16px rgba(0,0,0,0.05)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`${skill.color} p-3 rounded-[16px]`}
                    whileHover={{ rotate: 12 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon size={22} className="text-foreground" />
                  </motion.div>
                  <span className="font-display text-xl font-bold text-foreground">
                    {skill.name}
                  </span>
                </div>
                <div className="w-full h-3 bg-clay-pink-soft rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-clay-green"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    style={{
                      boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.1), inset 2px 2px 4px rgba(255,255,255,0.5)",
                    }}
                  />
                </div>
                <span className="font-hand text-sm text-foreground/50 mt-2 block text-right">
                  {skill.level}%
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
