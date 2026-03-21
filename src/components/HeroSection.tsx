import { motion } from "framer-motion";
import honeycomb from "@/assets/honeycomb-bubble.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-honey/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-honey/8 blur-3xl" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img src={honeycomb} alt="" className="w-16 h-16 mx-auto animate-float" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight"
        >
          Real conversations.{" "}
          <span className="text-gradient-honey">Real homes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-warm-gray max-w-xl mx-auto leading-relaxed"
        >
          A social platform for modern real estate. Discover listings, connect with agents, and explore homes in real time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-primary-foreground bg-gradient-honey shadow-honey hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Explore Features
          </button>
          <button
            onClick={() => document.getElementById("coming-soon")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-foreground bg-card border border-border shadow-card hover:shadow-lg transition-all duration-300"
          >
            Coming Soon
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
