'use client';

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConditionalFooter from "@/components/ConditionalFooter";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {children}
      </main>
      <ConditionalFooter />
      <WhatsAppButton />
    </div>
  );
} 