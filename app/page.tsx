import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import FeaturedDestinations from "@/components/home/FeatureDestinations";
export default function HomePage() {
  return (
    <>
      <HeroSection />
       <FeaturedDestinations />
      <FeatureSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
