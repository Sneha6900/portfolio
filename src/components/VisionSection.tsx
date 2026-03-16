import { motion } from "framer-motion";
import { Bot, Cpu, Lightbulb } from "lucide-react";
import robotImg from "@/assets/robot-garden.png";

const VisionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="bg-clay-green/40 clay-surface p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.img
                src={robotImg}
                alt="Clay robot illustration"
                className="w-64 md:w-80 drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-cream/60 p-3 rounded-full">
                  <Bot size={24} className="text-clay-pink-bold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-clay-pink-bold font-display leading-tight">
                  AI & Robotics: The Next Decade
                </h2>
              </div>
              <div className="font-hand text-lg text-foreground/80 space-y-4">
                <motion.div
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Cpu size={18} className="text-clay-pink-bold mt-1 shrink-0" />
                  <p>
                    The convergence of artificial intelligence and robotics is set to redefine daily life — from personalized AI assistants that adapt to individual routines to autonomous systems that streamline urban mobility.
                  </p>
                </motion.div>
                <motion.div
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Lightbulb size={18} className="text-clay-pink-bold mt-1 shrink-0" />
                  <p>
                    Smart homes, AI-driven education platforms, and self-navigating vehicles will transition from prototype to mainstream within the next decade — reshaping how we live, learn, and commute.
                  </p>
                </motion.div>
                <motion.p
                  className="font-bold text-foreground/90 pl-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  As an engineering student, I'm actively working toward contributing to this transformation — one project at a time.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
