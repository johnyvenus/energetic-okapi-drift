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

  const hasModels = product.models && product.models.length > 0;

  const sampleImages = [
    "https://images.unsplash.com/photo-1594213512289-8a6a3c65f75e?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617893929358-520764b93c3a?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589128793135-ce9240380a81?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605205614933-b3643036e6e2?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505672556833-a652e4b6a8b6?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612547036391-99a4b2a3c0a3?q=80&w=400&auto=format&fit=crop",
  ];

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

            {/* Product Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Specifications</h2>
                {hasModels ? (
                  <Tabs defaultValue={product.models[0].name} className="w-full">
                    <TabsList>
                      {product.models.map((model) => (
                        <TabsTrigger key={model.name} value={model.name}>
                          {model.name} Model
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {product.models.map((model) => (
                      <TabsContent key={model.name} value={model.name} className="mt-4">
                        <Table>
                          <TableBody>
                            {Object.entries(model.specs).map(([key, value]) => (
                              <TableRow key={key}>
                                <TableCell className="font-semibold">{key}</TableCell>
                                <TableCell>{String(value)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TabsContent>
                    ))}
                  </Tabs>
                ) : (
                  product.specs && (
                    <Table>
                      <TableBody>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <TableRow key={key}>
                            <TableCell className="font-semibold">{key}</TableCell>
                            <TableCell>{String(value)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )
                )}
              </div>

              <Button size="lg" asChild className="w-full sm:w-auto">
                <NavLink to={`/sales-enquiry?product=${encodeURIComponent(product.name)}`}>Request a Quote</NavLink>
              </Button>
            </div>
          </div>

          {/* Video and Samples Section */}
          <div className="mt-16 md:mt-24 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Watch it in Action</h2>
              <div className="aspect-video max-w-4xl mx-auto bg-muted rounded-lg flex items-center justify-center relative overflow-hidden border cursor-pointer group">
                <img src="https://images.unsplash.com/photo-1611171736155-3535f5c224a8?q=80&w=1024&auto=format&fit=crop" alt="Product video thumbnail" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40"></div>
                <PlayCircle className="h-20 w-20 text-white/80 absolute z-10 transition-transform duration-300 group-hover:scale-110" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Video coming soon</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Cutting Samples</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {sampleImages.map((img, i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden border group">
                    <img src={img} alt={`Cutting sample ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactTeaser />
    </div>
  );
};

export default ProductDetail;