import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6">
              <Check size={32} />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-3">Order Placed!</h1>
            <p className="text-muted-foreground mb-8">
              Your order has been sent to 100YARDS for processing.
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
    );
  }

  if (items.length === 0) {
    return (
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
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/cart" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Cart
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">Checkout</h1>

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
              <h2 className="font-display text-lg font-semibold text-foreground">Shipping Information</h2>
              {["Full Name", "Address", "City", "Email", "Phone"].map((f) => (
                <div key={f}>
                  <label className="text-sm font-medium text-foreground block mb-1.5">{f}</label>
                  <input
                    type={f === "Email" ? "email" : f === "Phone" ? "tel" : "text"}
                    required
                    placeholder={f}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">State</label>
                  <input
                    type="text"
                    required
                    placeholder="State"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">ZIP Code</label>
                  <input
                    type="text"
                    required
                    placeholder="ZIP"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-cta text-cta-foreground font-semibold text-sm hover:opacity-90 transition-opacity mt-4"
              >
                Place Order — ${totalPrice.toFixed(2)}
              </button>
              <p className="text-muted-foreground text-xs text-center">
                Orders will be sent to 100YARDS for processing
              </p>
            </form>

            {/* Order Summary */}
            <div className="md:col-span-2">
              <div className="bg-surface rounded-xl border border-border p-6 sticky top-24">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.name} className="flex justify-between text-sm">
                      <span className="text-foreground">
                        {item.name} <span className="text-muted-foreground">×{item.qty}</span>
                      </span>
                      <span className="font-medium text-foreground">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 flex justify-between">
                  <span className="font-display font-semibold text-foreground">Total</span>
                  <span className="font-display font-bold text-lg text-foreground">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
