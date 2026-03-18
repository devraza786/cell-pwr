import { Helmet } from "react-helmet-async";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CartPage = () => {
  const { items, updateQty, removeItem, clearCart, totalPrice } = useCart();

  return (
    <>
      <Helmet>
        <title>Shopping Cart - Cell PWR</title>
        <meta name="description" content="Review your shopping cart and proceed to checkout. Fast and secure ordering for Cell PWR wellness products." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://cellpwr.com/cart" />
        <meta property="og:title" content="Shopping Cart - Cell PWR" />
        <meta property="og:description" content="Review your shopping cart and proceed to checkout." />
        <meta property="og:url" content="https://cellpwr.com/cart" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <ShoppingBag size={20} className="text-accent" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Your Cart</h1>
          </div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-surface rounded-2xl border border-border"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-4">
                <ShoppingBag size={28} />
              </div>
              <p className="text-muted-foreground text-lg mb-4">Your cart is empty</p>
              <Link
                to="/"
                className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <>
              <div className="space-y-3 mb-8">
                {items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-between bg-surface rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                      <p className="text-accent text-xs font-medium mt-1">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 bg-background border border-border rounded-lg">
                        <button
                          onClick={() => updateQty(item.name, item.qty - 1)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-semibold text-foreground w-8 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.name, item.qty + 1)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-foreground font-bold w-20 text-right">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.name)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent opacity-[0.06] blur-[80px]" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary-foreground/50 text-sm">Subtotal</span>
                    <span className="text-primary-foreground/70 text-sm">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-primary-foreground font-display font-semibold">Total</span>
                    <span className="text-primary-foreground font-bold text-2xl font-display">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <Link
                    to="/checkout"
                    className="block w-full text-center py-3.5 rounded-lg bg-cta text-cta-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={clearCart}
                    className="block w-full text-center py-2 mt-3 text-primary-foreground/40 text-xs hover:text-primary-foreground/70 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
