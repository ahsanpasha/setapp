import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Logo */}
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
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Superpowers starting $9.99/month.<br />
          Free for 7 days.
        </h2>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg">
            Get started now
          </Button>
          <Button variant="heroDark" size="lg">
            More about Setapp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
