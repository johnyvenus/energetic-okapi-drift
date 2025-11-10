import LeadershipCard from "@/components/LeadershipCard";
import PhotoGallery from "@/components/PhotoGallery";

const leadership = [
  { name: "Rohan Sharma", title: "Founder & CEO", imageUrl: "/placeholder.svg" },
  { name: "Priya Singh", title: "Chief Operating Officer", imageUrl: "/placeholder.svg" },
  { name: "Amit Patel", title: "Head of Engineering", imageUrl: "/placeholder.svg" },
  { name: "Anjali Mehta", title: "Director of Sales", imageUrl: "/placeholder.svg" },
];

const facilityImages = [
  { src: "/placeholder.svg", alt: "Factory floor" },
  { src: "/placeholder.svg", alt: "CNC machine in action" },
  { src: "/placeholder.svg", alt: "Quality control station" },
  { src: "/placeholder.svg", alt: "Warehouse and logistics" },
  { src: "/placeholder.svg", alt: "R&D department" },
  { src: "/placeholder.svg", alt: "Assembled machines" },
];

const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems", logo: "/placeholder.svg" },
    { name: "CE Marking", description: "Conformity with European standards", logo: "/placeholder.svg" },
    { name: "Make in India", description: "Promoting domestic manufacturing", logo: "/placeholder.svg" },
];

const About = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About MachineCo</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Pioneering industrial manufacturing in India with a commitment to quality, innovation, and customer success for over 25 years.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1998, MachineCo started as a small workshop with a big vision: to build world-class industrial machinery in India. Through relentless dedication to engineering excellence and a customer-first approach, we have grown into a leading manufacturer, trusted by thousands of businesses across the country and beyond.
              </p>
              <p className="text-muted-foreground">
                Our journey is one of continuous innovation. We invest heavily in research and development to stay at the forefront of technology, ensuring our machines deliver unparalleled performance, reliability, and value.
              </p>
            </div>
            <div>
              <img src="/placeholder.svg" alt="MachineCo founders" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Quality & Certifications</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our commitment to global standards of quality and safety.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {certifications.map(cert => (
                    <div key={cert.name} className="flex flex-col items-center text-center p-6 border rounded-lg bg-background">
                        <img src={cert.logo} alt={`${cert.name} logo`} className="h-20 w-20 mb-4" />
                        <h3 className="font-semibold text-xl">{cert.name}</h3>
                        <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 md:py-24">
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

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The driving force behind our success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member) => (
              <LeadershipCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;