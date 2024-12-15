import type { Metadata } from "next";
import { Urbanist, Figtree, Inter, Azeret_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AppProvider } from "@/providers/app";
import Navbar from "@/partials/Navbar";
import { cn } from "@/lib/utils";
import Footer from "@/partials/Footer";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const azeret = Azeret_Mono({ subsets: ["latin"], variable: "--font-azeret" });

const aeonik = localFont({
  src: [
    {
      path: "../assets/fonts/Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "Euterpe Waitlist",
  description: `"making space for a million overlooked artists."`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          figtree.className,
          urbanist.variable,
          aeonik.variable,
          figtree.variable,
          inter.variable,
          azeret.variable,
        )}
      >
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
