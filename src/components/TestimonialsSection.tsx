import { useState } from "react";
import { ChevronLeft, ChevronRight, Twitter, Youtube } from "lucide-react";
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
      text: "For those of you that wonder where I discover all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
      author: "Mason Oh! Secret",
      handle: "YouTube content creator",
      platform: "youtube",
    },
  ];

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % 5);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + 5) % 5);

  return (
    <section className="py-16 px-6 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-4 md:mb-0">
            Setapp in your words.
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-background/60">
              <span>Who is talking about Setapp:</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-[#1da1f2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter className="w-3.5 h-3.5 text-foreground" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity">
                <Youtube className="w-3.5 h-3.5 text-foreground" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-[#ff4500] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-foreground text-xs font-bold">r/</span>
              </a>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                className="rounded-full h-8 w-8 bg-transparent border-background/20 text-background/60 hover:bg-background/10 hover:text-background"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                className="rounded-full h-8 w-8 bg-transparent border-background/20 text-background/60 hover:bg-background/10 hover:text-background"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-foreground rounded-2xl p-5 hover:shadow-lg transition-shadow"
            >
              <p className="text-background text-sm leading-relaxed mb-5">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-background font-medium text-sm">{testimonial.author}</p>
                  <p className="text-background/60 text-xs">{testimonial.handle}</p>
                </div>
                {testimonial.platform === 'twitter' && (
                  <Twitter className="w-4 h-4 text-[#1da1f2]" />
                )}
                {testimonial.platform === 'youtube' && (
                  <Youtube className="w-4 h-4 text-[#ff0000]" />
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
                i === currentPage ? 'bg-background' : 'bg-background/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
