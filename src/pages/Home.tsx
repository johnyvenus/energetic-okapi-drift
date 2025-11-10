import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import IntroSection from "@/components/IntroSection";
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
      <IntroSection />
      <FeaturedCategories />
      <WhyUs />
      <KeyMetrics />
      <Testimonials />
      <ContactTeaser />
    </div>
  );
};

export default Home;