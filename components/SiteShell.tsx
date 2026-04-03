import Link from "next/link";
import { SmokeLayer } from "@/components/SmokeLayer";

type Props = {
  children: React.ReactNode;
  cartCount?: number;
};

export function SiteShell({ children, cartCount = 0 }: Props) {
  return (
    <div className="page-shell">
      <SmokeLayer />
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">pick A batch</Link>
          <nav className="nav">
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/checkout" className="cart-chip">Cart ({cartCount})</Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
