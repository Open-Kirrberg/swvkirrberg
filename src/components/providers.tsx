"use client";

import { ThemeProvider } from "@mind-studio/ui";
import { swvKirrberg } from "@/lib/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      theme={swvKirrberg}
      defaultTheme="light"
      enableSystem={false}
      storageKey="swvkirrberg-theme-v1"
    >
      {children}
    </ThemeProvider>
  );
}
