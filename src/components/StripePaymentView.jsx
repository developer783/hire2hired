import React, { useState } from 'react';
import { ShieldCheck, Lock, ArrowRight, ArrowLeft, Check, Globe, Mail, Loader2 } from 'lucide-react';
import { SERVICE, goToCheckout } from '../lib/payment';
import logo from '../assets/logo.png';

/**
 * Order summary + hand-off to Stripe's hosted checkout (no card details are handled on this site).
 * Reached via #payment. The signup flow redirects to Stripe directly after submitting.
 */
export default function StripePaymentView({ formData = {}, onBack, isFullPage = false, onNavigate }) {
  const [email, setEmail] = useState(formData.email || '');
  const [redirecting, setRedirecting] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setRedirecting(true);
    goToCheckout(email);
  };

  return (
    <div className={`bg-[#f6f5f2] ${isFullPage ? 'pt-24 pb-20' : 'py-8'} min-h-[85vh]`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/70 backdrop-blur-md rounded-[32px] border border-slate-200/90 shadow-2xl overflow-hidden grid lg:grid-cols-12">

          {/* LEFT: Order summary */}
          <div className="lg:col-span-5 bg-[#f3f1ec] p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="" className="h-6 w-auto" />
                <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight">
                  Hire<span className="text-[#FE6037]">2</span>Hired
                </span>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pay Hire2Hired Inc</p>
                <p className="text-4xl font-display font-extrabold text-slate-900 mt-1">${SERVICE.priceUSD.toFixed(2)}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-300/60">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-sm font-extrabold text-slate-900">{SERVICE.name}</h4>
                  <span className="text-sm font-extrabold text-slate-900">${SERVICE.priceUSD.toFixed(2)}</span>
                </div>
                <ul className="space-y-1.5 list-none p-0 m-0">
                  {SERVICE.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-slate-600 leading-snug">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-2 text-[11px] font-semibold text-slate-500 pt-4 border-t border-slate-300/60">
                <Globe className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>You can choose to pay in USD or INR on the secure checkout page. Taxes and promotion codes are applied there.</span>
              </div>
            </div>

            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="self-start text-xs font-extrabold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 border-0 bg-transparent cursor-pointer p-0"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Application
              </button>
            )}
          </div>

          {/* RIGHT: Proceed to Stripe */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 flex flex-col justify-center">
            <form onSubmit={handleCheckout} className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-display font-extrabold text-slate-900">Secure checkout</h2>
                <p className="text-sm text-slate-500">
                  You'll complete payment on Stripe's secure checkout page. Card details are entered on Stripe and never touch our servers.
                </p>
              </div>

              <div>
                <label htmlFor="checkout-email" className="block text-xs font-bold text-slate-700 mb-1.5">Email for your receipt</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    id="checkout-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={redirecting}
                className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-80 disabled:cursor-wait text-white font-extrabold text-sm shadow-lg hover:scale-[1.01] transition-all border-0 cursor-pointer flex items-center justify-center gap-2"
              >
                {redirecting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Opening secure checkout…</>
                ) : (
                  <><Lock className="w-4 h-4" /> Proceed to Secure Payment <ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Payments processed securely by <strong className="text-slate-700">Stripe</strong>
              </div>

              <div className="pt-2 text-center text-[11px] text-slate-400 font-medium space-x-3">
                <a href="#terms" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('terms'); } }} className="text-slate-400 hover:underline">Terms</a>
                <span>•</span>
                <a href="#privacy" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('privacy'); } }} className="text-slate-400 hover:underline">Privacy</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
