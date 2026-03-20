import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureRow from "@/components/FeatureRow";
import FeatureGrid from "@/components/FeatureGrid";
import PhoneVideo from "@/components/PhoneVideo";
import PhoneScreenshot from "@/components/PhoneScreenshot";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const ComingSoon = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease }}
      className="text-center"
    >
      <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-honey/10 text-honey-dark border border-honey/20 mb-8">
        App Store
      </div>
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
        style={{ textWrap: "balance" }}
      >
        Coming Soon
      </h2>
      <p className="mt-4 text-lg text-warm-gray max-w-md mx-auto">
        Hive will soon be available on the App Store. Stay tuned for launch
        updates.
      </p>
    </motion.div>
  );
};

const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, ease }}
      className="text-center mb-14"
    >
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>
      <p className="mt-3 text-warm-gray text-lg">{subtitle}</p>
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Feature Grid */}
      <section id="features" className="container py-24 md:py-32">
        <SectionHeading
          title="Everything you need"
          subtitle="Built for buyers, sellers, and agents alike."
        />
        <div className="max-w-2xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      {/* Feature Rows with videos/screenshots */}
      <section className="bg-card border-y border-border/60">
        <div className="container py-24 md:py-32 space-y-28 md:space-y-36">
          <FeatureRow
            title="Browse & Post Listings"
            description="Showcase your properties with rich photo galleries and reach buyers directly through the social feed."
            media={<PhoneScreenshot />}
          />
          <FeatureRow
            title="Chat with Agents & Buyers"
            description="No more phone tag. Start real conversations instantly with in-app messaging designed for real estate."
            media={
              <PhoneVideo
                src="/videos/agent-buyer-chat.mp4"
                alt="Agent and buyer chat demo"
              />
            }
            reversed
          />
          <FeatureRow
            title="Live Video Walkthroughs"
            description="Tour homes from anywhere with live video. Ask questions in real time and get the feel of a property before visiting."
            media={
              <PhoneVideo
                src="/videos/live-walkthrough.mp4"
                alt="Live walkthrough demo"
              />
            }
          />
          <FeatureRow
            title="Join as an Agent"
            description="Build your presence, connect with qualified buyers, and grow your business on a platform made for real estate pros."
            media={
              <PhoneVideo
                src="/videos/join-as-agent.mp4"
                alt="Agent onboarding demo"
              />
            }
            reversed
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="container py-24 md:py-32">
        <ComingSoon />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
