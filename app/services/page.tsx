import { Wrench, Users, ShieldCheck, Settings } from "lucide-react";
import ContactTeaser from "@/components/ContactTeaser";

const services = [
  {
    icon: Settings,
    title: "Installation & Commissioning",
    description: "Our expert technicians ensure your new machinery is installed and calibrated for optimal performance from day one. We handle the complete setup, so you can start production without delay."
  },
  {
    icon: Users,
    title: "Operator Training",
    description: "Empower your team with comprehensive training programs. We cover machine operation, safety protocols, and basic maintenance to maximize productivity and ensure a safe working environment."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Minimize downtime with our proactive maintenance plans and responsive support. We offer annual maintenance contracts, emergency repairs, and genuine spare parts to keep your operations running smoothly."
  },
  {
    icon: ShieldCheck,
    title: "Custom Engineering Solutions",
    description: "Have a unique manufacturing challenge? Our engineering team collaborates with you to design and build custom machinery and automation solutions tailored to your specific requirements."
  }
];

const Services = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Beyond manufacturing. We provide end-to-end solutions to support your success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.title} className="flex items-start gap-6">
                <service.icon className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactTeaser />
    </div>
  );
};

export default Services;