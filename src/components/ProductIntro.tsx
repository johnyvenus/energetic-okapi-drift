const ProductIntro = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built for Performance, Designed for Durability
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Our comprehensive range of industrial machinery is engineered to meet the most demanding manufacturing challenges. Each machine is built with high-grade components and cutting-edge technology to ensure maximum productivity, precision, and a long operational life.
            </p>
            <p>
              Whether you are in automotive, aerospace, construction, or general fabrication, our equipment provides the reliability and performance you need to stay competitive. Explore our product categories below to find the perfect solution for your application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;