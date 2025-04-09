import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryButton from '@/components/InquiryButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LotliteFintech",
  description: "Your trusted financial partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <InquiryButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
