import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-coral to-peach rounded-xl flex items-center justify-center shadow-glow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-foreground">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          Superpowers starting $9.99/month.<br />
          Free for 7 days.
        </h2>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <Button variant="hero" size="default" className="text-sm">
            Get started now
          </Button>
          <Button variant="heroDark" size="default" className="text-sm">
            More about Setapp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
