import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The precision and reliability of MachineCo's equipment have transformed our production line. Their support team is second to none.",
    name: "Arjun Kapoor",
    company: "CEO, Bharat Forge Ltd.",
  },
  {
    quote: "We've seen a 30% increase in efficiency since integrating their CNC press brake. A truly game-changing investment for our facility.",
    name: "Sneha Reddy",
    company: "Operations Manager, Pinnacle Industries",
  },
  {
    quote: "From the initial quote to the final installation, the entire process was seamless. The quality of the machinery is outstanding.",
    name: "Vikram Singh",
    company: "Owner, Singh Metal Works",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from businesses we've helped grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;