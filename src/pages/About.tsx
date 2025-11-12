import LeadershipCard from "@/components/LeadershipCard";
import PhotoGallery from "@/components/PhotoGallery";

const leadership = [
  { name: "Rohan Sharma", title: "Founder & CEO", imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop" },
  { name: "Priya Singh", title: "Chief Operating Officer", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
  { name: "Amit Patel", title: "Head of Engineering", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=400&auto=format&fit=crop" },
  { name: "Anjali Mehta", title: "Director of Sales", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
];

const facilityImages = [
  { src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=800&auto=format&fit=crop", alt: "Factory floor" },
  { src: "https://images.unsplash.com/photo-1629904039742-61185582a1b1?q=80&w=800&auto=format&fit=crop", alt: "CNC machine in action" },
  { src: "https://images.unsplash.com/photo-1581092446347-a56c5b5a1a8a?q=80&w=800&auto=format&fit=crop", alt: "Quality control station" },
  { src: "https://images.unsplash.com/photo-1587293852726-70cdb122c294?q=80&w=800&auto=format&fit=crop", alt: "Warehouse and logistics" },
  { src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop", alt: "R&D department" },
  { src: "https://images.unsplash.com/photo-1557699242-52f77ab4a483?q=80&w=800&auto=format&fit=crop", alt: "Assembled machines" },
];

const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems", logo: "https://img.icons8.com/fluency/96/quality.png" },
    { name: "CE Marking", description: "Conformity with European standards", logo: "https://img.icons8.com/fluency/96/checked-shield.png" },
    { name: "Make in India", description: "Promoting domestic manufacturing", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Make_in_India_logo.svg/2560px-Make_in_India_logo.svg.png" },
];

const About = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About AVI Enterprises</h1>
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
                Founded in 1998, AVI Enterprises started as a small workshop with a big vision: to build world-class industrial machinery in India. Through relentless dedication to engineering excellence and a customer-first approach, we have grown into a leading manufacturer, trusted by thousands of businesses across the country and beyond.
              </p>
              <p className="text-muted-foreground">
                Our journey is one of continuous innovation. We invest heavily in research and development to stay at the forefront of technology, ensuring our machines deliver unparalleled performance, reliability, and value.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1600880292210-85938a039959?q=80&w=1024&auto=format&fit=crop" alt="AVI Enterprises founders" className="rounded-lg shadow-lg w-full" />
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
                        <img src={cert.logo} alt={`${cert.name} logo`} className="h-20 w-20 mb-4 object-contain" />
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