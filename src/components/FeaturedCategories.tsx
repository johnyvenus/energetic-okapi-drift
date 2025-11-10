import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "Laser Cutting Machines",
    description: "High-precision cutting for various materials.",
    image: "/placeholder.svg",
    link: "/products/laser-cutting",
  },
  {
    name: "CNC Press Brakes",
    description: "Accurate bending and forming solutions.",
    image: "/placeholder.svg",
    link: "/products/cnc-press-brakes",
  },
  {
    name: "Shearing Machines",
    description: "Reliable and powerful shearing for sheet metal.",
    image: "/placeholder.svg",
    link: "/products/shearing-machines",
  },
  {
    name: "Fiber Laser Welders",
    description: "Advanced welding technology for strong joints.",
    image: "/placeholder.svg",
    link: "/products/fiber-laser-welders",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our wide range of industrial machinery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden group">
              <CardHeader className="p-0">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline" asChild>
                  <NavLink to={category.link}>
                    View More <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" asChild>
                <NavLink to="/products">View All Products</NavLink>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;