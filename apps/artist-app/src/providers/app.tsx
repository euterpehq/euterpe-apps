import React from "react";
import { ThemeProvider } from "./theme";
import { Toaster } from "@/components/ui/toaster";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
     
        <div>hello</div>
          <Toaster />
     
    </ThemeProvider>
  );
}
