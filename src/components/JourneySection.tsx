import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const JourneySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 4);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 4) % 4);

  return (
    <section className="py-16 px-6 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-4 md:mb-0">
            Your Setapp journey.
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-background/60 text-sm max-w-xs">
              Type in your next to-do. Setapp shows the apps for everything you do.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-8 w-8 bg-transparent border-background/20 text-background/60 hover:bg-background/10 hover:text-background"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-8 w-8 bg-transparent border-background/20 text-background/60 hover:bg-background/10 hover:text-background"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Journey card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e8b4bc] via-[#d4a5ad] to-[#c99ba3] p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div>
              <p className="text-lg md:text-xl font-medium text-background leading-relaxed mb-4">
                Musicians like Jason use Setapp to push the limits of their creativity, clearing through the noise for more time to play.
              </p>
              <a href="#" className="text-background/80 text-sm font-medium hover:text-background transition-colors">
                Watch Video →
              </a>

              {/* Audio waveform */}
              <div className="mt-8 flex items-center gap-3">
                <button className="w-12 h-12 rounded-full bg-coral flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                  <Play className="w-5 h-5 text-foreground ml-0.5" />
                </button>
                <div className="flex-1">
                  {/* Progress bar */}
                  <div className="h-1 bg-background/30 rounded-full overflow-hidden mb-2">
                    <div className="h-full w-1/3 bg-background rounded-full" />
                  </div>
                  {/* Waveform */}
                  <div className="flex items-end gap-[2px] h-8">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-background/40 rounded-full min-w-[2px]"
                        style={{
                          height: `${Math.sin(i * 0.3) * 50 + 50}%`,
                          minHeight: '4px',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Person image placeholder */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background/20">
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              {/* Person silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-coral/60" />
              </div>
              
              {/* Navigation arrows overlay */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                <button className="w-8 h-8 rounded-full bg-foreground/20 backdrop-blur flex items-center justify-center hover:bg-foreground/30 transition-colors">
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-8 h-8 rounded-full bg-foreground/20 backdrop-blur flex items-center justify-center hover:bg-foreground/30 transition-colors">
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-background' : 'bg-background/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
