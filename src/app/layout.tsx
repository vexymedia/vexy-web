import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vexy Labs",
  description:
    "Vycházíme z databáze 850 000+ firemních kontaktů v ČR a SR. Firmy filtrujeme podle obchodního potenciálu, oslovujeme relevantní rozhodovatele a kvalifikované zájemce dostáváme přímo do vašeho kalendáře.",
  openGraph: {
    title: "Vexy Labs",
    url: "https://www.vexylabs.cz/",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs-CZ" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
