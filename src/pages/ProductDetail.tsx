import { useParams, NavLink } from "react-router-dom";
import productsData from "@/content/products.json";
import categoriesData from "@/content/categories.json";
import NotFound from "./NotFound";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlayCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
                className="w-full h-auto rounded-lg shadow-lg sticky top-24"
              />
            </div>

            {/* Product Details with Tabs */}
            <div>
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="video">Product Video</TabsTrigger>
                  <TabsTrigger value="samples">Cutting Samples</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="mt-6">
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
                </TabsContent>

                <TabsContent value="video" className="mt-6">
                  <h2 className="text-3xl font-bold mb-4">Watch it in Action</h2>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden border cursor-pointer group">
                    <img src="/placeholder.svg" alt="Product video thumbnail" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <PlayCircle className="h-20 w-20 text-white/80 absolute z-10 transition-transform duration-300 group-hover:scale-110" />
                    <p className="absolute bottom-4 left-4 text-white font-semibold">Video coming soon</p>
                  </div>
                </TabsContent>

                <TabsContent value="samples" className="mt-6">
                  <h2 className="text-3xl font-bold mb-4">Cutting Samples</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden border group">
                        <img src="/placeholder.svg" alt={`Cutting sample ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <Button size="lg" asChild className="mt-8 w-full sm:w-auto">
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