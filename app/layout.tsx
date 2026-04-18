import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { MAINTENANCE_MODE } from "@/lib/maintenanceMode";

export const metadata: Metadata = {
  title: "Pick A Batch",
  description: "Know your batch. Choose better. Feel better.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (MAINTENANCE_MODE) {
    return (
      <html lang="en">
        <body>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#000",
            color: "#fff",
            textAlign: "center",
            padding: "20px"
          }}>
            <div>
              <h1>Maintenance Mode</h1>
              <p>We're currently paused. Check back soon!</p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
