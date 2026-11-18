import React from 'react';
import { CheckCircle2, XCircle, Home, RotateCcw, Mail } from 'lucide-react';
import { stripeCheckoutUrl } from '../lib/payment';
import { FORM_INBOX } from '../lib/sendForm';

/**
 * Where Stripe sends customers back after checkout:
 *   /payment/success  and  /payment/cancel   (configured on the Stripe Payment Link)
 */
export default function PaymentResultPage({ status }) {
  const success = status === 'success';

  return (
    <div className="bg-[#fafbfd] pt-32 pb-24 min-h-[85vh] flex items-start justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center space-y-5">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md text-white ${success ? 'bg-emerald-500' : 'bg-rose-500'}`}>
          {success ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
        </div>

        {success ? (
          <>
            <h1 className="text-3xl font-display font-extrabold text-slate-900">Payment Successful!</h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Thank you for your payment. Our agent will connect with you within 12 hours to discuss your application and next steps.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              You will receive a confirmation email shortly with details about your subscription and what to expect next.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-display font-extrabold text-slate-900">Payment Cancelled</h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Your payment was not completed. No charges have been made to your account.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              If you experienced any issues during checkout or have questions, please don't hesitate to contact our support team at{' '}
              <a href={`mailto:${FORM_INBOX}`} className="text-indigo-600 font-bold hover:underline">{FORM_INBOX}</a>.
            </p>
          </>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
          {/* Plain links: these pages live at /payment/*, so a full load back to "/" resets the URL cleanly */}
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold no-underline shadow"
          >
            <Home className="w-4 h-4" /> Return to Home
          </a>
          {success ? (
            <a
              href={`mailto:${FORM_INBOX}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold no-underline"
            >
              <Mail className="w-4 h-4" /> Contact Support
            </a>
          ) : (
            <a
              href={stripeCheckoutUrl()}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold no-underline shadow"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
