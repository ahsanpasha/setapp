import { Twitter, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Apps: ['How it Works', 'All Apps', 'Categories', 'Setapp for Teams', 'Blog', 'Setapp Mobile'],
    About: ['Company', 'Tech specs', 'Ty Developers', 'Terms of Use', 'Gift Cards', 'Student Discount', 'Affiliate Program', 'For Developers', 'Any App Ideas?'],
    'Categories and Topics': ['Setapp wonders desktop', 'Control Z is more', 'Uninstaller', 'GoodNotes alternatives', 'Desktop widgets', 'iPhone on Mac', 'Android on Mac'],
  };

  return (
    <footer className="bg-background border-t border-border py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Logo and newsletter */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-coral rounded-lg flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-foreground sm:w-4 sm:h-4">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-foreground">Setapp</span>
            </div>

            <p className="text-muted-foreground text-[10px] mb-2 sm:mb-3 max-w-xs">
              All prices are in USD. Unsubscribe at any time.
            </p>

            {/* Newsletter signup */}
            <div className="flex gap-2 mb-3 sm:mb-4 max-w-full sm:max-w-xs">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-secondary border border-border rounded-full px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors flex-shrink-0">
                <span className="text-background text-sm">→</span>
              </button>
            </div>

            {/* Platform links */}
            <div className="space-y-1">
              <a href="#" className="block text-muted-foreground hover:text-foreground text-[10px] transition-colors">
                📱 Setapp Mobile
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground font-semibold text-xs mb-2 sm:mb-3">{title}</h4>
              <ul className="space-y-1 sm:space-y-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground text-[10px] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 sm:pt-6 border-t border-border gap-3 sm:gap-4">
          <p className="text-muted-foreground text-[10px] text-center md:text-left">
            © 2024 Setapp Limited, a MacPaw company. All rights reserved.
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-[10px]">English ▾</span>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-3 justify-center md:justify-start">
          <a href="#" className="text-muted-foreground hover:text-foreground text-[10px] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-[10px] transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
