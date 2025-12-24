import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Logo */}
        <div className="mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-coral to-peach rounded-xl flex items-center justify-center shadow-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground sm:w-7 sm:h-7">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
          Superpowers starting $9.99/month.<br />
          Free for 7 days.
        </h2>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <Button variant="hero" size="default" className="text-sm w-full sm:w-auto">
            Get started now
          </Button>
          <Button variant="heroDark" size="default" className="text-sm w-full sm:w-auto">
            More about Setapp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
