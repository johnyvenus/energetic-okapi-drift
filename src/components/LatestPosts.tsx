import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const posts = [
  {
    title: "The Future of Fiber Laser Cutting",
    date: "October 26, 2023",
    excerpt: "Discover how new advancements in fiber laser technology are revolutionizing metal fabrication.",
    link: "/blog/future-of-fiber-laser",
  },
  {
    title: "5 Tips for Maintaining Your CNC Press Brake",
    date: "October 15, 2023",
    excerpt: "Proper maintenance is key to longevity and performance. Here are our top tips for your press brake.",
    link: "/blog/maintaining-cnc-press-brake",
  },
  {
    title: "Choosing the Right Shearing Machine for Your Shop",
    date: "September 30, 2023",
    excerpt: "A comprehensive guide to help you select the perfect shearing machine based on your needs.",
    link: "/blog/choosing-shearing-machine",
  },
];

const LatestPosts = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights, trends, and news from the manufacturing industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="flex flex-col">
              <CardHeader>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0 h-auto">
                  <NavLink to={post.link}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;