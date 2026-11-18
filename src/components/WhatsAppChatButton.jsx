import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappChatUrl } from '../lib/whatsapp';

/** Floating "chat on WhatsApp" button shown on every page. The number itself is never displayed. */
export default function WhatsAppChatButton() {
  return (
    <a
      href={whatsappChatUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 no-underline"
    >
      {/* Label: slides out on hover (desktop) */}
      <span className="hidden sm:block pointer-events-none whitespace-nowrap rounded-full bg-slate-900 text-white text-xs font-bold px-4 py-2 shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-200">
        Chat with us on WhatsApp
      </span>
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/20 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-emerald-300 transition-transform">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping [animation-duration:2.5s]" aria-hidden="true"></span>
        <MessageCircle className="relative w-7 h-7" strokeWidth={2.2} />
      </span>
    </a>
  );
}
