import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ContactTeaser = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Upgrade Your Production?
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            Let's discuss your requirements. Our team is ready to help you find the perfect machine for your business.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/sales-enquiry">Request a Quote</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;