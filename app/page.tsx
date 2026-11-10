import HomeHero from "@/components/home/HomeHero";
import SystemsTicker from "@/components/home/SystemsTicker";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import RefurbishSection from "@/components/home/RefurbishSection";
import ServiceVisitSteps from "@/components/home/ServiceVisitSteps";
import EquipmentSection from "@/components/home/EquipmentSection";
import CarePlans from "@/components/home/CarePlans";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import QuoteSection from "@/components/home/QuoteSection";
import ImageCredits from "@/components/home/ImageCredits";

export default function Home() {
  return (
    <>
      <HomeHero />
      <SystemsTicker />
      <ServicesShowcase />
      <RefurbishSection />
      <ServiceVisitSteps />
      <EquipmentSection />
      <CarePlans />
      <WhyUs />
      <Testimonials />
      <FaqSection />
      <QuoteSection />
      <ImageCredits />
    </>
  );
}
