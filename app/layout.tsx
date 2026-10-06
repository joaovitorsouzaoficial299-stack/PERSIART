import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persiart | Cortinas e Persianas em Anápolis",
  description: "Cortinas, persianas, toldos e automação sob medida em Anápolis-GO.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}