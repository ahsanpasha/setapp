import { Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0">
            What you get on Setapp.
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            With a single subscription from $9.99, you get full access to 240+ Mac and iOS apps to get things done.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Keep your Mac clean card */}
          <div className="bg-card rounded-2xl p-6 border border-border overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-sky/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🧹</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Keep your Mac clean</h3>
                <p className="text-muted-foreground text-sm">Remove junk, speed up hardware, stay on top of performance.</p>
              </div>
            </div>
            
            {/* App preview mockup */}
            <div className="bg-secondary rounded-xl p-4 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-coral/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow/60" />
                  <div className="w-3 h-3 rounded-full bg-mint/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">CleanMyMac</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-coral/20 rounded-lg" />
                    <span className="text-sm text-foreground">System Junk</span>
                  </div>
                  <span className="text-xs text-muted-foreground">3.2 GB</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-lavender/20 rounded-lg" />
                    <span className="text-sm text-foreground">Mail Attachments</span>
                  </div>
                  <span className="text-xs text-muted-foreground">1.8 GB</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-sky/20 rounded-lg" />
                    <span className="text-sm text-foreground">Photo Junk</span>
                  </div>
                  <span className="text-xs text-muted-foreground">856 MB</span>
                </div>
              </div>

              {/* Circular progress indicator */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-8 border-coral/30 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-bold text-foreground">5.8</span>
                  <span className="text-xs text-muted-foreground block">GB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Join meetings card */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-coral/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Join meetings in a click</h3>
                <p className="text-muted-foreground text-sm">One-click access to all video conferences from the menu bar.</p>
              </div>
            </div>

            {/* Meeting list mockup */}
            <div className="bg-secondary rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-coral/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow/60" />
                  <div className="w-3 h-3 rounded-full bg-mint/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">Meeter</span>
              </div>

              <div className="space-y-2">
                {['Daily Standup', 'Design Review', 'Team Sync', 'Product Demo'].map((meeting, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-mint' : 'bg-muted-foreground/30'}`} />
                      <span className="text-sm text-foreground">{meeting}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{`${9 + i}:00 AM`}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Write code card - spans full width */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-peach flex items-center justify-center">
                    <Play className="w-4 h-4 text-foreground" />
                  </div>
                </div>

                {/* Code editor mockup */}
                <div className="bg-[#1e1e2e] rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-coral/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow/60" />
                      <div className="w-3 h-3 rounded-full bg-mint/60" />
                    </div>
                  </div>
                  <code className="text-xs">
                    <span className="text-lavender">function</span>{' '}
                    <span className="text-sky">cleanUp</span>
                    <span className="text-foreground">()</span>{' '}
                    <span className="text-foreground">{'{'}</span>
                    <br />
                    <span className="text-muted-foreground ml-4">// Remove temporary files</span>
                    <br />
                    <span className="ml-4 text-coral">await</span>{' '}
                    <span className="text-sky">removeJunk</span>
                    <span className="text-foreground">();</span>
                    <br />
                    <span className="text-foreground">{'}'}</span>
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Write code</h3>
                <p className="text-muted-foreground text-sm">DevUtils, Coduo, and RapidAPI—developer tools for 100+ languages.</p>
              </div>

              <div className="flex flex-col justify-center">
                {/* Snippet manager mockup */}
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Code Snippets</span>
                    <span className="text-xs text-primary">+ New</span>
                  </div>
                  <div className="space-y-2">
                    {['React Hooks', 'API Call', 'State Management', 'Animation'].map((snippet, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                        <div className="w-8 h-8 rounded bg-coral/20 flex items-center justify-center">
                          <span className="text-xs text-coral">{`{}`}</span>
                        </div>
                        <span className="text-sm text-foreground">{snippet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View all superpowers link */}
        <div className="flex justify-center mt-12">
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">→ View all superpowers</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
