import { Link } from "react-router-dom";
import hiveLogo from "@/assets/hive-logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img src={hiveLogo} alt="Hive" className="h-6 mb-3" />
            <p className="text-sm text-warm-gray">
              Discover homes. Share listings. Connect with buyers and agents.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
            <a
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=b2836348-d228-4e08-b24b-8d5cf57a0d33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3a783d46-799c-43f8-bf67-2d6f1fa55ac8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-gray">
          <p>© {new Date().getFullYear()} Hive. All rights reserved.</p>
          <a href="mailto:support@hive.com" className="hover:text-foreground transition-colors">
            support@hive.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
