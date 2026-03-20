import { motion } from "framer-motion";
import honeycomb from "@/assets/honeycomb-bubble.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-honey/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-honey/8 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-honey/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <img src={honeycomb} alt="" className="w-16 h-16 mx-auto animate-float" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-[0.95]"
        >
          Real conversations.{" "}
          <span className="text-gradient-honey text-shimmer bg-clip-text text-transparent" style={{
            backgroundImage: "linear-gradient(135deg, hsl(44 100% 58%), hsl(30 100% 55%), hsl(44 100% 62%), hsl(30 100% 55%))",
            backgroundSize: "200% 100%",
          }}>
            Real homes.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-warm-gray max-w-lg mx-auto leading-relaxed"
        >
          A social platform for modern real estate. Discover listings, connect with agents, and explore homes in real time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-foreground bg-gradient-honey shadow-honey hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            Explore Features
          </a>
          <a
            href="#coming-soon"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-foreground glass-card-light shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            Coming Soon
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
