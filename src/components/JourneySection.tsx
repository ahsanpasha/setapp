import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const JourneySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const journeys = [
    {
      title: "Musicians like Jason use Setapp to push the limits of their creativity, clearing through the noise for more time to play.",
      author: "Watch Video",
      image: "/placeholder.svg",
    },
    {
      title: "Developers use Setapp to streamline their workflow and ship faster with powerful dev tools.",
      author: "Watch Video",
      image: "/placeholder.svg",
    },
    {
      title: "Designers rely on Setapp for creative tools that bring their visions to life.",
      author: "Watch Video",
      image: "/placeholder.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % journeys.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + journeys.length) % journeys.length);
  };

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0">
            Your Setapp journey.
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground text-sm">
              Type in your next to-do. Setapp shows the apps for everything you do.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Journey card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral/20 to-lavender/20 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
                {journeys[currentSlide].title}
              </p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                {journeys[currentSlide].author} →
              </a>
            </div>

            {/* Video placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-coral flex items-center justify-center hover:scale-110 transition-transform shadow-glow">
                  <Play className="w-6 h-6 text-foreground ml-1" />
                </button>
              </div>
              {/* Waveform visualization */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end gap-1 h-12">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-coral/60 rounded-full"
                      style={{
                        height: `${Math.random() * 100}%`,
                        minHeight: '4px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {journeys.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentSlide ? 'bg-foreground' : 'bg-muted-foreground/30'
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
