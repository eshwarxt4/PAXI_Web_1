import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Korra Akhil Chowhan",
    education: "IIM Ahmedabad",
    role: "Product & strategy champion, focused on simplifying pet-parent workflows.",
    initials: "KC",
  },
  {
    name: "Banoth Eshwar Naik",
    education: "IIT Kharagpur",
    role: "Technical lead with expertise in scalable platforms and clinical data structuring.",
    initials: "BN",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built by Pet Lovers
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the team behind PAXI — technologists and pet enthusiasts committed to transforming veterinary care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {team.map((member, index) => (
            <Card
              key={member.name}
              variant="team"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-teal mx-auto mb-6 flex items-center justify-center shadow-teal">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-4">
                  {member.education}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission statement */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="text-xl lg:text-2xl text-foreground italic leading-relaxed">
            "PAXI is built by pet lovers and technologists committed to making veterinary care 
            clearer, faster, and more accessible."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
