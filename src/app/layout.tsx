import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import InquiryButton from '@/components/InquiryButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LoteLite Fintech",
  description: "Your trusted financial partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main className="relative w-full">
          {children}
        </main>
        <InquiryButton />
        <WhatsAppButton />
      </body>
    </html>
  );
}
