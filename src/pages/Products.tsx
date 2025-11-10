import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

import productsData from "@/content/products.json";
import categoriesData from "@/content/categories.json";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const searchMatch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [searchTerm, selectedCategories]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
  };

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
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="search" className="font-semibold">Search</Label>
                    <Input
                      id="search"
                      placeholder="Search by name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Categories</h3>
                    <div className="space-y-2">
                      {categoriesData.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => handleCategoryChange(category.id)}
                          />
                          <Label htmlFor={category.id} className="font-normal">
                            {category.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button onClick={clearFilters} variant="outline" className="w-full">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Products Grid */}
            <main className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold">No Products Found</h3>
                  <p className="text-muted-foreground mt-2">
                    Try adjusting your filters or clearing them to see all products.
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;