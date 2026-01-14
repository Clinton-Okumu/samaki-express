import { CoreOfferingsSection } from "@/components/home/CoreSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <CoreOfferingsSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
