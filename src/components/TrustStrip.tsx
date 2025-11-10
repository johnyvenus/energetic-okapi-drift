import { Award, ShieldCheck, Users, Factory } from "lucide-react";

const trustMetrics = [
  { icon: Award, text: "25+ Years of Experience" },
  { icon: ShieldCheck, text: "ISO 9001:2015 Certified" },
  { icon: Users, text: "5,000+ Satisfied Clients" },
  { icon: Factory, text: "State-of-the-Art Manufacturing" },
];

const TrustStrip = () => {
  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <metric.icon className="h-10 w-10 text-primary" />
              <p className="font-semibold text-foreground">{metric.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;