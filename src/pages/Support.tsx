import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import MaterialIcon from "@/components/MaterialIcon";

const sections = [
  {
    icon: "mail",
    title: "Contact Support",
    content: (
      <>
        <p className="text-warm-gray">
          Email us at{" "}
          <a href="mailto:support@hive.com" className="text-honey-dark font-medium hover:underline">
            support@hive.com
          </a>
        </p>
        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
          <MaterialIcon name="schedule" size={16} />
          <span>Typical response time: 24–48 hours</span>
        </div>
      </>
    ),
  },
  {
    icon: "person_off",
    title: "Login Issues",
    content: <p className="text-warm-gray">Ensure you are using the correct email or Apple login.</p>,
  },
  {
    icon: "upload",
    title: "Listing Upload Problems",
    content: <p className="text-warm-gray">Make sure images are under the allowed file size.</p>,
  },
  {
    icon: "warning",
    title: "Report Abuse",
    content: <p className="text-warm-gray">Email support with details about the issue.</p>,
  },
];

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-28 pb-20 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-4xl font-bold text-foreground tracking-tight">Support</h1>
          <p className="mt-3 text-warm-gray text-lg">We're here to help. Reach out anytime.</p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-honey-light flex items-center justify-center">
                  <MaterialIcon name={s.icon} size={20} className="text-honey-dark" />
                </div>
                <h2 className="font-display text-lg font-bold text-foreground">{s.title}</h2>
              </div>
              {s.content}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-honey-light/50 border border-honey/20"
        >
          <h2 className="font-display text-lg font-bold text-foreground">Account Deletion</h2>
          <p className="mt-2 text-warm-gray">
            To delete your account and associated data, email{" "}
            <a href="mailto:privacy@hive.com" className="text-honey-dark font-medium hover:underline">
              privacy@hive.com
            </a>
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
