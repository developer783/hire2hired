// WhatsApp CHAT ONLY. This is not the official contact number and must never be displayed
// on the site as a phone number; it is only used to open a WhatsApp chat (wa.me link).
// Official phone number shown on the site stays 307-384-7833.
const WHATSAPP_NUMBER = '13079983803'; // +1 307 998 3803, digits only for wa.me

export const WHATSAPP_DEFAULT_MESSAGE = "Hi Hire2Hired, I'd like to know more about your services.";

/** Link that opens a WhatsApp chat (app on phones, WhatsApp Web on desktop). */
export function whatsappChatUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
