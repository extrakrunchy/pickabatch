import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { useCart } from "@/components/CartProvider";
import { HomeContent } from "@/components/home-content";

export default function HomePageWrapper() {
  return <HomeContent />;
}
