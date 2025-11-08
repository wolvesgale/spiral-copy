import type { Metadata } from "next";
import { PortfolioClient } from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio companies and experiments supported by eggs.email.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
