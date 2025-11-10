import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-xl">Manufacturer</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <Link to="/about-us" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link to="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button asChild variant="default" className="hidden sm:inline-flex">
            <Link to="/sales-enquiry">Get Quote</Link>
          </Button>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/download-brochure">Download Brochure</Link>
          </Button>
          {/* Mobile menu toggle will go here later */}
        </div>
      </div>
    </header>
  );
};

export default Header;