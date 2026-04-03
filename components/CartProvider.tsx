"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  addItem: (item: { id: string; name: string }) => void;
  changeQty: (id: string, delta: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem("pickabatch-cart");
    if (raw) {
      try {
        setCart(JSON.parse(raw));
      } catch {
        window.localStorage.removeItem("pickabatch-cart");
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("pickabatch-cart", JSON.stringify(cart));
  }, [cart]);

  const value = useMemo<CartContextType>(() => ({
    cart,
    cartCount: cart.reduce((sum, item) => sum + item.qty, 0),
    addItem: (item) => {
      setCart((prev) => {
        const existing = prev.find((entry) => entry.id === item.id);
        if (existing) {
          return prev.map((entry) =>
            entry.id === item.id ? { ...entry, qty: entry.qty + 1 } : entry
          );
        }
        return [...prev, { ...item, qty: 1 }];
      });
    },
    changeQty: (id, delta) => {
      setCart((prev) =>
        prev
          .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
          .filter((item) => item.qty > 0)
      );
    },
    clearCart: () => setCart([]),
  }), [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
