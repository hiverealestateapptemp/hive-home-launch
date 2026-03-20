import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FeatureRowProps {
  title: string;
  description: string;
  media: ReactNode;
  reversed?: boolean;
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FeatureRow = ({ title, description, media, reversed = false }: FeatureRowProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 30 : -30, filter: "blur(4px)" }}
        animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, ease }}
        className="flex-1 text-center lg:text-left"
      >
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
          style={{ textWrap: "balance" }}
        >
          {title}
        </h2>
        <p className="mt-4 text-lg text-warm-gray leading-relaxed max-w-md mx-auto lg:mx-0">
          {description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="flex-1 flex justify-center"
      >
        {media}
      </motion.div>
    </div>
  );
};

export default FeatureRow;
