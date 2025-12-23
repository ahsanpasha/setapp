import { Button } from "@/components/ui/button";
import { Apple, Monitor } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Floating stickers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Work with Macs sticker */}
        <div className="absolute top-32 left-[5%] sticker sticker-rotate-left animate-float" style={{ animationDelay: '0s' }}>
          <div className="bg-coral text-foreground px-4 py-3 rounded-2xl font-bold text-sm">
            <span className="block text-xs opacity-80">WORK</span>
            <span className="block">WITH</span>
            <span className="block">MACS</span>
          </div>
        </div>

        {/* AI Powered sticker */}
        <div className="absolute top-48 left-[12%] sticker sticker-rotate-slight-right animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-peach text-background px-4 py-2 rounded-2xl font-bold text-xs">
            <span className="block">ADD AI</span>
            <span className="block opacity-70">POWER</span>
          </div>
        </div>

        {/* Boost Teamwork sticker */}
        <div className="absolute top-72 left-[3%] sticker sticker-rotate-left animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-yellow text-background px-4 py-3 rounded-2xl font-bold text-sm">
            <span className="block text-xs">BOOST</span>
            <span className="block">TEAMWORK</span>
          </div>
        </div>

        {/* Stay Secure sticker */}
        <div className="absolute top-96 left-[8%] sticker sticker-rotate-slight-left animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="bg-mint text-background px-4 py-3 rounded-2xl font-bold text-sm">
            <span className="block text-xs">STAY</span>
            <span className="block">SECURE</span>
          </div>
        </div>

        {/* Fix WiFi sticker */}
        <div className="absolute top-32 right-[5%] sticker sticker-rotate-right animate-float" style={{ animationDelay: '0.3s' }}>
          <div className="bg-lavender text-background px-4 py-3 rounded-2xl font-bold text-sm">
            <span className="block text-xs">FIX WIFI</span>
            <span className="block">📶</span>
          </div>
        </div>

        {/* Plan Your Day sticker */}
        <div className="absolute top-48 right-[12%] sticker sticker-rotate-slight-left animate-float" style={{ animationDelay: '0.8s' }}>
          <div className="bg-sky text-background px-4 py-3 rounded-2xl font-bold text-sm">
            <span className="block text-xs">PLAN</span>
            <span className="block">YOUR</span>
            <span className="block">DAY</span>
          </div>
        </div>

        {/* Code Easier sticker */}
        <div className="absolute top-72 right-[3%] sticker sticker-rotate-right animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="bg-coral text-foreground px-4 py-3 rounded-2xl font-bold text-sm">
            <span className="block text-xs">CODE</span>
            <span className="block">EASIER</span>
          </div>
        </div>

        {/* Manage Your Mac sticker */}
        <div className="absolute top-96 right-[8%] sticker sticker-rotate-slight-right animate-float" style={{ animationDelay: '1.8s' }}>
          <div className="bg-peach text-background px-4 py-3 rounded-2xl font-bold text-sm">
            <span className="block text-xs">MANAGE</span>
            <span className="block">YOUR MAC</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-coral to-peach rounded-2xl flex items-center justify-center shadow-glow">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-foreground">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
          Dozens of apps.<br />
          One subscription.<br />
          <span className="text-muted-foreground">$9.99</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-6">
          <Button variant="hero" size="lg" className="gap-2">
            Try free for 7 days
          </Button>
          <div className="flex items-center gap-3">
            <Apple className="w-6 h-6 text-muted-foreground" />
            <Monitor className="w-6 h-6 text-muted-foreground" />
            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs font-bold text-muted-foreground">G</span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Power up your workflow with Setapp, a curated collection of Mac and iOS apps.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
