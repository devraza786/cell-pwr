import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OrderCTA = () => (
  <section id="order" className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
          Ready to Order?
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Place Your Order Today
        </h2>
        <p className="text-primary-foreground/60 text-sm mb-8">
          Select your products and fill in your details — we'll handle the rest.
        </p>
        <Link
          to="/order"
          className="inline-flex px-10 py-4 rounded-lg bg-cta text-cta-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
        >
          Go to Order Form
        </Link>
      </motion.div>
    </div>
  </section>
);

export default OrderCTA;
