"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

interface ThemeProviderPropsCorrected extends ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderPropsCorrected) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
