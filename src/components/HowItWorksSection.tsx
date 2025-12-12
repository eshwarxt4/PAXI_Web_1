import { Camera, FileSearch, Stethoscope } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Parent Submits Details",
    description: "Pet parents submit symptoms, photos, and health history through an intuitive form.",
    color: "bg-teal-100 text-teal-700",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "PAXI Organizes Data",
    description: "Our platform structures inputs into a clear, vet-friendly clinical summary.",
    color: "bg-sand-200 text-navy-800",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Vet Reviews & Prescribes",
    description: "Veterinarians review the report, diagnose, and prescribe digitally.",
    color: "bg-primary/10 text-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            From symptom submission to digital prescription — streamlined for both pet parents and vets.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step card */}
                <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 relative z-10">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-teal text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-teal">
                    {step.number}
                  </div>

                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="w-10 h-10" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
