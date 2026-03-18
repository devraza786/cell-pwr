import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productOptions = [
  "BPC-157", "PT-141", "TB-500", "Sermorelin",
  "GHK-Cu", "Selank", "Ipamorelin", "AOD-9604",
  "CJC-1295", "GHRP-6", "Melanotan II",
];

const OrderPage = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const toggle = (p: string) =>
    setSelected((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]));

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Order Submitted - Cell PWR</title>
          <meta name="description" content="Your order has been successfully submitted and sent for processing." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6">
                <Check size={32} />
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-3">Order Submitted!</h1>
              <p className="text-muted-foreground mb-8">
                Your order has been sent to 100YARDS for processing. We'll contact you shortly.
              </p>
              <Link
                to="/"
                className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Place Your Order - Cell PWR</title>
        <meta name="description" content="Create a custom order with Cell PWR's premium products. Select the products you want and complete your order." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://cellpwr.com/order" />
        <meta property="og:title" content="Place Your Order - Cell PWR" />
        <meta property="og:description" content="Create a custom order with Cell PWR's premium products." />
        <meta property="og:url" content="https://cellpwr.com/order" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-10">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
                Place Your Order
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Order Form
              </h1>
              <p className="text-muted-foreground mt-3 text-sm">
                Complete the form below to place your order
              </p>
            </div>

            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              {/* Personal Info */}
              <div className="bg-surface rounded-xl border border-border p-6 space-y-4">
                <h2 className="font-display text-lg font-semibold text-foreground mb-2">Your Information</h2>
                {["Name", "Address", "Email", "Phone"].map((f) => (
                  <div key={f}>
                    <label className="text-sm font-medium text-foreground block mb-1.5">{f}</label>
                    <input
                      type={f === "Email" ? "email" : f === "Phone" ? "tel" : "text"}
                      required
                      placeholder={`Your ${f.toLowerCase()}`}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                ))}
              </div>

              {/* Product Selection */}
              <div className="bg-surface rounded-xl border border-border p-6">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">Select Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {productOptions.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => toggle(p)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${
                        selected.includes(p)
                          ? "bg-accent text-accent-foreground border-accent"
                          : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                {selected.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-4">
                    Selected: {selected.join(", ")}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-cta text-cta-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Submit Order
              </button>
              <p className="text-muted-foreground text-xs text-center">
                Orders will be sent to 100YARDS for processing
              </p>
            </form>
          </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OrderPage;
