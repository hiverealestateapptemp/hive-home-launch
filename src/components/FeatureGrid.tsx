import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MaterialIcon from "@/components/MaterialIcon";

const features = [
  {
    icon: "home",
    title: "Post Listings",
    description: "Share homes, condos, and investment properties with beautiful photo galleries.",
  },
  {
    icon: "chat_bubble",
    title: "Direct Messaging",
    description: "Connect with buyers, sellers, and agents instantly with in-app chat.",
  },
  {
    icon: "group",
    title: "Agent Network",
    description: "Join as an agent and grow your client base through social discovery.",
  },
  {
    icon: "videocam",
    title: "Live Walkthroughs",
    description: "View real-time video tours of homes you're interested in.",
  },
];

const FeatureGrid = ({ dark = false }: { dark?: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className={`group p-6 rounded-2xl transition-all duration-300 hover-glow cursor-default ${
            dark
              ? "glass-card hover:border-honey/30"
              : "glass-card-light shadow-card hover:border-honey/40"
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-honey/15 flex items-center justify-center mb-4 group-hover:bg-honey/25 group-hover:scale-110 transition-all duration-300">
            <MaterialIcon name={f.icon} size={24} className="text-honey" />
          </div>
          <h3 className={`font-display text-lg font-bold ${dark ? "text-on-surface-dark" : "text-foreground"}`}>{f.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-on-surface-dark-muted" : "text-warm-gray"}`}>{f.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
