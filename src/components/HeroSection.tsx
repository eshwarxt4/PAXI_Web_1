import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sand-200/50 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              Modern Pet Healthcare
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              PAXI — Better Information.{" "}
              <span className="text-gradient-teal">Faster Care.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A modern platform that helps pet parents share structured health details and gives veterinarians clear, actionable reports—improving diagnosis efficiency and pet outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
              <Button variant="hero-outline" size="lg">
                Learn How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-sand-200 border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    🐾
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> pets cared for
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-fade-in lg:animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroPets}
                  alt="Happy dog and cat with modern pet healthcare technology interface"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
              </div>

              {/* Floating card - Dashboard preview */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-elevated p-4 animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">📋</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Health Report Ready</p>
                    <p className="text-xs text-muted-foreground">Vet-optimized summary</p>
                  </div>
                </div>
              </div>

              {/* Floating card - Status */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-elevated p-4 animate-float hidden sm:block" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <span className="text-teal-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Secure & Private</p>
                    <p className="text-xs text-muted-foreground">HIPAA-compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
