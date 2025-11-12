import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            We're here to help. Reach out to us with any questions or for a quote.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form, or contact us directly through the details below. Our team is ready to assist you.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-muted-foreground">Kila No. 17/1, Rakba No. 2, Main Sohna Road, Near, Radha Soami Satsang Mor, N.I.T Faridabad, Haryana-121004</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+919718335075" className="text-muted-foreground hover:text-primary">+91-9718335075</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:rohit@avifbd.com" className="text-muted-foreground hover:text-primary">rohit@avifbd.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Google Map Section */}
          <div className="mt-16 md:mt-24">
            <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg border">
              <iframe
                className="w-full aspect-video"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112482.5533237155!2d77.23215364335937!3d28.392861900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cde85f65b567b%3A0x691274916a40c915!2sFaridabad%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1678886543210!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of AVI Enterprises location in Faridabad"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;