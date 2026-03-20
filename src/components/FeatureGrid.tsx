import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, MessageCircle, Users, Video } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Post Listings",
    description: "Share homes, condos, and investment properties with beautiful photo galleries.",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Connect with buyers, sellers, and agents instantly with in-app chat.",
  },
  {
    icon: Users,
    title: "Agent Network",
    description: "Join as an agent and grow your client base through social discovery.",
  },
  {
    icon: Video,
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
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`group p-6 rounded-2xl border transition-all duration-300 ${
            dark
              ? "bg-surface-dark-high border-border-dark shadow-none hover:border-honey/40"
              : "bg-card border-border shadow-card hover:shadow-lg hover:border-honey/40"
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-honey/15 flex items-center justify-center mb-4 group-hover:bg-honey/25 transition-colors">
            <f.icon className="w-6 h-6 text-honey" />
          </div>
          <h3 className={`font-display text-lg font-bold ${dark ? "text-on-surface-dark" : "text-foreground"}`}>{f.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-on-surface-dark-muted" : "text-warm-gray"}`}>{f.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
