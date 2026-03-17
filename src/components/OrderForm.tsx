import { useState } from "react";
import { motion } from "framer-motion";

const productOptions = [
  "BPC-157", "PT-141", "TB-500", "Sermorelin",
  "GHK-Cu", "Selank", "Ipamorelin", "AOD-9604",
  "CJC-1295", "GHRP-6", "Melanotan II",
];

const OrderForm = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (p: string) =>
    setSelected((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]));

  return (
    <section id="order" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-10 text-center">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
              Place Your Order
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Order Form
            </h2>
            <p className="text-primary-foreground/60 mt-3 text-sm">
              Complete the form below to place your order
            </p>
          </div>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Order submitted! We will contact you shortly.");
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {["Name", "Address", "Email", "Phone"].map((f) => (
                  <div key={f}>
                    <label className="text-primary-foreground/80 text-sm font-medium block mb-1.5">
                      {f}
                    </label>
                    <input
                      type={f === "Email" ? "email" : f === "Phone" ? "tel" : "text"}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                      placeholder={`Your ${f.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-primary-foreground/80 text-sm font-medium block mb-3">
                  Select Products
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {productOptions.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => toggle(p)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                        selected.includes(p)
                          ? "bg-accent text-accent-foreground border-accent"
                          : "border-primary-foreground/20 text-primary-foreground/70 hover:border-primary-foreground/40"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cta text-cta-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Submit Order
            </button>
            <p className="text-primary-foreground/40 text-xs text-center">
              Orders will be sent to 100YARDS for processing
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderForm;
