import { useState } from "react";
import { ChevronLeft, ChevronRight, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
      author: "Anastasiia Tka...",
      handle: "@anastasiatka...",
      platform: "twitter",
    },
    {
      text: "My favorite ❤️ apps from @Setapp: Espanso, CleanMyMac X, Paste, MindNode, Swift Publisher.",
      author: "Marcelo Santos",
      handle: "@marcelosant...",
      platform: "twitter",
    },
    {
      text: "For those of you that wonder where I discovered all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
      author: "Mason Oh! Secret",
      handle: "YouTube content creator",
      platform: "youtube",
    },
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0">
            Setapp in your words.
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Who is talking about Setapp:</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-sky flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter className="w-4 h-4 text-foreground" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-coral flex items-center justify-center hover:opacity-80 transition-opacity">
                <Youtube className="w-4 h-4 text-foreground" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="w-4 h-4 text-foreground" />
              </a>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <p className="text-foreground text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.handle}</p>
                </div>
                {testimonial.platform === 'twitter' && (
                  <Twitter className="w-5 h-5 text-sky" />
                )}
                {testimonial.platform === 'youtube' && (
                  <Youtube className="w-5 h-5 text-coral" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Page indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentPage ? 'bg-foreground' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
