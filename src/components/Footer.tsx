import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Veterinarians", href: "#" },
    { label: "For Pet Parents", href: "#" },
  ],
  company: [
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img src={logo} alt="PAXI" className="h-12 w-auto" />
            </a>
            <p className="text-accent-foreground/70 leading-relaxed max-w-sm mb-6">
              Transforming pet healthcare through structured communication between
              pet parents and veterinarians.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              {["twitter", "linkedin", "instagram", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-sm">
                    {social === "twitter" && "𝕏"}
                    {social === "linkedin" && "in"}
                    {social === "instagram" && "📷"}
                    {social === "facebook" && "f"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-accent-foreground/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} PAXI. All rights reserved.
          </p>
          <p className="text-accent-foreground/60 text-sm text-center md:text-right">
            PAXI structures pet health information. Only licensed veterinarians diagnose and prescribe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
