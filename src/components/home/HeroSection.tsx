import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Precision Industrial Machines for India's Manufacturing Future
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Empowering industries with cutting-edge fiber laser cutting, CNC plasma, shearing, and welding solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/sales-enquiry">Get Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              <Link to="/download-brochure">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;