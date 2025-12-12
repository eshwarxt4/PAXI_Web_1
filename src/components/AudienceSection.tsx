import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users } from "lucide-react";

const AudienceSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Veterinarians */}
          <Card
            variant="feature"
            className="p-8 lg:p-10 animate-fade-in-up"
          >
            <CardContent className="p-0">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                For Veterinarians
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                PAXI transforms how you receive patient information. Get structured, 
                AI-organized health reports before consultations. Manage cases efficiently 
                with digital workflows. Build visibility and connect with more pet parents 
                in your area — all while spending less time on paperwork.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "AI-structured clinical summaries",
                  "Digital case management",
                  "Increased clinic visibility",
                  "Streamlined prescriptions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="default" size="lg">
                Join PAXI
              </Button>
            </CardContent>
          </Card>

          {/* For Pet Parents */}
          <Card
            variant="feature"
            className="p-8 lg:p-10 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-0">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                For Pet Parents
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Give your furry family members the care they deserve. Easily share your 
                pet's symptoms, upload photos, and access all health records in one place. 
                Get digital prescriptions and communicate seamlessly with your vet — 
                making every visit smoother and less stressful.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Easy symptom sharing",
                  "Photo & document uploads",
                  "Digital prescriptions",
                  "Complete health history",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                      <span className="text-teal-600 text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="lg">
                Create Pet Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
