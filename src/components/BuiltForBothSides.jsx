import React from 'react';
import { UserCheck, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BuiltForBothSides({ onOpenApply, onRequestCallback }) {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Built for <span className="text-indigo-600">Both Sides</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Whether you're seeking opportunities or searching for talent, Hire2Hired delivers value at every step.
          </p>
        </div>

        {/* 2-Column Split Showcase Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: For Consultants */}
          <div className="bg-slate-50/80 rounded-[32px] p-8 md:p-12 border border-slate-200/90 shadow-xs hover-card-warm flex flex-col justify-between animate-on-scroll delay-100">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold shadow-2xs border border-indigo-100">
                <UserCheck className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">
                  For Consultants & Talent
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Supercharge your consulting career with direct enterprise client contracts, AI resume optimization, and dedicated placement support.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  Direct access to high-paying Fortune 500 client contracts
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  1-on-1 dedicated career advisor & interview coaching
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  AI resume optimization & verified skills portfolio
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => onOpenApply('Consultant Placement')}
                className="w-full py-4 rounded-full btn-blue text-base font-extrabold flex items-center justify-center gap-2 border-0 cursor-pointer shadow-md"
              >
                Explore Consultant Path <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 2: For Employers */}
          <div className="bg-slate-900 text-white rounded-[32px] p-8 md:p-12 border border-slate-800 shadow-2xl hover-card-warm flex flex-col justify-between animate-on-scroll delay-200">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-extrabold shadow-2xs border border-indigo-500/20">
                <Building2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white">
                  For Employers & Enterprises
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Access a pre-vetted top 5% consultant talent pool with rapid 48-hour matching, AI screening, and flexible staff augmentation.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  Rapid 48-hour candidate matching & onboarding
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  100% technical vetting & cultural fit analysis
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  Flexible engagement: Staff Augmentation, Contract, Direct Hire
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button 
                onClick={onRequestCallback}
                className="w-full py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-base font-extrabold flex items-center justify-center gap-2 border-0 cursor-pointer shadow-md transition"
              >
                Explore Employer Solutions <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
