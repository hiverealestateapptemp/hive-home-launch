import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import hiveLogo from "@/assets/hive-logo.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Support", to: "/support" },
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
        <Link to="/" className="flex items-center gap-2">
          <img src={hiveLogo} alt="Hive" className="h-8" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.label}
                to={l.to!}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </NavLink>
            )
          )}
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
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div>
              {navLinks.map((l) =>
                l.external ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ) : (
                  <NavLink
                    key={l.label}
                    to={l.to!}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;