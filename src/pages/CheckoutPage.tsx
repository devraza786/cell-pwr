import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, ShieldCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Order Confirmation - Cell PWR</title>
          <meta name="description" content="Your order has been successfully placed and sent for processing." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent/10 text-accent mb-6">
                <Check size={36} strokeWidth={3} />
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-3">Order Placed!</h1>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Your order has been sent to 100YARDS for processing. We'll be in touch shortly.
              </p>
              <Link
                to="/"
                className="inline-flex px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
            </motion.div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Checkout - Cell PWR</title>
          <meta name="description" content="Complete your purchase at Cell PWR with a secure, fast checkout process." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground text-lg mb-4">No items to checkout</p>
              <Link
                to="/"
                className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Continue Shopping
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
        <title>Checkout - Cell PWR</title>
        <meta name="description" content="Complete your purchase at Cell PWR with a secure, fast checkout process." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://cellpwr.com/checkout" />
        <meta property="og:title" content="Checkout - Cell PWR" />
        <meta property="og:description" content="Complete your purchase securely." />
        <meta property="og:url" content="https://cellpwr.com/checkout" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/cart" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Cart
          </Link>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Lock size={20} className="text-accent" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Checkout</h1>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Form */}
            <form
              className="md:col-span-3 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                clearCart();
                setSubmitted(true);
              }}
            >
              <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                <ShieldCheck size={18} className="text-accent" />
                Shipping Information
              </h2>
              {["Full Name", "Address", "City", "Email", "Phone"].map((f) => (
                <div key={f}>
                  <label className="text-sm font-medium text-foreground block mb-1.5">{f}</label>
                  <input
                    type={f === "Email" ? "email" : f === "Phone" ? "tel" : "text"}
                    required
                    placeholder={f}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                  />
                </div>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">State</label>
                  <input
                    type="text"
                    required
                    placeholder="State"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">ZIP Code</label>
                  <input
                    type="text"
                    required
                    placeholder="ZIP"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cta text-cta-foreground font-semibold text-sm hover:opacity-90 transition-opacity mt-4"
              >
                Place Order — ${totalPrice.toFixed(2)}
              </button>
              <p className="text-muted-foreground text-xs text-center flex items-center justify-center gap-1">
                <Lock size={10} /> Orders will be sent to 100YARDS for processing
              </p>
            </form>

            {/* Order Summary */}
            <div className="md:col-span-2">
              <div className="bg-primary rounded-2xl p-6 md:sticky md:top-24 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-accent opacity-[0.06] blur-[60px]" />
                </div>
                <div className="relative z-10">
                  <h2 className="font-display text-lg font-semibold text-primary-foreground mb-5">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.name} className="flex justify-between text-sm">
                        <span className="text-primary-foreground/80">
                          {item.name} <span className="text-primary-foreground/40">×{item.qty}</span>
                        </span>
                        <span className="font-medium text-primary-foreground">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-primary-foreground/10 pt-4 flex justify-between items-center">
                    <span className="font-display font-semibold text-primary-foreground">Total</span>
                    <span className="font-display font-bold text-xl text-primary-foreground">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default CheckoutPage;
