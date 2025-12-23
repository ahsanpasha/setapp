import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-coral rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-foreground">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">Setapp</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              How it works
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              All Apps
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Pricing
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              For Teams
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Blog
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-xs">
              Podcast
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="#" className="hidden md:block text-muted-foreground hover:text-foreground transition-colors text-xs">
              My Mac
            </a>
            <Button variant="hero" size="sm" className="hidden md:flex text-xs h-8 px-4">
              Try Free
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
