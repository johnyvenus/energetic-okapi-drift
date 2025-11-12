const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Global Brand in the Cutting Industry
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              For over nine years, AVI Enterprises has been a high-tech leader in manufacturing and distributing advanced welding and cutting equipment. Based on principles of advanced technology, best quality, and thoughtful service, we are a trusted global brand.
            </p>
            <p>
              Our qualified team has extensive experience in fiber laser and CNC plasma technologies, developing intelligent, high-precision, and durable CNC products. We are dedicated to providing comprehensive equipment solutions for all our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;