import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hiveLogo from "@/assets/hive-logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Support", href: "/support" },
  {
    label: "Privacy",
    href: "https://app.termly.io/policy-viewer/policy.html?policyUUID=b2836348-d228-4e08-b24b-8d5cf57a0d33",
    external: true,
  },
  {
    label: "Terms",
    href: "https://app.termly.io/policy-viewer/policy.html?policyUUID=3a783d46-799c-43f8-bf67-2d6f1fa55ac8",
    external: true,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <img src={hiveLogo} alt="Hive" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 flex flex-col items-center justify-center w-10 h-10 gap-[6px] rounded-lg hover:bg-muted transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block w-5 h-[2px] bg-foreground rounded-full origin-center"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="block w-5 h-[2px] bg-foreground rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
