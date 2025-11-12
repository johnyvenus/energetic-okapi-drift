import PhotoGallery from "@/components/PhotoGallery";

const facilityImages = [
  { src: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM-(2).jpeg", alt: "AVI Enterprises Machine" },
  { src: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM-(1).jpeg", alt: "AVI Enterprises Machine" },
  { src: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM.jpeg", alt: "AVI Enterprises Facility" },
  { src: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.16-PM-(2).jpeg", alt: "Fiber Laser Machine" },
  { src: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.16-PM-(1).jpeg", alt: "Plasma Cutter" },
  { src: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.16-PM.jpeg", alt: "Press Brake Machine" },
];

const About = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About AVI Enterprises</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            A high-tech company specializing in manufacturing and distributing welding & cutting equipment for over 9 years.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Company</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AVI Enterprises Equipment is a high tech company which specializes in manufacturing and distributing welding & cutting equipments. For more than a 9 year, based on the principles of advance technologies, best quality as well as thoughtful services, AVI Enterprises determines itself to be a global brand in cutting industry.
                </p>
                <p>
                  We have a qualified team with big experience in fiber laser and CNC plasma and co-efficient technologies. AVI Enterprises equipment has been committed to the development and production of intelligent CNC products, such as fiber laser cutting machines and CNC plasma cutting machines with high precision, high intelligence, and safe and durable design.
                </p>
                <p>
                  Cooperation with a long and guaranteed system and perfect after-sales service has made us who we are today. We are dedicated to providing customers with laser cutting, welding machines, plasma cutting machines, Arc welding machines, MIG welding machines, and all cutting and welding equipment solutions.
                </p>
              </div>
            </div>
            <div>
              <img src="/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM.jpeg" alt="AVI Enterprises team" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our State-of-the-Art Facility</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Where precision engineering comes to life.
            </p>
          </div>
          <PhotoGallery images={facilityImages} />
        </div>
      </section>
    </div>
  );
};

export default About;