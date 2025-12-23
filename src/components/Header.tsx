import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">Setapp</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              How it works
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              All Apps
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Pricing
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              For Teams
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Blog
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Podcast
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-muted-foreground hover:text-foreground transition-colors text-sm">
              My Mac
            </a>
            <Button variant="hero" size="sm" className="hidden md:flex">
              Try Free
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
