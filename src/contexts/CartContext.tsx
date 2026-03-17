import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  name: string;
  desc: string;
  price: number;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: { name: string; desc: string; price: string }) => void;
  removeItem: (name: string) => void;
  updateQty: (name: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: { name: string; desc: string; price: string }) => {
    const numPrice = parseFloat(product.price.replace("$", ""));
    setItems((prev) => {
      const existing = prev.find((i) => i.name === product.name);
      if (existing) {
        return prev.map((i) =>
          i.name === product.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { name: product.name, desc: product.desc, price: numPrice, qty: 1 }];
    });
  };

  const removeItem = (name: string) =>
    setItems((prev) => prev.filter((i) => i.name !== name));

  const updateQty = (name: string, qty: number) => {
    if (qty <= 0) return removeItem(name);
    setItems((prev) =>
      prev.map((i) => (i.name === name ? { ...i, qty } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
