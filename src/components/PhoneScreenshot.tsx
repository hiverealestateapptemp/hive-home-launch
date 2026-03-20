import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import postListings from "@/assets/post-listings.png";

const ease = [0.16, 1, 0.3, 1];

const PhoneScreenshot = () => {
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
        <img
          src={postListings}
          alt="Property listings screen"
          className="w-full rounded-[2rem]"
        />
      </div>
    </motion.div>
  );
};

export default PhoneScreenshot;
