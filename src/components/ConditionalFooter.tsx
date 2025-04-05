'use client';

import { usePathname } from 'next/navigation';
import ContactFooter from './ContactFooter';

const ConditionalFooter = () => {
  const pathname = usePathname();
  
  // Don't show footer on these pages
  const hideFooterPaths = [
    '/loan-application',
    '/loan-against-property',
    '/education-loan',
    '/support-center'
  ];

  if (hideFooterPaths.includes(pathname)) {
    return null;
  }

  return <ContactFooter />;
};

export default ConditionalFooter; 