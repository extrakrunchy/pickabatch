"use client";

import { useCart } from "@/components/CartProvider";

export function CartCountClient({ children }: { children: (cartCount: number) => React.ReactNode }) {
  const { cartCount } = useCart();
  return <>{children(cartCount)}</>;
}
