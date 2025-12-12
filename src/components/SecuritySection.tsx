import { Lock, Shield, Eye, UserCheck } from "lucide-react";

const trustPoints = [
  {
    icon: UserCheck,
    title: "Consent-Driven",
    description: "Information shared only with your approval",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for all health data",
  },
  {
    icon: Eye,
    title: "Privacy-First",
    description: "Your data is never sold or shared",
  },
  {
    icon: Shield,
    title: "Licensed Vets Only",
    description: "Only licensed veterinarians diagnose and prescribe",
  },
];

const SecuritySection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Security & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Privacy, Protected
          </h2>
          <p className="text-lg text-muted-foreground">
            PAXI is built with security and privacy at its core. Your pet's health data is safe with us.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className="text-center p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
