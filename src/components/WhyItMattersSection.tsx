import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageSquare, Heart, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Vet Efficiency",
    description: "Save time with pre-structured patient information",
  },
  {
    icon: MessageSquare,
    title: "Better Communication",
    description: "Clear, organized parent-vet interactions",
  },
  {
    icon: Heart,
    title: "Improved Outcomes",
    description: "Faster diagnosis leads to better pet health",
  },
  {
    icon: Shield,
    title: "Secure Records",
    description: "Digital records with privacy-first design",
  },
];

const WhyItMattersSection = () => {
  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="animate-slide-in-left">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Clarity Creates Better Care
            </h2>
            <p className="text-lg text-accent-foreground/80 leading-relaxed mb-6">
              Miscommunication between pet parents and veterinarians leads to delayed diagnoses, 
              unnecessary tests, and stressed pets. PAXI eliminates these barriers by providing 
              structured, comprehensive health information before the consultation even begins.
            </p>
            <p className="text-lg text-accent-foreground/80 leading-relaxed">
              The result? Veterinarians spend less time gathering information and more time 
              doing what they do best — caring for pets. Pet parents feel heard and confident 
              that every detail has been considered.
            </p>
          </div>

          {/* Right benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4 animate-slide-in-right">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                variant="glass"
                className="bg-accent-foreground/5 border-accent-foreground/10 hover:bg-accent-foreground/10 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 pt-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-accent-foreground/70 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
