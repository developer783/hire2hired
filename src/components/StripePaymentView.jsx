import React, { useState } from 'react';
import { 
  CreditCard, ShieldCheck, CheckCircle2, Lock, ArrowRight, ArrowLeft, 
  Tag, ChevronDown, Check, Globe, Sparkles
} from 'lucide-react';

export default function StripePaymentView({ 
  formData = {}, 
  onSuccess, 
  onBack, 
  isFullPage = false,
  onNavigate 
}) {
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paidSuccess, setPaidSuccess] = useState(false);

  // Form Fields
  const [contactEmail, setContactEmail] = useState(formData.email || 'email@example.com');
  const [contactName, setContactName] = useState(
    formData.firstName ? `${formData.firstName} ${formData.lastName}` : 'John Doe'
  );
  const [contactPhone, setContactPhone] = useState(formData.phone || '+91 9812345678');
  
  // Card details
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardName, setCardName] = useState(contactName);
  const [country, setCountry] = useState('India');
  const [address, setAddress] = useState('');
  const [saveLink, setSaveLink] = useState(true);

  // Pricing
  const rawINR = 49580;
  const rawUSD = 500;

  const currentTotal = currency === 'INR' ? rawINR - discount : rawUSD - (discount ? 100 : 0);
  const formattedTotal = currency === 'INR' 
    ? `₹${currentTotal.toLocaleString('en-IN')}.00` 
    : `$${currentTotal.toFixed(2)}`;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HIRE20' || promoCode.trim().toUpperCase() === 'WELCOME') {
      setDiscount(currency === 'INR' ? 5000 : 50);
      alert('Promo code applied successfully!');
    } else {
      alert('Invalid promo code. Try HIRE20 for discount.');
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaidSuccess(true);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  return (
    <div className={`bg-[#f6f5f2] ${isFullPage ? 'pt-24 pb-20' : 'py-8'} min-h-[85vh]`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {paidSuccess ? (
          <div className="bg-white rounded-3xl p-10 max-w-xl mx-auto text-center border border-slate-200 shadow-xl space-y-5 animate-in zoom-in-95 my-12">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Payment Successful!</h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Thank you, <strong>{contactName}</strong>! Your payment of <strong>{formattedTotal}</strong> for Hire2Hired Consulting Services has been processed securely.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs font-mono text-slate-700 space-y-1">
              <div><span className="text-slate-400 font-bold">Transaction ID:</span> tx_live_{Math.random().toString(36).substring(2, 10)}</div>
              <div><span className="text-slate-400 font-bold">Merchant:</span> Hire2Hired Inc.</div>
              <div><span className="text-slate-400 font-bold">Status:</span> Paid & Verified</div>
            </div>

            <button 
              onClick={() => onNavigate ? onNavigate('home') : window.location.reload()}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs border-0 cursor-pointer shadow"
            >
              Go to Consultant Dashboard
            </button>
          </div>
        ) : (
          <div className="bg-white/70 backdrop-blur-md rounded-[32px] border border-slate-200/90 shadow-2xl overflow-hidden grid lg:grid-cols-12">
            
            {/* LEFT SIDE: Order Summary & Currency Selector (5 Cols) */}
            <div className="lg:col-span-5 bg-[#f3f1ec] p-8 sm:p-10 border-r border-slate-200 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                {/* Logo & Header */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-extrabold text-xs">
                    //
                  </div>
                  <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight">Hire2Hired</span>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pay Hire2Hired Inc</p>
                  <h2 className="text-2xl font-display font-extrabold text-slate-900 mt-1">Choose currency</h2>
                </div>

                {/* Currency Switcher Buttons */}
                <div className="grid grid-cols-2 gap-3 bg-slate-200/60 p-1.5 rounded-2xl">
                  <button 
                    type="button"
                    onClick={() => setCurrency('INR')}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all border-0 cursor-pointer ${
                      currency === 'INR' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-300' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🇮🇳</span> ₹49,580.00
                  </button>

                  <button 
                    type="button"
                    onClick={() => setCurrency('USD')}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all border-0 cursor-pointer ${
                      currency === 'USD' ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-300' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🇺🇸</span> $500.00
                  </button>
                </div>

                <p className="text-[11px] font-semibold text-slate-500 text-center">
                  1 USD = 99.1600 INR <span className="text-slate-400">(includes 3.99% conversion fee)</span>
                </p>

                {/* Service Details Breakdown */}
                <div className="space-y-3 pt-4 border-t border-slate-300/60">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Consulting Services</h4>
                      <p className="text-[11px] text-slate-500 leading-tight max-w-[220px] mt-0.5">
                        • Resume review and optimization<br />
                        • LinkedIn profile optimization<br />
                        • Resume marketing to employers, recruiters, and staffing agencies...
                      </p>
                    </div>
                    <span className="text-sm font-extrabold text-slate-900">
                      {currency === 'INR' ? '₹49,580.00' : '$500.00'}
                    </span>
                  </div>
                </div>

                {/* Promo Code Accordion */}
                <div className="pt-2">
                  {!promoOpen ? (
                    <button 
                      type="button"
                      onClick={() => setPromoOpen(true)}
                      className="text-xs font-extrabold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 border-0 bg-transparent cursor-pointer p-0"
                    >
                      <Tag className="w-3.5 h-3.5" /> Add promotion code
                    </button>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="HIRE20" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold uppercase outline-none"
                      />
                      <button type="submit" className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer border-0">
                        Apply
                      </button>
                    </form>
                  )}
                </div>

                {/* Totals Breakdown */}
                <div className="space-y-2 pt-4 border-t border-slate-300/60 text-xs font-semibold text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-extrabold text-slate-900">{currency === 'INR' ? '₹49,580.00' : '$500.00'}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-extrabold">
                      <span>Discount</span>
                      <span>-{currency === 'INR' ? `₹${discount}` : '$50.00'}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-400">
                    <span>Tax (i)</span>
                    <span>Enter address to calculate</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-slate-900 pt-3 border-t border-slate-300/60">
                    <span>Total due</span>
                    <span className="text-xl font-display font-extrabold text-slate-900">{formattedTotal}</span>
                  </div>
                </div>

              </div>

              {/* Back Button */}
              {onBack && (
                <button 
                  type="button"
                  onClick={onBack}
                  className="text-xs font-extrabold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 border-0 bg-transparent cursor-pointer p-0"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Application
                </button>
              )}

            </div>

            {/* RIGHT SIDE: Stripe Payment Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 space-y-6">
              
              {/* Express Checkout Buttons (Apple Pay & Stripe Link) */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    type="button"
                    onClick={handlePaymentSubmit}
                    className="py-3.5 rounded-xl bg-black hover:bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center gap-1 cursor-pointer border-0 shadow-xs"
                  >
                    <span></span> Pay
                  </button>

                  <button 
                    type="button"
                    onClick={handlePaymentSubmit}
                    className="py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center gap-1 cursor-pointer border-0 shadow-xs"
                  >
                    <span>&gt;</span> link
                  </button>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-slate-200 w-full"></div>
                  <span className="bg-white px-3 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest absolute">OR</span>
                </div>
              </div>

              <form onSubmit={handlePaymentSubmit} className="space-y-5">
                
                {/* Contact Information */}
                <div className="space-y-3">
                  <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Contact information</p>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">Contact details</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition mb-2"
                    />
                    <input 
                      type="text" 
                      required
                      placeholder="Full name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition mb-2"
                    />
                    <div className="relative">
                      <input 
                        type="tel" 
                        required
                        placeholder="091234 56789"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-3">
                  <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Payment method</p>

                  <div className="border border-slate-200 rounded-2xl p-4 space-y-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 pb-2 border-b border-slate-200">
                      <CreditCard className="w-4 h-4 text-indigo-600" />
                      <span>Card</span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Card Information</label>
                      <div className="relative mb-2">
                        <input 
                          type="text" 
                          required
                          placeholder="1234 1234 1234 1234"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-900 outline-none focus:border-indigo-600 transition"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                          <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded font-bold text-blue-700">VISA</span>
                          <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded font-bold text-red-600">MC</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <input 
                          type="text" 
                          required
                          placeholder="MM / YY"
                          value={cardExp}
                          onChange={(e) => setCardExp(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-900 outline-none focus:border-indigo-600 transition"
                        />
                        <input 
                          type="text" 
                          required
                          placeholder="CVC"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-900 outline-none focus:border-indigo-600 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Cardholder name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Full name on card"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 outline-none focus:border-indigo-600 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Billing address</label>
                      <select 
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 outline-none focus:border-indigo-600 transition mb-2"
                      >
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>

                      <input 
                        type="text" 
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 outline-none focus:border-indigo-600 transition"
                      />
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer select-none text-[11px] font-semibold text-slate-600 pt-1">
                      <input 
                        type="checkbox" 
                        checked={saveLink}
                        onChange={(e) => setSaveLink(e.target.checked)}
                        className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span>Save my information with Link for faster checkout</span>
                    </label>
                  </div>
                </div>

                {/* Submit Pay Button */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-lg hover:scale-[1.01] transition-all border-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Processing Payment...</span>
                  ) : (
                    <>
                      Pay {formattedTotal}
                    </>
                  )}
                </button>

                <div className="pt-2 text-center text-[10px] text-slate-400 font-medium space-x-3">
                  <span>Powered by <strong>stripe</strong></span>
                  <span>•</span>
                  <a href="#terms" className="text-slate-400 hover:underline">Terms</a>
                  <span>•</span>
                  <a href="#privacy" className="text-slate-400 hover:underline">Privacy</a>
                </div>

              </form>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
