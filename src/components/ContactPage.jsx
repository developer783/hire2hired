import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Home, ChevronRight, 
  MessageSquare, Clock, ShieldCheck, Sparkles, HelpCircle, ChevronDown
} from 'lucide-react';
import heroImg from '../assets/contact_hero.png';

export default function ContactPage({ isFullPage = true }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      title: "Email",
      value: "support@hire2hired.com",
      href: "mailto:support@hire2hired.com",
      subtitle: "Our support team answers within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-indigo-600" />,
      title: "Phone",
      value: "307-384-7833",
      href: "tel:3073847833",
      subtitle: "Mon - Fri from 9am to 6pm MST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      title: "Office",
      value: "Casper, WY",
      href: "#",
      subtitle: "Casper, Wyoming, United States"
    }
  ];

  const faqs = [
    {
      q: "How quickly will your team respond to my message?",
      a: "We typically respond to all inquiries within 24 hours during business days (Mon - Fri). For urgent matters, feel free to call us directly at 307-384-7833."
    },
    {
      q: "Can I schedule a live consultation for IT Services or Staffing?",
      a: "Yes! Submit your request in the form above or click 'Request Callback' in the header to book a free 30-minute technical consultation with our senior architects."
    },
    {
      q: "What types of technical bootcamps and staffing do you offer?",
      a: "We offer 12+ specialized engineering bootcamps (Java+AI, Cloud DevOps, GenAI, React/Next.js) as well as dedicated technical staffing & placement services for enterprise clients."
    }
  ];

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto mb-6 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Contact Us</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> WE ARE HERE TO HELP
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            Get in <span className="gradient-text-animated">Touch</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-xl leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* 3 Contact Info Cards Bar */}
        <div className="max-w-6xl mx-auto mb-16 grid md:grid-cols-3 gap-6">
          {contactCards.map((card, idx) => (
            <a 
              key={idx}
              href={card.href}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-indigo-300 transition-all text-center group no-underline block"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 mb-1">{card.title}</h3>
              <p className="text-indigo-600 font-extrabold text-lg tracking-tight mb-1">{card.value}</p>
              <p className="text-slate-500 text-xs font-medium">{card.subtitle}</p>
            </a>
          ))}
        </div>

        {/* Form & Illustration Split View */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Main Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-display font-extrabold text-slate-900">Send us a Message</h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3 animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong>{formData.firstName || 'there'}</strong>! Our team has received your message and will respond to <strong>{formData.email || 'your email'}</strong> within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold border-0 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">First Name <span className="text-rose-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Last Name <span className="text-rose-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email <span className="text-rose-500">*</span></label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      placeholder="307-384-7833"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject <span className="text-rose-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Message <span className="text-rose-500">*</span></label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md hover:scale-[1.01] transition-all border-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-slate-400 text-xs font-medium pt-2">
                  We typically respond within 24 hours during business days. For urgent matters, please call us directly at <strong>307-384-7833</strong>.
                </p>

              </form>
            )}
          </div>

          {/* Right Visual Card & FAQ (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Illustration Card */}
            <div className="bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-4 border border-slate-800 shadow-xl overflow-hidden group relative">
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-slate-300 font-bold">Hire2Hired Support Hub</span>
                <span className="text-emerald-400 font-bold">● CASPER, WY</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden mt-3 border border-slate-800">
                <img 
                  src={heroImg} 
                  alt="Hire2Hired Support Team Casper Wyoming" 
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-display font-extrabold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" /> Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-3.5 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-bold text-xs text-slate-800 border-0 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openFaq === i ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
                    </button>
                    {openFaq === i && (
                      <div className="p-3.5 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100 animate-in fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
