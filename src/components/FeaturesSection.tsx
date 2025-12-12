import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, FileText, Pill, TrendingUp } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Structured Health Intake",
    description: "Collect the right information from pet parents before the consultation.",
  },
  {
    icon: FileText,
    title: "Vet-Ready Reports",
    description: "Clear, scannable, clinically oriented summaries for efficient diagnosis.",
  },
  {
    icon: Pill,
    title: "Digital Prescriptions & Records",
    description: "Everything stored securely, in one place for easy access.",
  },
  {
    icon: TrendingUp,
    title: "Clinic Visibility & Growth",
    description: "Increase reach, streamline workflows, and build trust with pet parents.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simplifying Pet Healthcare
          </h2>
          <p className="text-lg text-muted-foreground">
            PAXI bridges the gap between pet parents and veterinarians with smart, structured communication tools.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="feature"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 pt-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
