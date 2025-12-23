import { Twitter, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Apps: ['How it Works', 'All Apps', 'Categories', 'Setapp for Teams', 'Blog', 'Setapp Mobile'],
    About: ['Company', 'Tech specs', 'Ty Developers', 'Terms of Use', 'Gift Cards', 'Student Discount', 'Affiliate Program', 'For Developers', 'Any App Ideas?'],
    'Categories and Topics': ['Setapp wonders desktop', 'Control Z is more', 'Uninstaller', 'GoodNotes alternatives', 'Desktop widgets', 'iPhone on Mac', 'Android on Mac'],
  };

  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Logo and newsletter */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground">Setapp</span>
            </div>
            
            <p className="text-muted-foreground text-xs mb-4">
              All prices are in USD. Unsubscribe at any time.
            </p>

            {/* Newsletter signup */}
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors">
                <span className="text-background">→</span>
              </button>
            </div>

            {/* Platform links */}
            <div className="space-y-1">
              <a href="#" className="block text-muted-foreground hover:text-foreground text-xs transition-colors">
                📱 Setapp Mobile
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-foreground font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs mb-4 md:mb-0">
            © 2024 Setapp Limited, a MacPaw company. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-muted-foreground text-xs">English ▾</span>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
          <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
