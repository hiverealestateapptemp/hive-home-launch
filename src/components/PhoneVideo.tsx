import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PhoneVideoProps {
  src: string;
  alt?: string;
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const PhoneVideo = ({ src, alt = "App demo" }: PhoneVideoProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease }}
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
