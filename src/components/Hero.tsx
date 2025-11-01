import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";
import heroRings from "@/assets/hero-rings.jpg";

interface HeroProps {
  onStartScan: () => void;
}

export const Hero = ({ onStartScan }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroRings})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-primary/20 glow-purple">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              The 3rd Bit
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Zero Day Bot
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary font-heading">
            Detect. Defend. Educate.

          </p>

          {/* Tagline */}
          <p className="text-xl md:text-xl text-muted-foreground max-w-2xl mx-auto">
       Your Digital Guard Against Phishing and Online Scams
          </p>

     
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={onStartScan}
              className="group relative px-8 py-6 text-lg font-semibold rounded-full glow-purple-strong hover:glow-purple-strong transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Scan URL
            </Button>


          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { title: "Phishing Detection", desc: "Instant link analysis with AI-powered explanations" },
              { title: "Passive Scanning", desc: "Non-intrusive security checks with detailed reports" },
              { title: "Conversational Insights", desc: "Ask follow-ups and get actionable guidance" },
            ].map((feature) => (
              <div key={feature.title} className="glass-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:glow-subtle">
                <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
    </section>
  );
};
