import type { Metadata } from "next";
import { Urbanist, Figtree, Inter, Azeret_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import { AppProvider } from "@/providers/app";
import { cn } from "@/lib/utils";
import Header from "@/partials/Header";
import MiniPlayer from "../Components/MiniPlayer";
import { UserInteractionTracker } from "@/partials/UserInteractionTracker";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const azeret = Azeret_Mono({ subsets: ["latin"], variable: "--font-azeret" });

const aeonik = localFont({
  src: [
    {
      path: "../../assets/fonts/Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "Euterpe",
  description: "Making space for the artists of tomorrow.",
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
          urbanist.className,
          urbanist.variable,
          aeonik.variable,
          figtree.variable,
          inter.variable,
          azeret.variable,
        )}
      >
        <AppProvider>
          <UserInteractionTracker />
            <Header />
            {children}
            <MiniPlayer />
            </AppProvider>
      </body>
    </html>
  );
}