import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import AudienceSection from "@/components/AudienceSection";
import TeamSection from "@/components/TeamSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyItMattersSection />
      <AudienceSection />
      <TeamSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
