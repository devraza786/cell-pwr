import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import vialImg from "@/assets/vial-generic.png";
import { useCart } from "@/contexts/CartContext";

const products = [
  { name: "BPC-157", desc: "5mg / 10mg vials", price: "$49.99" },
  { name: "TB-500", desc: "5mg / 10mg vials", price: "$54.99" },
  { name: "GHK-Cu", desc: "50mg / 100mg vials", price: "$39.99" },
  { name: "Ipamorelin", desc: "5mg vials", price: "$44.99" },
  { name: "CJC-1295", desc: "2mg / 5mg vials", price: "$59.99" },
  { name: "PT-141", desc: "10mg vials", price: "$34.99" },
  { name: "Sermorelin", desc: "10mg vials", price: "$49.99" },
  { name: "Selank", desc: "7mg / 5mg vials", price: "$64.99" },
  { name: "AOD-9604", desc: "5mg / 10mg vials", price: "$29.99" },
  { name: "GHRP-6", desc: "10mg / 50mg vials", price: "$79.99" },
];

const ProductsSection = () => {
  const { addItem } = useCart();

  return (
    <section id="shop" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--accent)/0.03),transparent_50%)] pointer-events-none" />

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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Check Out Our Peptide Stack
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            Research-grade peptides with verified purity. Every batch lab tested.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-background rounded-xl border border-border p-5 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <img src={vialImg} alt={p.name} className="h-24 w-auto mb-4 object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground">{p.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
              <p className="text-cta font-bold text-lg mt-3">{p.price}</p>
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
  );
};

export default ProductsSection;
