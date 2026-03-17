import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PowerPowderSection from "@/components/PowerPowderSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderCTA from "@/components/OrderCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PowerPowderSection />
    <ProductsSection />
    <TestimonialsSection />
    <OrderCTA />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
