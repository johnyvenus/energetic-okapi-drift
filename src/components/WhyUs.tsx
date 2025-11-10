import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Unmatched Quality",
    description: "We use only the highest-grade components to ensure durability and performance.",
  },
  {
    title: "Innovative Technology",
    description: "Our machines incorporate the latest advancements for superior efficiency and precision.",
  },
  {
    title: "Dedicated Support",
    description: "From installation to maintenance, our expert team is with you every step of the way.",
  },
  {
    title: "Custom Solutions",
    description: "We work with you to tailor machines to your specific production requirements.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg"
              alt="Factory Interior"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose MachineCo?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With decades of experience, we are committed to providing our clients with machinery that drives growth and innovation.
            </p>
            <ul className="space-y-6">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;