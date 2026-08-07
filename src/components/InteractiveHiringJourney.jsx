import React, { useState, useEffect } from 'react';
import { UserCheck, ShieldCheck, Sparkles, MessageSquare, Award, Rocket, Check, ArrowRight } from 'lucide-react';

export default function InteractiveHiringJourney({ onRequestCallback }) {
  const [activeStep, setActiveStep] = useState(2);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      title: 'Profile Submission',
      icon: <UserCheck className="w-5 h-5" />,
      detail: 'Fill out a quick form or upload your resume. Our system creates a verified candidate profile within minutes.',
      duration: '5 Mins',
      status: 'Instant'
    },
    {
      title: 'Expert Verification',
      icon: <ShieldCheck className="w-5 h-5" />,
      detail: 'Hire2Hired career advisors conduct 1-on-1 technical vetting to validate skills, experience, and background.',
      duration: '24 Hours',
      status: '1-on-1 Vetted'
    },
    {
      title: 'AI Matching',
      icon: <Sparkles className="w-5 h-5" />,
      detail: 'Our AI engine matches your profile with high-paying client contracts based on technical fit and salary target.',
      duration: 'Instant',
      status: '98% Precision'
    },
    {
      title: 'Interview Coaching',
      icon: <MessageSquare className="w-5 h-5" />,
      detail: 'Practice with AI interview simulations and get personalized feedback from senior technical interviewers.',
      duration: '1-2 Days',
      status: 'Simulations'
    },
    {
      title: 'Direct Placement',
      icon: <Award className="w-5 h-5" />,
      detail: 'Get referred directly to hiring managers at Fortune 500 partner companies with zero middleman delays.',
      duration: '48 Hours',
      status: 'Direct Hire'
    },
    {
      title: 'Onboarding & Growth',
      icon: <Rocket className="w-5 h-5" />,
      detail: 'Seamless onboarding with continuous career path monitoring, skill upgrades, and contract extensions.',
      duration: 'Ongoing',
      status: 'Guaranteed'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container-main">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            6-STEP AUTOMATED TIMELINE
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Interactive <span className="text-indigo-600">Hiring Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From initial resume submission to your first paycheck — track every step of our transparent placement pipeline.
          </p>
        </div>

        {/* Connected Horizontal Timeline (Desktop) */}
        <div className="relative py-12 px-4">
          
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-[80px] left-[6%] right-[6%] h-1 bg-slate-200 rounded-full z-0">
            <div 
              className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* 6 Step Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((st, idx) => {
              const isCompleted = idx < activeStep;
              const isActive = idx === activeStep;
              const isHovered = hoveredStep === idx;

              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Glowing Circle Node */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold transition-all duration-300 shadow-md ${
                    isActive 
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-200 scale-110 shadow-indigo-500/30' 
                      : isCompleted
                      ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                      : 'bg-white text-slate-600 border border-slate-200 group-hover:border-indigo-400 group-hover:scale-105'
                  }`}>
                    {isCompleted ? <Check className="w-6 h-6" /> : st.icon}
                  </div>

                  {/* Step Title & Badge */}
                  <div className="mt-4 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Step 0{idx + 1}
                    </span>
                    <h3 className={`text-sm font-extrabold transition-colors ${
                      isActive ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>
                      {st.title}
                    </h3>
                  </div>

                  {/* Expandable Popup Card on Hover / Active */}
                  {(isActive || isHovered) && (
                    <div className="mt-4 bg-white rounded-2xl p-4 border border-indigo-100 shadow-xl z-30 text-left space-y-2 animate-in fade-in slide-in-from-top-2 w-full max-w-[220px]">
                      <div className="flex items-center justify-between text-[10px] font-extrabold">
                        <span className="text-indigo-600 uppercase">{st.status}</span>
                        <span className="text-slate-400">{st.duration}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {st.detail}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Action Bar */}
        <div className="mt-12 text-center">
          <button 
            onClick={onRequestCallback}
            className="px-8 py-4 rounded-full btn-blue text-sm font-extrabold inline-flex items-center gap-2 border-0 cursor-pointer shadow-md"
          >
            Start Your Journey Today <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
