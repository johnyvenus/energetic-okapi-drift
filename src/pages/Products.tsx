import ProductCard from "@/components/ProductCard";
import productsData from "@/content/products.json";

const Products = () => {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Machinery</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Explore our comprehensive range of high-performance industrial machines.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;