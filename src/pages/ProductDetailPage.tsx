import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import vialImg from "@/assets/vial-generic.png";
import cellpwrImg from "@/assets/cellpwr-sport.png";
import { useCart } from "@/contexts/CartContext";

const products = [
  { name: "Cell PWR Sport", desc: "Glycopeptides · 150g", price: "$89.99", featured: true, img: cellpwrImg, details: "Natural body optimization dietary supplement. Cell PWR Sport is a premium glycopeptide blend designed for active individuals seeking enhanced physical performance and recovery." },
  { name: "BPC-157", desc: "5mg / 10mg vials", price: "$49.99", featured: false, img: vialImg, details: "BPC-157 (Body Protection Compound-157) is a synthetic peptide that may support tissue healing and recovery. Commonly used in research settings." },
  { name: "TB-500", desc: "5mg / 10mg vials", price: "$54.99", featured: false, img: vialImg, details: "TB-500 (Thymosin Beta-4) is a naturally occurring peptide that may promote cell growth and tissue repair. Popular in research and athletic applications." },
  { name: "GHK-Cu", desc: "50mg / 100mg vials", price: "$39.99", featured: false, img: vialImg, details: "GHK-Cu (Copper Peptide) is a naturally occurring complex known for supporting skin health and collagen production. Widely researched for anti-aging properties." },
  { name: "Ipamorelin", desc: "5mg vials", price: "$44.99", featured: false, img: vialImg, details: "Ipamorelin is a selective growth hormone releasing peptide. Studied for its potential to support growth hormone secretion naturally." },
  { name: "CJC-1295", desc: "2mg / 5mg vials", price: "$59.99", featured: false, img: vialImg, details: "CJC-1295 is a growth hormone releasing hormone analog. Often researched in combination with other peptides for enhanced effects." },
  { name: "PT-141", desc: "10mg vials", price: "$34.99", featured: false, img: vialImg, details: "PT-141 is a melanocyte-stimulating hormone analog. Researched for various applications in the scientific community." },
  { name: "Sermorelin", desc: "10mg vials", price: "$49.99", featured: false, img: vialImg, details: "Sermorelin is a growth hormone-releasing hormone. Naturally stimulates growth hormone production and is commonly used in research." },
  { name: "Selank", desc: "7mg / 5mg vials", price: "$64.99", featured: false, img: vialImg, details: "Selank is a synthetic peptide with potential nootropic properties. Researched for supporting mental clarity and focus." },
  { name: "AOD-9604", desc: "5mg / 10mg vials", price: "$29.99", featured: false, img: vialImg, details: "AOD-9604 is a fragment of human growth hormone. Studied for potential metabolic and body composition applications." },
  { name: "GHRP-6", desc: "10mg / 50mg vials", price: "$79.99", featured: false, img: vialImg, details: "GHRP-6 (Growth Hormone Releasing Peptide-6) is a hexapeptide that stimulates growth hormone release. Widely researched in scientific studies." },
];

const ProductDetailPage = () => {
  const { productName } = useParams<{ productName?: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const decodedProductName = productName ? decodeURIComponent(productName) : "";
  const product = products.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === productName?.toLowerCase());

  if (!product) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-primary-foreground/60 mb-8">
            The product "{decodedProductName}" doesn't exist in our catalog.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cta text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.details,
    "price": product.price.replace("$", ""),
    "priceCurrency": "USD",
    "image": product.img,
    "brand": {
      "@type": "Brand",
      "name": "Cell PWR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156"
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Cell PWR</title>
        <meta name="description" content={product.details} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.details} />
        <meta property="og:image" content={product.img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.details} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-primary py-12 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Products
          </motion.button>

          {/* Product Detail Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 p-6 md:p-12 overflow-hidden relative"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.06] blur-[100px]" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full max-w-xs">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full object-contain drop-shadow-[0_0_40px_rgba(0,255,200,0.12)]"
                  />
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col justify-between"
              >
                {product.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold tracking-widest uppercase border border-accent/20">
                      Featured
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {product.name}
                  </h1>
                  <p className="text-primary-foreground/60 text-sm mb-4">{product.desc}</p>
                  <p className="text-accent text-xs font-semibold mb-6 uppercase tracking-wider">
                    Research Grade · Lab Tested
                  </p>
                </div>

                <div>
                  <div className="mb-6">
                    <h2 className="text-xs font-bold text-primary-foreground/50 uppercase tracking-wider mb-3">
                      Description
                    </h2>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {product.details}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xs font-bold text-primary-foreground/50 uppercase tracking-wider mb-3">
                      Price
                    </h2>
                    <p className="text-accent font-bold text-3xl">{product.price}</p>
                  </div>

                  <div className="flex gap-3 flex-col sm:flex-row">
                    <button
                      onClick={() => {
                        addItem(product);
                        toast.success(`${product.name} added to cart`);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary font-bold hover:opacity-90 transition-opacity"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => navigate("/")}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/20 text-primary-foreground font-bold hover:bg-primary-foreground/5 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 p-6">
              <h3 className="font-bold text-primary-foreground mb-2">Lab Tested</h3>
              <p className="text-sm text-primary-foreground/60">
                Every batch is laboratory verified for purity and quality.
              </p>
            </div>
            <div className="bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 p-6">
              <h3 className="font-bold text-primary-foreground mb-2">Fast Shipping</h3>
              <p className="text-sm text-primary-foreground/60">
                Quick and discreet shipping to anywhere in the US.
              </p>
            </div>
            <div className="bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 p-6">
              <h3 className="font-bold text-primary-foreground mb-2">Satisfaction</h3>
              <p className="text-sm text-primary-foreground/60">
                100% satisfaction guarantee or your money back.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
