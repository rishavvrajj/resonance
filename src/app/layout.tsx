import type { Metadata } from "next";
import { Geist_Mono, Inter, Istok_Web} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from '@clerk/nextjs'

const istok = Istok_Web({
  variable: '--font-sans',  // Fixed: 'Variable' → 'variable'
  weight: '400',            // Added: Specifies available weight
  subsets: ['latin']
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resonance",
  description: "ElevenLabs Clone by ig:@rishavvrajj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={cn("font-sans", istok.variable)}>
        <body
          className={`${geistMono.variable} antialiased`}
        >
          <ClerkProvider>
            {children}
            <Toaster />
          </ClerkProvider>
        </body>
      </html>
  );
}
