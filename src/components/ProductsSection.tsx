import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import vialImg from "@/assets/vial-generic.png";
import cellpwrImg from "@/assets/cellpwr-sport.png";
import { useCart } from "@/contexts/CartContext";
import { useParallax } from "@/hooks/use-parallax";

const products = [
  { name: "Cell PWR Sport", desc: "Glycopeptides · 150g", price: "$89.99", featured: true, img: cellpwrImg },
  { name: "BPC-157", desc: "5mg / 10mg vials", price: "$49.99", featured: false, img: vialImg },
  { name: "TB-500", desc: "5mg / 10mg vials", price: "$54.99", featured: false, img: vialImg },
  { name: "GHK-Cu", desc: "50mg / 100mg vials", price: "$39.99", featured: false, img: vialImg },
  { name: "Ipamorelin", desc: "5mg vials", price: "$44.99", featured: false, img: vialImg },
  { name: "CJC-1295", desc: "2mg / 5mg vials", price: "$59.99", featured: false, img: vialImg },
  { name: "PT-141", desc: "10mg vials", price: "$34.99", featured: false, img: vialImg },
  { name: "Sermorelin", desc: "10mg vials", price: "$49.99", featured: false, img: vialImg },
  { name: "Selank", desc: "7mg / 5mg vials", price: "$64.99", featured: false, img: vialImg },
  { name: "AOD-9604", desc: "5mg / 10mg vials", price: "$29.99", featured: false, img: vialImg },
  { name: "GHRP-6", desc: "10mg / 50mg vials", price: "$79.99", featured: false, img: vialImg },
];

const ProductsSection = () => {
  const { addItem } = useCart();
  const { ref, offset } = useParallax(0.25);
  const featured = products.find((p) => p.featured)!;
  const regular = products.filter((p) => !p.featured);

  // Create structured data for products
  const productSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cell PWR Products",
    "description": "Research-grade peptides with verified purity",
    "itemListElement": products.map((p, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": p.name,
      "description": p.desc,
      "price": p.price.replace("$", ""),
      "priceCurrency": "USD",
      "url": "https://cellpwr.com/#shop",
      "brand": {
        "@type": "Brand",
        "name": "Cell PWR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "156"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productSchemaData)}
        </script>
      </Helmet>
      <section ref={ref} id="shop" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${offset}px)` }}>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent opacity-[0.07] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cta opacity-[0.05] blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4 border border-accent/20">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Check Out Our Peptide Stack
          </h2>
          <p className="text-primary-foreground/50 mt-3 max-w-md mx-auto text-sm">
            Research-grade peptides with verified purity. Every batch lab tested.
          </p>
        </motion.div>

        {/* Featured Product - Cell PWR Sport */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative"
        >
          <Link to={`/product/${featured.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
            <div className="bg-primary rounded-2xl border border-border overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[hsl(175,80%,50%)] opacity-[0.06] blur-[100px]" />
              </div>
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center relative z-10">
              <div className="flex justify-center">
                <img
                  src={featured.img}
                  alt={featured.name}
                  className="w-48 md:w-64 object-contain drop-shadow-[0_0_40px_rgba(0,255,200,0.12)]"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[hsl(175,80%,50%)]/15 text-[hsl(175,80%,65%)] text-[10px] font-bold tracking-widest uppercase border border-[hsl(175,80%,50%)]/20">
                    Featured
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[hsl(175,80%,65%)] text-[hsl(175,80%,65%)]" />
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                  {featured.name}
                </h3>
                <p className="text-primary-foreground/50 text-sm mb-1">{featured.desc}</p>
                <p className="text-[hsl(175,80%,65%)] text-xs mb-4">Natural Body Optimization · Dietary Supplement</p>
                <p className="text-[hsl(175,80%,65%)] font-bold text-2xl mb-5">{featured.price}</p>
                <button
                  onClick={() => {
                    addItem(featured);
                    toast.success(`${featured.name} added to cart`);
                  }}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[hsl(175,80%,50%)] text-primary font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
            </div>
          </Link>
        </motion.div>

        {/* Regular Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {regular.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 p-5 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              <Link to={`/product/${p.name.toLowerCase().replace(/\s+/g, "-")}`} className="w-full flex flex-col items-center flex-1">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <img src={p.img} alt={p.name} className="h-24 w-auto mb-4 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-sm font-semibold text-primary-foreground">{p.name}</h3>
                <p className="text-xs text-primary-foreground/50 mt-1">{p.desc}</p>
                <p className="text-cta font-bold text-lg mt-3">{p.price}</p>
              </Link>
              <button
                onClick={() => {
                  addItem(p);
                  toast.success(`${p.name} added to cart`);
                }}
                className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity relative z-10"
              >
                <ShoppingCart size={14} />
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductsSection;
