// Real payments go through Hire2Hired's Stripe Payment Link (same link the previous site used).
// Stripe hosts the checkout page, handles cards/currency/promo codes, and emails receipts.
// After payment Stripe redirects to /payment/success or /payment/cancel (set in the Stripe
// dashboard under the Payment Link's "After payment" settings).
export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/bJeeVfb2radaglZ4ZteAg00';

export const SERVICE = {
  name: 'Consulting Services',
  priceUSD: 500,
  includes: [
    'Resume review and optimization',
    'LinkedIn profile optimization',
    'Resume marketing to employers, recruiters, and staffing agencies',
    'Job matching and targeted applications',
    'Interview preparation and guidance',
  ],
};

const EMAIL_KEY = 'h2h_checkout_email';

/** Stripe checkout URL, with the customer's email prefilled when known. */
export function stripeCheckoutUrl(email) {
  const url = new URL(STRIPE_PAYMENT_LINK);
  const e = (email || getCheckoutEmail() || '').trim();
  if (e) url.searchParams.set('prefilled_email', e);
  return url.toString();
}

/** Remember the email so "Try Again" on the cancel page can prefill it. */
export function rememberCheckoutEmail(email) {
  try { if (email) sessionStorage.setItem(EMAIL_KEY, email); } catch { /* storage unavailable */ }
}

function getCheckoutEmail() {
  try { return sessionStorage.getItem(EMAIL_KEY) || ''; } catch { return ''; }
}

/** Send the browser to Stripe's hosted checkout. */
export function goToCheckout(email) {
  rememberCheckoutEmail(email);
  window.location.href = stripeCheckoutUrl(email);
}
