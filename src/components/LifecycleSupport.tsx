import { Users, Settings, Headset, Wrench } from "lucide-react";

const supportFeatures = [
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Professional analysis with custom solution recommendations to fit your exact needs.",
  },
  {
    icon: Settings,
    title: "Installation & Training",
    description: "Professional setup and comprehensive training programs to get your team up to speed quickly.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description: "24/7 global support with remote diagnostics to resolve issues and minimize downtime.",
  },
  {
    icon: Wrench,
    title: "Maintenance Programs",
    description: "Customizable preventive maintenance plans to maximize uptime and extend machine life.",
  },
];

const LifecycleSupport = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Complete Lifecycle Support</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From consultation to ongoing maintenance, we're with you every step of the way.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportFeatures.map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-background rounded-lg shadow-sm border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleSupport;