import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Precision Engineering for Modern Industry
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              High-performance industrial machines built for reliability, efficiency, and growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <NavLink to="/sales-enquiry">Get Quote</NavLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/brochure.pdf" download>Download Brochure</a>
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg"
              alt="Industrial Machine"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;