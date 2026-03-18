import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PowerPowderSection from "@/components/PowerPowderSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OrderCTA from "@/components/OrderCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>Cell PWR - Premium Power & Wellness Products</title>
      <meta name="description" content="Discover Cell PWR's premium power and wellness products designed to enhance your energy and performance. Shop now for quality supplements and wellness solutions." />
      <meta name="keywords" content="power products, wellness products, energy supplements, performance enhancement, premium wellness" />
      <link rel="canonical" href="https://cellpwr.com/" />

      {/* Open Graph */}
      <meta property="og:title" content="Cell PWR - Premium Power & Wellness Products" />
      <meta property="og:description" content="Discover Cell PWR's premium power and wellness products designed to enhance your energy and performance." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cellpwr.com/" />
      <meta property="og:site_name" content="Cell PWR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CellPWR" />
      <meta name="twitter:title" content="Cell PWR - Premium Power & Wellness Products" />
      <meta name="twitter:description" content="Premium power and wellness products for enhanced energy and performance." />

      {/* Structured Data - Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cell PWR",
          "url": "https://cellpwr.com",
          "description": "Premium power and wellness products",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "availableLanguage": "en"
          }
        })}
      </script>

      {/* Structured Data - BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://cellpwr.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Products",
              "item": "https://cellpwr.com/#shop"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Cart",
              "item": "https://cellpwr.com/cart"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Checkout",
              "item": "https://cellpwr.com/checkout"
            }
          ]
        })}
      </script>

      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Cell PWR",
          "description": "Premium power and wellness products - research-grade peptides with verified purity",
          "url": "https://cellpwr.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        })}
      </script>
    </Helmet>

    <div className="min-h-screen bg-primary">
      <Navbar />
      <HeroSection />
      <PowerPowderSection />
      <ProductsSection />
      <TestimonialsSection />
      <OrderCTA />
      <ContactSection />
      <Footer />
    </div>
  </>
);

export default Index;
