import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-teal text-primary-foreground">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Partner with PAXI?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Join us in transforming pet healthcare. Whether you're a veterinarian looking for 
            efficiency or a pet parent seeking better care — we're here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="xl"
              className="bg-card text-foreground hover:bg-card/90 shadow-elevated"
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
            >
              Request a Demo
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/70">
            📧 hello@paxi.care
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
