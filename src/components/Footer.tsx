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
              Homes By Hive, Inc.
            </p>
            <p className="text-sm text-warm-gray mt-1">
              4225 Executive Square, #600 6011
              <br />
              La Jolla, CA 92037
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
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
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="mailto:hello@homesbyhive.com" className="hover:text-foreground transition-colors">
              hello@homesbyhive.com
            </a>
            <a href="tel:+16192776017" className="hover:text-foreground transition-colors">
              (619) 277-6017
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
