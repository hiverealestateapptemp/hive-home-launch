import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FeatureRowProps {
  title: string;
  description: string;
  media: ReactNode;
  reversed?: boolean;
}

const FeatureRow = ({ title, description, media, reversed = false }: FeatureRowProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-warm-gray leading-relaxed max-w-md mx-auto lg:mx-0">
          {description}
        </p>
      </motion.div>
      <div className="flex-1 flex justify-center">{media}</div>
    </div>
  );
};

export default FeatureRow;
