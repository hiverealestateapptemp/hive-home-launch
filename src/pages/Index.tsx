import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureRow from "@/components/FeatureRow";
import FeatureGrid from "@/components/FeatureGrid";
import PhoneVideo from "@/components/PhoneVideo";
import PhoneScreenshot from "@/components/PhoneScreenshot";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import honeycomb from "@/assets/honeycomb-bubble.svg";

const ComingSoon = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <img src={honeycomb} alt="" className="w-12 h-12 mx-auto mb-6 opacity-60" />
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        Coming Soon
      </h2>
      <p className="mt-4 text-lg text-warm-gray max-w-md mx-auto">
        Hive will soon be available on the App Store. Stay tuned for launch updates.
      </p>
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Feature Grid */}
      <section id="features" className="container py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Everything you need
          </h2>
          <p className="mt-3 text-warm-gray text-lg">Built for buyers, sellers, and agents alike.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      {/* Feature Rows with videos/screenshots */}
      <section className="bg-card border-y border-border">
        <div className="container py-20 md:py-28 space-y-24 md:space-y-32">
          <FeatureRow
            title="Browse & Post Listings"
            description="Showcase your properties with rich photo galleries and reach buyers directly through the social feed."
            media={<PhoneScreenshot />}
          />
          <FeatureRow
            title="Chat with Agents & Buyers"
            description="No more phone tag. Start real conversations instantly with in-app messaging designed for real estate."
            media={<PhoneVideo src="/videos/agent-buyer-chat.mp4" alt="Agent and buyer chat demo" />}
            reversed
          />
          <FeatureRow
            title="Live Video Walkthroughs"
            description="Tour homes from anywhere with live video. Ask questions in real time and get the feel of a property before visiting."
            media={<PhoneVideo src="/videos/live-walkthrough.mp4" alt="Live walkthrough demo" />}
          />
          <FeatureRow
            title="Join as an Agent"
            description="Build your presence, connect with qualified buyers, and grow your business on a platform made for real estate pros."
            media={<PhoneVideo src="/videos/join-as-agent.mp4" alt="Agent onboarding demo" />}
            reversed
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="container py-20 md:py-28">
        <ComingSoon />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
