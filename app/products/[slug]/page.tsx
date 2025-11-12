import { notFound } from "next/navigation";
import Link from "next/link";
import productsData from "@/content/products.json";
import categoriesData from "@/content/categories.json";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlayCircle, CheckCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactTeaser from "@/components/ContactTeaser";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const product = productsData.find((p) => p.slug === slug);
  
  if (!product) {
    notFound();
  }

  const category = categoriesData.find((c) => c.id === product?.category);
  const hasModels = product.models && product.models.length > 0;

  const sampleImages = [
    "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM-(2).jpeg",
    "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM-(1).jpeg",
    "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM.jpeg",
    "/uploads/WhatsApp-Image-2025-11-12-at-12.50.16-PM-(2).jpeg",
    "/uploads/WhatsApp-Image-2025-11-12-at-12.50.16-PM-(1).jpeg",
    "/uploads/WhatsApp-Image-2025-11-12-at-12.50.16-PM.jpeg",
  ];

  return (
    <div className="bg-background">
      {/* Breadcrumb and Title Section */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-4">
            <Button variant="ghost" asChild className="pl-0">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Products
              </Link>
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

              {product.features && product.features.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
                <Link href={`/sales-enquiry?product=${encodeURIComponent(product.name)}`}>Request a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Video and Samples Section */}
          <div className="mt-16 md:mt-24 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Watch it in Action</h2>
              <div className="aspect-video max-w-4xl mx-auto bg-muted rounded-lg flex items-center justify-center relative overflow-hidden border cursor-pointer group">
                <img src="/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM.jpeg" alt="Product video thumbnail" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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