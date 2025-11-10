import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeaturedCategories from "@/components/FeaturedCategories";
import WhyUs from "@/components/WhyUs";
import KeyMetrics from "@/components/KeyMetrics";
import Testimonials from "@/components/Testimonials";
import ContactTeaser from "@/components/ContactTeaser";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <FeaturedCategories />
      <WhyUs />
      <KeyMetrics />
      <Testimonials />
      <ContactTeaser />
    </div>
  );
};

export default Home;