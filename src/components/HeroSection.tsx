import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-honey/8 blur-[120px]" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease }}
          className="mb-10"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-honey/10 text-honey-dark border border-honey/20">
            Coming to iOS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-[-0.035em] text-foreground leading-[0.95]"
          style={{ textWrap: "balance" }}
        >
          Real conversations.
          <br />
          <span className="text-gradient-honey">Real homes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-7 text-lg md:text-xl text-warm-gray max-w-lg mx-auto leading-relaxed"
          style={{ textWrap: "pretty" }}
        >
          A social platform for modern real estate. Discover listings, connect
          with agents, and explore homes in real time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#features"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-primary-foreground bg-gradient-honey shadow-honey hover:shadow-lg active:scale-[0.97] transition-all duration-300"
          >
            Explore Features
          </a>
          <a
            href="#coming-soon"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-foreground bg-card border border-border shadow-card hover:shadow-lg hover:border-honey/30 active:scale-[0.97] transition-all duration-300"
          >
            Coming Soon
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
