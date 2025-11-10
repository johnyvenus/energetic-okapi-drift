import { useParams, NavLink } from "react-router-dom";
import productsData from "@/content/products.json";
import categoriesData from "@/content/categories.json";
import NotFound from "./NotFound";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ContactTeaser from "@/components/ContactTeaser";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);
  const category = categoriesData.find((c) => c.id === product?.category);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="bg-background">
      {/* Breadcrumb and Title Section */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-4">
            <Button variant="ghost" asChild className="pl-0">
              <NavLink to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Products
              </NavLink>
            </Button>
          </div>
          <p className="text-primary font-semibold">{category?.name}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">{product.name}</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground text-lg mb-8">{product.description}</p>

              <h3 className="text-2xl font-bold mb-4">Specifications</h3>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Power Range</TableCell>
                    <TableCell>{product.powerRange}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Working Area</TableCell>
                    <TableCell>{product.cuttingArea}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Button size="lg" asChild className="mt-8">
                <NavLink to="/sales-enquiry">Request a Quote</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactTeaser />
    </div>
  );
};

export default ProductDetail;