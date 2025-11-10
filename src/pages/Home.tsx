import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeaturedCategories from "@/components/FeaturedCategories";
import WhyUs from "@/components/WhyUs";
import ContactTeaser from "@/components/ContactTeaser";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <FeaturedCategories />
      <WhyUs />
      <ContactTeaser />
    </div>
  );
};

export default Home;