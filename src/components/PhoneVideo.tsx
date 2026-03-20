import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PhoneVideoProps {
  src: string;
  alt?: string;
}

const PhoneVideo = ({ src, alt = "App demo" }: PhoneVideoProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-[260px] sm:w-[280px]"
    >
      <div className="phone-mockup overflow-hidden bg-charcoal">
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-[2rem]"
          aria-label={alt}
        />
      </div>
    </motion.div>
  );
};

export default PhoneVideo;
