import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from '@clerk/nextjs'
import { Tooltip } from "radix-ui";
import { TooltipProvider } from "@/components/ui/tooltip";

const outfit = Outfit({            // Added: Specifies available weight
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default : "Resonance",
    template : "%s | Resonance"
  },
  description: "AI-powered text-to-speech and voice cloning platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={cn("font-sans", outfit.className)}>
        <body
          className={`${outfit.className}antialiased`}
        >
          <ClerkProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </ClerkProvider>
        </body>
      </html>
  );
}
