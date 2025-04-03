'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const hideFooterPaths = ['/support-center', '/contact'];
  const shouldShowFooter = !hideFooterPaths.includes(pathname);

  if (!shouldShowFooter) return null;
  return <Footer />;
} 