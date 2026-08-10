import React, { useState } from 'react';
import { 
  UserCheck, Target, Cpu, Clock, ShieldCheck, ArrowRight, CheckCircle2, 
  Home, ChevronRight, Zap, Award, Sparkles, FileCode, PlayCircle, Star
} from 'lucide-react';
import heroImg from '../assets/consultant_signup.png';

export default function ConsultantHowItWorksPage({ onNavigate, isFullPage = true }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Create Profile & Upload Tech Resume",
      desc: "Sign up in 3 minutes. Upload your resume to get instant AI ATS keyword optimization, skill parameter extraction, and rate card benchmarking.",
      details: [
        "Automated ATS scorecard & formatting feedback",
        "Specify preferred contract rates, remote timezone, & availability",
        "100% free platform for consultants with zero hidden fees"
      ]
    },
    {
      num: "02",
      title: "AI Skill Verification & Badging",
      desc: "Complete optional async coding benchmarks and link GitHub repositories to earn verified skill badges that rank your profile in the top 5% of candidate shortlists.",
      details: [
        "Earn verified badges in React, Java, AWS, Python, & GenAI",
        "Automated code review evaluating architecture & efficiency",
        "3x higher interview selection rate for badged consultants"
      ]
    },
    {
      num: "03",
      title: "Neural Client Matching & Interviews",
      desc: "Receive direct interview invitations from enterprise engineering leaders looking for your exact tech stack. Review project specs and compensation before accepting.",
      details: [
        "Bypass third-party agency recruiters with direct VP introductions",
        "Practice with AI Mock Interviewers before client calls",
        "1-click calendar scheduling directly from your candidate portal"
      ]
    },
    {
      num: "04",
      title: "Onboard & Get Paid Seamlessly",
      desc: "Deploy directly onto active enterprise projects. Enjoy weekly automated payouts, full legal contract compliance, and ongoing career advancement support.",
      details: [
        "Guaranteed weekly payouts via direct bank deposit or wire",
        "Full US 1099/W-2 & global EOR compliance infrastructure",
        "Dedicated Talent Manager supporting your long-term career growth"
      ]
    }
  ];

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80`}>
      <div className="container-main">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto mb-8 flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <a href="#consultants" onClick={(e) => { e.preventDefault(); onNavigate('consultants'); }} className="text-slate-600 hover:text-indigo-600 no-underline">
              Consultants
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">How It Works</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-extrabold mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 100% FREE FOR CONSULTANTS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            How Hire2Hired Works <br />
            <span className="gradient-text-animated">For Tech Consultants</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-xl leading-relaxed">
            From resume upload to AI skill badging, direct VP introductions, and weekly payouts — see your 4-step path to enterprise consulting contracts.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-8 py-4 rounded-full btn-blue text-sm font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-lg hover:scale-105 transition-all"
            >
              Sign Up as Consultant <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('login')}
              className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              Consultant Portal Login
            </button>
          </div>
        </div>

        {/* 4 Interactive Process Steps */}
        <div className="max-w-6xl mx-auto mb-24 grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Step Switcher (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 mb-2">4-STEP CONSULTANT ROADMAP</p>
            {steps.map((st, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  activeStep === idx 
                    ? 'bg-white border-indigo-600 ring-2 ring-indigo-100 shadow-md' 
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl font-display font-extrabold text-lg flex items-center justify-center flex-shrink-0 ${
                    activeStep === idx ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {st.num}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">
                      {st.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Active Step Details Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-3xl font-display font-extrabold text-indigo-600">Step {steps[activeStep].num}</span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-200">
                ● 100% Free Platform
              </span>
            </div>

            <h2 className="text-2xl font-display font-extrabold text-slate-900 leading-tight">
              {steps[activeStep].title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {steps[activeStep].desc}
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">What You Get in Step {steps[activeStep].num}:</p>
              {steps[activeStep].details.map((d, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
              <button 
                onClick={() => onNavigate('signup')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 border-0 cursor-pointer shadow"
              >
                Start Step {steps[activeStep].num} for Free <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-slate-400 font-bold">Step {activeStep + 1} of 4</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border border-indigo-200/90 rounded-3xl p-10 sm:p-14 text-center shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight mb-2">
              Ready to elevate your <span className="text-indigo-600">consulting rate?</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium mb-8">
              Join 50,000+ engineers earning higher rate cards on direct enterprise client contracts.
            </p>
            
            <button 
              onClick={() => onNavigate('signup')}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:scale-105 transition-all border-0 cursor-pointer inline-flex items-center gap-2"
            >
              Sign Up as Consultant Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
