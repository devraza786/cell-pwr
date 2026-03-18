import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fd4fa75cea8dc4bea80ee4cb1488f6829%2Fc5b08b69ba0c4bc28267cbe9c0361757?format=webp&width=800&height=1200";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="Cell PWR" className="h-10 md:h-16 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                if (location.pathname !== "/") {
                  e.preventDefault();
                  window.location.href = `/${l.href}`;
                }
              }}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative p-2 text-black hover:text-gray-600 transition-colors"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-cta text-cta-foreground text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <a
            href="#order"
            onClick={(e) => {
              if (location.pathname !== "/") {
                e.preventDefault();
                window.location.href = "/#order";
              }
            }}
            className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-cta text-cta-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
          <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-black hover:text-gray-600"
                  onClick={(e) => {
                    setOpen(false);
                    if (location.pathname !== "/") {
                      e.preventDefault();
                      window.location.href = `/${l.href}`;
                    }
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#order"
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-cta text-cta-foreground text-sm font-semibold"
                onClick={(e) => {
                  setOpen(false);
                  if (location.pathname !== "/") {
                    e.preventDefault();
                    window.location.href = "/#order";
                  }
                }}
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
