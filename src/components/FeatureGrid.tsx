import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, MessageCircle, Users, Video } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Post Listings",
    description:
      "Share homes, condos, and investment properties with beautiful photo galleries.",
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description:
      "Connect with buyers, sellers, and agents instantly with in-app chat.",
  },
  {
    icon: Users,
    title: "Agent Network",
    description:
      "Join as an agent and grow your client base through social discovery.",
  },
  {
    icon: Video,
    title: "Live Walkthroughs",
    description:
      "View real-time video tours of homes you're interested in.",
  },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const FeatureGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease }}
          className="group relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-lg hover:border-honey/30 active:scale-[0.97] transition-all duration-300 cursor-default"
        >
          <div className="w-11 h-11 rounded-xl bg-honey/10 flex items-center justify-center mb-4 group-hover:bg-honey/15 transition-colors duration-300">
            <f.icon className="w-5 h-5 text-honey-dark" strokeWidth={2} />
          </div>
          <h3 className="font-display text-base font-bold text-foreground tracking-tight">
            {f.title}
          </h3>
          <p className="mt-1.5 text-sm text-warm-gray leading-relaxed">
            {f.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
