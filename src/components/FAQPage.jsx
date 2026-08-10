import React, { useState } from 'react';
import { 
  HelpCircle, ChevronDown, Search, Sparkles, Home, ChevronRight, 
  MessageSquare, Phone, CheckCircle2, ArrowRight, ShieldCheck, Zap, Users
} from 'lucide-react';
import faqHeroImg from '../assets/faq_hero.png';

export default function FAQPage({ onNavigate, onRequestCallback, isFullPage = true }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ["All", "For Consultants", "For Employers", "Pricing & Payment", "AI Matching Engine"];

  const faqsList = [
    {
      category: "For Consultants",
      question: "Is there any cost for job seekers or consultants to apply?",
      answer: "No, Hire2Hired is 100% free for candidates and consultants. There are zero application, placement, or profile setup fees. Our client enterprises cover placement costs when they hire."
    },
    {
      category: "For Consultants",
      question: "How does Hire2Hired match me with top engineering roles?",
      answer: "Our proprietary AI analyzes 50+ deep technical vector data points beyond standard resume keywords—evaluating code stacks, project complexity, system architecture expertise, and career goals to match you with verified open positions."
    },
    {
      category: "For Consultants",
      question: "How fast can I get interviewed and placed?",
      answer: "Our average time-to-first-interview is under 48 hours, and average placement duration is 14 days—65% faster than traditional staffing agencies."
    },
    {
      category: "For Employers",
      question: "How does Hire2Hired guarantee candidate quality?",
      answer: "Every candidate undergoes automated AI technical screening, system architecture evaluations, and manual reference verification by our senior talent advisors before introduction."
    },
    {
      category: "For Employers",
      question: "What hiring models do you support?",
      answer: "We support Direct-Hire Permanent Placement, Dedicated Contract Augmentation, Contract-to-Hire, and Managed Talent Teams tailored to your project milestones."
    },
    {
      category: "Pricing & Payment",
      question: "What is your pricing model for enterprise hiring?",
      answer: "We operate on a transparent success-based model. You only pay when a candidate is successfully hired and onboarded. We also offer a 90-day replacement guarantee."
    },
    {
      category: "Pricing & Payment",
      question: "What currencies and payment methods do you accept?",
      answer: "We support Stripe billing in USD ($) and INR (₹), supporting Apple Pay, credit cards, bank wire transfers, and ACH invoicing."
    },
    {
      category: "AI Matching Engine",
      question: "How does the AI Resume Optimization work?",
      answer: "Our AI Resume Analyzer parses your resume against live ATS standards, providing real-time scorecards, key skill recommendations, and structural enhancements to maximize interview callback rates."
    },
    {
      category: "AI Matching Engine",
      question: "Is my resume and candidate data kept private?",
      answer: "Yes. All personal data is encrypted using AES-256 standards. Your information is only shared with target enterprise clients upon your explicit consent."
    }
  ];

  const filteredFaqs = faqsList.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main space-y-12">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Resources</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">FAQ's</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS
              </div>

              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
                How Can We Help You?
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Find clear answers to common questions about our AI matching process, consultant applications, enterprise hiring, and payment options.
              </p>

              {/* Search Bar Input */}
              <div className="relative pt-2">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5" />
                <input 
                  type="text" 
                  placeholder="Search questions (e.g. pricing, resume, placement speed...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-indigo-400 focus:bg-white/20 transition shadow-inner"
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl max-w-xs">
                <img 
                  src={faqHeroImg} 
                  alt="Hire2Hired FAQ Help Center" 
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Category Tabs */}
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition border-0 cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-200' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                    isOpen ? 'border-indigo-500 shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 border-0 bg-transparent cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                        Q{index + 1}
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 animate-in fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center space-y-3 border border-slate-200">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-extrabold text-slate-900">No matching questions found</h3>
              <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto">
                Try searching for different keywords or clear your active category filter.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-2 px-6 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold border-0 cursor-pointer hover:bg-indigo-100 transition"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="max-w-4xl mx-auto bg-indigo-50 border border-indigo-100 rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-md">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Still Have Questions?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-medium">
            Can't find the answer you're looking for? Speak directly with our talent specialists or request a callback.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <button 
              onClick={onRequestCallback}
              className="px-6 py-3 rounded-xl btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" /> Request Callback
            </button>

            <button 
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-extrabold border border-slate-200 cursor-pointer transition"
            >
              Contact Support →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
