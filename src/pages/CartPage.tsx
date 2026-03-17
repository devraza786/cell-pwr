import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CartPage = () => {
  const { items, updateQty, removeItem, clearCart, totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">Your cart is empty</p>
              <Link
                to="/"
                className="inline-flex px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-between bg-surface rounded-xl border border-border p-5"
                  >
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-background border border-border rounded-lg">
                        <button
                          onClick={() => updateQty(item.name, item.qty - 1)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium text-foreground w-6 text-center">
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
              <div className="bg-primary rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-primary-foreground/70 text-sm">Subtotal</span>
                  <span className="text-primary-foreground font-bold text-xl">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full text-center py-3 rounded-lg bg-cta text-cta-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="block w-full text-center py-2 mt-3 text-primary-foreground/50 text-xs hover:text-primary-foreground/80 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
