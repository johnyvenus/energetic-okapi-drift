import { Factory, Globe, Wrench, Users } from "lucide-react";

const metrics = [
  {
    icon: Factory,
    value: "10,000+",
    label: "Machines Installed",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served",
  },
  {
    icon: Wrench,
    value: "98%",
    label: "Uptime Guarantee",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients",
  },
];

const KeyMetrics = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Impact in Numbers</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Delivering results you can count on.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground">{metric.value}</div>
              <p className="text-muted-foreground mt-2">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;