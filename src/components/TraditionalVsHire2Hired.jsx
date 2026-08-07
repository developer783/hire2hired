import React from 'react';
import { XCircle, CheckCircle2, Zap, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function TraditionalVsHire2Hired({ onRequestCallback }) {
  const comparison = [
    {
      feature: 'Average Time to Hire',
      traditional: '120 Days (Slow Manual Process)',
      hire2hired: '48 Hours (AI Accelerated)',
      advantage: '60x Faster'
    },
    {
      feature: 'Candidate Vetting Quality',
      traditional: 'Keyword Scanning & Resume Padding',
      hire2hired: 'AI Code Analysis & 1-on-1 Tech Review',
      advantage: '100% Verified'
    },
    {
      feature: 'Advisor Expertise',
      traditional: 'Generalist Recruiters Without Tech Background',
      hire2hired: 'Dedicated Technical Advisors & AI Experts',
      advantage: 'Expert Staff'
    },
    {
      feature: 'Pricing & Transparency',
      traditional: 'Hidden Agency Markups & Multi-Layer Cut',
      hire2hired: 'Transparent ISA & Enterprise Direct Rates',
      advantage: 'Zero Hidden Fees'
    },
    {
      feature: 'Candidate Placement Retention',
      traditional: 'High Attrition & Contract Cancellations',
      hire2hired: '99.1% Retention with Continuous Support',
      advantage: 'Guaranteed'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            THE HIRE2HIRED ADVANTAGE
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Traditional Hiring vs <span className="gradient-text-animated">Hire2Hired</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            See how our AI-powered recruitment engine outperforms legacy agencies across speed, technical accuracy, and retention.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Traditional Agencies (Red/Gray Tint) */}
          <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-slate-900">Traditional Agencies</h3>
                <p className="text-xs font-semibold text-slate-500">Legacy Manual Recruitment</p>
              </div>
            </div>

            <div className="space-y-4">
              {comparison.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200/80 space-y-1">
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase">{item.feature}</p>
                  <p className="text-xs font-bold text-rose-600 flex items-center gap-2">
                    <XCircle className="w-3.5 h-3.5 flex-shrink-0" /> {item.traditional}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Hire2Hired AI Engine (Vibrant Blue Tint) */}
          <div className="bg-indigo-900 text-white rounded-[32px] p-8 border border-indigo-800 shadow-2xl space-y-6 relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-indigo-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">Hire2Hired Platform</h3>
                  <p className="text-xs font-semibold text-indigo-300">AI-Powered & Human Verified</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                PROVEN BEST
              </span>
            </div>

            <div className="space-y-4">
              {comparison.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase">{item.feature}</p>
                    <span className="text-[9px] font-extrabold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                      {item.advantage}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> {item.hire2hired}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button 
            onClick={onRequestCallback}
            className="px-8 py-4 rounded-full btn-blue text-sm font-extrabold inline-flex items-center gap-2 border-0 cursor-pointer shadow-md"
          >
            Switch to Hire2Hired <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
