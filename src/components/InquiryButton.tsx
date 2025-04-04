import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const InquiryButton = () => {
  return (
    <Link
      href="/contact"
      className="fixed right-6 bottom-[110px] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Make an Inquiry"
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute right-16 whitespace-nowrap rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
        Make an Inquiry
      </div>
    </Link>
  );
};

export default InquiryButton; 