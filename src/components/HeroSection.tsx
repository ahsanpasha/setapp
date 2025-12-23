import { Button } from "@/components/ui/button";
import { Apple, Monitor } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[580px] flex items-center pt-16 overflow-hidden bg-background">
      {/* Floating stickers - Left side */}
      <div className="absolute left-[2%] top-[18%] z-20">
        <div className="bg-coral text-foreground px-4 py-3 rounded-2xl font-bold text-xs transform -rotate-12 shadow-card animate-float">
          <span className="block text-[9px] opacity-80 leading-tight">WORK</span>
          <span className="block text-[11px] leading-tight">WITH</span>
          <span className="block text-[11px] leading-tight">MACS</span>
        </div>
      </div>

      <div className="absolute left-[9%] top-[35%] z-20">
        <div className="bg-peach text-background px-3 py-2 rounded-xl font-bold text-[10px] transform rotate-6 shadow-card animate-float" style={{ animationDelay: '0.5s' }}>
          <span className="block text-[9px] leading-tight">ADD AI</span>
          <span className="block text-[9px] opacity-70 leading-tight">POWER</span>
        </div>
      </div>

      <div className="absolute left-[1%] top-[52%] z-20">
        <div className="bg-yellow text-background px-4 py-3 rounded-2xl font-bold text-xs transform -rotate-3 shadow-card animate-float" style={{ animationDelay: '1s' }}>
          <span className="block text-[9px] leading-tight">BOOST</span>
          <span className="block text-[11px] leading-tight">TEAMWORK</span>
        </div>
      </div>

      <div className="absolute left-[5%] top-[70%] z-20">
        <div className="bg-mint text-background px-4 py-3 rounded-2xl font-bold text-xs transform -rotate-6 shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
          <span className="block text-[9px] leading-tight">STAY</span>
          <span className="block text-[11px] leading-tight">SECURE</span>
        </div>
      </div>

      {/* Floating stickers - Right side */}
      <div className="absolute right-[2%] top-[15%] z-20">
        <div className="bg-lavender text-background px-4 py-3 rounded-2xl font-bold text-xs transform rotate-12 shadow-card animate-float" style={{ animationDelay: '0.3s' }}>
          <span className="block text-[9px] leading-tight">FIX WIFI</span>
          <span className="text-base">📶</span>
        </div>
      </div>

      <div className="absolute right-[8%] top-[32%] z-20">
        <div className="bg-sky text-background px-4 py-3 rounded-2xl font-bold text-xs transform -rotate-6 shadow-card animate-float" style={{ animationDelay: '0.8s' }}>
          <span className="block text-[9px] leading-tight">PLAN</span>
          <span className="block text-[11px] leading-tight">YOUR</span>
          <span className="block text-[11px] leading-tight">DAY</span>
        </div>
      </div>

      <div className="absolute right-[1%] top-[52%] z-20">
        <div className="bg-peach text-background px-4 py-3 rounded-2xl font-bold text-xs transform rotate-6 shadow-card animate-float" style={{ animationDelay: '1.2s' }}>
          <span className="block text-[9px] leading-tight">MANAGE</span>
          <span className="block text-[11px] leading-tight">YOUR MAC</span>
        </div>
      </div>

      <div className="absolute right-[6%] top-[70%] z-20">
        <div className="bg-coral text-foreground px-4 py-3 rounded-2xl font-bold text-xs transform rotate-8 shadow-card animate-float" style={{ animationDelay: '1.8s' }}>
          <span className="block text-[9px] leading-tight">CODE</span>
          <span className="block text-[11px] leading-tight">EASIER</span>
        </div>
      </div>

      {/* Main content - centered */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center">
        {/* Logo icon */}
        <div className="mb-5 flex justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-coral to-peach rounded-xl flex items-center justify-center shadow-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1 leading-tight">
          Dozens of apps.
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1 leading-tight">
          One subscription.
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-muted-foreground mb-5">
          $9.99
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
          <Button variant="hero" size="sm" className="gap-2 text-xs">
            Try free for 7 days
          </Button>
          <div className="flex items-center gap-2">
            <Apple className="w-4 h-4 text-muted-foreground" />
            <Monitor className="w-4 h-4 text-muted-foreground" />
            <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center">
              <span className="text-[8px] font-bold text-muted-foreground">G</span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-[11px] max-w-xs mx-auto leading-relaxed">
          Power up your workflow with Setapp, a curated collection of Mac and iOS apps.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
