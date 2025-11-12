import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const slides = [
  {
    image: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM-(2).jpeg",
    title: "We make your cutting Easier, Better & Faster",
    description: "Specializing in Plasma Cutting, Fibre Laser, Sharing & Bending Machines.",
    buttons: [
      { text: "Get Quote", link: "/sales-enquiry", variant: "default" },
      { text: "View Products", link: "/products", variant: "outline" },
    ],
  },
  {
    image: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM-(1).jpeg",
    title: "Innovative Laser Cutting Solutions",
    description: "Experience unparalleled accuracy and speed with our state-of-the-art fiber laser machines.",
    buttons: [
      { text: "Explore Laser Cutters", link: "/products", variant: "default" },
      { text: "Contact Sales", link: "/contact", variant: "outline" },
    ],
  },
  {
    image: "/uploads/WhatsApp-Image-2025-11-12-at-12.50.17-PM.jpeg",
    title: "Advanced CNC Press Brakes",
    description: "Achieve perfect bends every time. Our CNC press brakes offer superior control and durability.",
    buttons: [
      { text: "View Press Brakes", link: "/products", variant: "default" },
      { text: "Request a Demo", link: "/sales-enquiry", variant: "outline" },
    ],
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="container mx-auto px-4 md:px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      {slides[0].buttons.map((button, btnIndex) => (
                        <Button
                          key={btnIndex}
                          size="lg"
                          variant={button.variant === 'outline' ? 'outline-inverse' : 'default'}
                          asChild
                        >
                          <NavLink to={button.link}>{button.text}</NavLink>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex bg-white/50 hover:bg-white/80 text-foreground" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex bg-white/50 hover:bg-white/80 text-foreground" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;