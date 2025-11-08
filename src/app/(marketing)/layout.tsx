import type { ReactNode } from "react";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
    </div>
  );
}
