import { Play } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-4 md:mb-0">
            What you get on Setapp.
          </h2>
          <p className="text-background/60 text-sm max-w-md">
            With a single subscription from $9.99, you get full access to 240+ great apps to get things done.
          </p>
        </div>

        {/* Feature cards - Main card spanning full width */}
        <div className="bg-card rounded-3xl overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Image */}
            <div className="bg-gradient-to-br from-sky/30 to-sky/10 p-6 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary relative">
                {/* App screenshot mockup */}
                <div className="absolute inset-4 bg-[#1a1a2e] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-coral/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-mint/60" />
                    </div>
                    <span className="text-[10px] text-muted-foreground ml-2">CleanMyMac</span>
                  </div>
                  
                  <div className="space-y-2">
                    {['System Junk', 'Mail Attachments', 'Photo Junk', 'Trash Bins', 'Downloads'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-4 h-4 rounded bg-coral/20" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Circular chart overlay */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48">
                  <div className="relative w-full h-full">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--coral))" strokeWidth="8" strokeDasharray="200" strokeDashoffset="50" opacity="0.3"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--coral))" strokeWidth="8" strokeDasharray="150" strokeDashoffset="0"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-foreground">System</span>
                        <span className="text-xs text-muted-foreground block">Junk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Keep your Mac clean</h3>
              <p className="text-muted-foreground text-sm mb-4">Remove junk, speed up hardware, stay on top of performance issues.</p>
              
              {/* App preview sidebar */}
              <div className="bg-secondary rounded-xl p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-coral/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow/60" />
                    <div className="w-2 h-2 rounded-full bg-mint/60" />
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'System Junk', size: '3.2 GB', color: 'bg-coral' },
                    { name: 'Photo Junk', size: '1.8 GB', color: 'bg-lavender' },
                    { name: 'Mail', size: '856 MB', color: 'bg-sky' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded ${item.color}/30`} />
                        <span className="text-foreground">{item.name}</span>
                      </div>
                      <span className="text-muted-foreground">{item.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two column cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Join meetings card */}
          <div className="bg-card rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2">
              {/* Left - Code editor */}
              <div className="bg-[#1a1a2e] p-4 relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-peach flex items-center justify-center">
                    <Play className="w-3 h-3 text-foreground" />
                  </div>
                </div>
                <div className="font-mono text-[10px] space-y-1">
                  <div><span className="text-lavender">function</span> <span className="text-sky">cleanUp</span><span className="text-foreground">()</span></div>
                  <div className="text-muted-foreground pl-2">// Remove temp</div>
                  <div className="pl-2"><span className="text-coral">await</span> <span className="text-sky">remove</span><span className="text-foreground">();</span></div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-6">
                <div className="w-10 h-10 rounded-xl bg-coral/20 flex items-center justify-center mb-3">
                  <span className="text-lg">📅</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Join meetings in a click</h3>
                <p className="text-muted-foreground text-xs">One-click access to all video conferences from the menu bar.</p>
              </div>
            </div>

            {/* Meeting list */}
            <div className="px-6 pb-6">
              <div className="bg-secondary rounded-xl p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-coral/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow/60" />
                    <div className="w-2 h-2 rounded-full bg-mint/60" />
                  </div>
                  <span className="text-[10px] text-muted-foreground">Meeter</span>
                </div>
                <div className="space-y-1">
                  {['Daily Standup', 'Design Review', 'Team Sync'].map((meeting, i) => (
                    <div key={i} className="flex items-center justify-between p-1.5 rounded hover:bg-muted/50">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-mint' : 'bg-muted-foreground/30'}`} />
                        <span className="text-[11px] text-foreground">{meeting}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{`${9 + i}:00`}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Write code card */}
          <div className="bg-card rounded-3xl p-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">Write code</h3>
                <p className="text-muted-foreground text-xs mb-4">DevUtils, Coduo, RapidAPI—developer tools for 100+ languages.</p>

                {/* Code snippets */}
                <div className="bg-secondary rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-foreground">Code Snippets</span>
                    <span className="text-[10px] text-primary">+ New</span>
                  </div>
                  <div className="space-y-1.5">
                    {['React Hooks', 'API Call', 'Animation'].map((snippet, i) => (
                      <div key={i} className="flex items-center gap-2 p-1.5 rounded bg-muted/30">
                        <div className="w-6 h-6 rounded bg-coral/20 flex items-center justify-center">
                          <span className="text-[8px] text-coral">{`{}`}</span>
                        </div>
                        <span className="text-[11px] text-foreground">{snippet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CodeRunner preview */}
              <div className="w-32 bg-gradient-to-br from-mint/20 to-sky/20 rounded-xl p-2">
                <div className="text-[10px] text-muted-foreground mb-1">CodeRunner</div>
                <div className="bg-[#1a1a2e] rounded-lg p-2 font-mono text-[8px] text-foreground">
                  <div className="text-mint">// Output</div>
                  <div>Hello World</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View all superpowers link */}
        <div className="flex justify-center mt-10">
          <a href="#" className="flex items-center gap-2 text-background/60 hover:text-background transition-colors text-sm">
            <span>→</span>
            <span>View all superpowers</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
