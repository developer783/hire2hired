import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorks({ onRequestCallback }) {
  const steps = [
    {
      num: "01",
      title: "Profile Submission",
      desc: "Submit your candidate profile or job requisition. Our AI platform instantly indexes technical skill matrices.",
      gradient: "from-purple-600 to-indigo-600",
      delay: "delay-100"
    },
    {
      num: "02",
      title: "Expert Vetting",
      desc: "1-on-1 human verification and technical assessment by senior industry technical leaders.",
      gradient: "from-blue-600 to-cyan-600",
      delay: "delay-200"
    },
    {
      num: "03",
      title: "AI Talent Matching",
      desc: "Instant precision pairing connecting pre-vetted consultants with high-impact enterprise positions.",
      gradient: "from-emerald-600 to-teal-600",
      delay: "delay-300"
    },
    {
      num: "04",
      title: "Interview Coaching",
      desc: "Executive resume polishing, mock technical interviews, and client alignment preparation.",
      gradient: "from-orange-500 to-rose-600",
      delay: "delay-400"
    },
    {
      num: "05",
      title: "Direct Placement",
      desc: "Priority referrals directly to hiring managers and CTOs at 500+ enterprise partner companies.",
      gradient: "from-pink-600 to-rose-600",
      delay: "delay-500"
    },
    {
      num: "06",
      title: "Onboarding & Support",
      desc: "Smooth contract onboarding, ongoing dedicated support, and long-term career growth guidance.",
      gradient: "from-amber-500 to-yellow-600",
      delay: "delay-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-indigo-100 text-indigo-700 mb-4">
            AI-POWERED + HUMAN-PERFECTED
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight">
            How <span className="gradient-text">Hire2Hired</span> Matches Talent
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            From initial candidate profiling to client onboarding — here is our proven 6-step matching framework.
          </p>
        </div>

        {/* 3-Column Staggered Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover-card-lift flex flex-col justify-between animate-on-scroll ${step.delay}`}
            >
              <div>
                {/* Step Badge */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.gradient} text-white flex items-center justify-center font-extrabold text-xl shadow-md mb-6`}>
                  {step.num}
                </div>

                <h3 className="font-display font-bold text-slate-900 text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-extrabold text-indigo-600 gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Match Step {step.num}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 border border-indigo-800/80 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-white animate-on-scroll delay-300">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
              <Sparkles className="w-7 h-7 text-amber-300 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                AI-Powered Matching. Human-Perfected Results.
              </h3>
              <p className="text-indigo-200 text-sm sm:text-base leading-relaxed max-w-3xl">
                We combine cutting-edge artificial intelligence with experienced recruitment specialists to deliver high-retention consultant placements with zero friction.
              </p>
            </div>
          </div>

          <button 
            onClick={onRequestCallback}
            className="flex-shrink-0 glow-btn px-8 py-4 rounded-2xl font-extrabold text-sm flex items-center gap-2.5 border-0 cursor-pointer whitespace-nowrap shadow-lg hover:scale-105 transition-transform"
          >
            Connect With An Advisor <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
