import type { Metadata } from "next";
import { Urbanist, Figtree, Inter, Azeret_Mono } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { AppProvider } from "@/providers/app";
import "./globals.css";
import DesktopOnlyNotice from "@/components/desktop-only-notice";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
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
  title: "Euterpe",
  description: "making space for a million overlooked artists.",
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
          "bg-black",
        )}
      >
        <AppProvider>
          <div className="md:hidden">
            <DesktopOnlyNotice />
          </div>
          <div className="hidden md:block">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}
