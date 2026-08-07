import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Users, Building, TrendingUp, Clock, Sparkles, 
  FileText, Cpu, CheckCircle2, BarChart2, UserCheck, Search, 
  Calendar, Award, Check, ChevronRight, Briefcase, DollarSign
} from 'lucide-react';

export default function HeroSection({ onOpenApply, onRequestCallback }) {
  // Active step state for 8-step hiring workflow sequence (0 to 7)
  const [activeStep, setActiveStep] = useState(0);

  // Mouse parallax coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const dashboardRef = useRef(null);

  // 8 Sequential Hiring Workflow Steps
  const workflowSteps = [
    { label: 'Resume Upload', icon: <FileText className="w-3.5 h-3.5" />, desc: 'PDF uploaded by candidate' },
    { label: 'AI Resume Parsing', icon: <Cpu className="w-3.5 h-3.5" />, desc: 'Extracted skills & experience' },
    { label: 'Skill Verification', icon: <CheckCircle2 className="w-3.5 h-3.5" />, desc: 'Validated tech competencies' },
    { label: 'Experience Analysis', icon: <BarChart2 className="w-3.5 h-3.5" />, desc: 'Depth & seniority scoring' },
    { label: 'Culture Fit Prediction', icon: <UserCheck className="w-3.5 h-3.5" />, desc: '98% Team alignment' },
    { label: 'Recruiter Review', icon: <Search className="w-3.5 h-3.5" />, desc: 'Verified by Hire2Hired advisor' },
    { label: 'Interview Scheduled', icon: <Calendar className="w-3.5 h-3.5" />, desc: 'Confirmed for Tomorrow 10:00 AM' },
    { label: 'Offer Accepted', icon: <Award className="w-3.5 h-3.5" />, desc: 'Placed at $165K/yr' },
  ];

  // Live notifications matching active step
  const notifications = [
    { text: 'New Candidate Matched', sub: 'Alex Morgan • Sr. Full-Stack & AI', icon: '⚡' },
    { text: 'Resume Successfully Parsed', sub: 'Extracted 14 core skills in 1.2s', icon: '📄' },
    { text: 'Skill Verification Complete', sub: 'Java, Python, React & LLMs Verified', icon: '✅' },
    { text: 'Experience Analysis Done', sub: '7+ Years Senior Tech Leadership', icon: '📈' },
    { text: 'Culture Fit Score: 98%', sub: 'High synergy with TechCorp team', icon: '🧠' },
    { text: 'Recruiter Review Approved', sub: 'Hand-vetted by Talent Lead', icon: '🔍' },
    { text: 'Interview Confirmed', sub: 'Tomorrow at 10:00 AM EST', icon: '📅' },
    { text: 'Offer Accepted! 🎉', sub: 'Successfully placed in 36 hours', icon: '🏆' },
  ];

  // Auto-cycle through workflow steps every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [workflowSteps.length]);

  // Mouse move handler for 60fps parallax effect
  const handleMouseMove = (e) => {
    if (!dashboardRef.current) return;
    const rect = dashboardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#fafbfd] overflow-hidden relative border-b border-slate-200/60">
      
      {/* Background Soft Glow Radial Gradients & Subtle Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-purple-500/10 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Premium Content (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 animate-on-scroll animate-from-left">
            
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-700 text-xs font-extrabold backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping"></span>
              <span>AI-Powered Talent Matching</span>
            </div>

            {/* Large Bold Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[62px] font-display font-extrabold leading-[1.08] text-slate-900 tracking-tight">
              Find the Right Talent. <br />
              <span className="gradient-text-animated">Faster.</span> Smarter. Better.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              We combine intelligent AI with experienced recruiters to connect top consultants with leading companies through faster, more accurate hiring.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button 
                onClick={() => onOpenApply('Find Talent')}
                className="px-8 py-4 rounded-full btn-blue text-base font-extrabold flex items-center justify-center gap-2.5 border-0 cursor-pointer shadow-lg hover:scale-[1.02] transition-all"
              >
                Find Talent <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={onRequestCallback}
                className="px-8 py-4 rounded-full btn-outline-warm text-base font-extrabold flex items-center justify-center gap-2.5 cursor-pointer hover:bg-slate-50 transition-all"
              >
                Book a Consultation <ArrowRight className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Below Buttons: 4 Animated Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200/80">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  10K+
                </div>
                <p className="text-xs text-slate-500 font-bold">Consultants</p>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  500+
                </div>
                <p className="text-xs text-slate-500 font-bold">Hiring Companies</p>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  95%
                </div>
                <p className="text-xs text-slate-500 font-bold">Match Success</p>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  48 Hours
                </div>
                <p className="text-xs text-slate-500 font-bold">Avg. Hiring Time</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Hiring Journey Dashboard (7 Columns) */}
          <div 
            ref={dashboardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative animate-on-scroll animate-from-right delay-200"
          >
            
            {/* Glass Container Dashboard */}
            <div 
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="bg-white/80 backdrop-blur-2xl rounded-[36px] p-6 sm:p-8 border border-slate-200/90 shadow-2xl shadow-indigo-500/10 relative min-h-[580px] flex flex-col justify-between overflow-hidden"
            >
              
              {/* Top Bar: Dashboard Header & Live Notification Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Live Hiring Workflow Dashboard
                  </span>
                </div>

                {/* Sliding Animated Notification Banner */}
                <div className="bg-indigo-50/90 border border-indigo-100/80 rounded-2xl px-4 py-2 flex items-center gap-3 animate-in fade-in slide-in-from-top-1 transition-all duration-300">
                  <span className="text-base">{notifications[activeStep].icon}</span>
                  <div>
                    <p className="text-xs font-extrabold text-indigo-900 leading-tight">
                      {notifications[activeStep].text}
                    </p>
                    <p className="text-[10px] font-semibold text-indigo-600">
                      {notifications[activeStep].sub}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center: Glowing AI Core & Orbital Workflow Nodes */}
              <div className="my-auto py-8 relative flex items-center justify-center min-h-[320px] z-10">
                
                {/* Concentric Rotating AI Core Rings */}
                <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-indigo-200/60 animate-spin-slow pointer-events-none"></div>
                <div className="absolute w-[210px] h-[210px] rounded-full border border-indigo-300/40 animate-spin-reverse pointer-events-none"></div>
                <div className="absolute w-[150px] h-[150px] rounded-full bg-indigo-500/5 animate-pulse-glow pointer-events-none"></div>

                {/* Glowing AI Core Center Node */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 text-white flex flex-col items-center justify-center shadow-xl shadow-indigo-500/30 z-20 relative group hover:scale-105 transition-transform">
                  <Sparkles className="w-9 h-9 animate-pulse" />
                  <span className="text-[9px] font-extrabold uppercase tracking-widest mt-1">AI CORE</span>
                  
                  {/* Active Step Indicator Pill */}
                  <div className="absolute -bottom-3 bg-slate-900 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Step {activeStep + 1} of 8
                  </div>
                </div>

                {/* Floating UI Card 1: Candidate Profile (Top Left) */}
                <div className="absolute -top-2 left-0 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[210px] z-30 animate-float-slow">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-bold flex items-center justify-center text-xs">
                      AM
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">Alex Morgan</p>
                      <p className="text-[10px] font-semibold text-slate-500">Sr. Full-Stack & AI • 7 yrs</p>
                    </div>
                  </div>
                </div>

                {/* Floating UI Card 2: Company Requirement (Top Right) */}
                <div className="absolute -top-2 right-0 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[210px] z-30 animate-float-reverse">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                      <Building className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">TechCorp Inc.</p>
                      <p className="text-[10px] font-semibold text-indigo-600">Lead AI Engineer ($165k)</p>
                    </div>
                  </div>
                </div>

                {/* Floating UI Card 3: AI Match Score (Bottom Left) */}
                <div className="absolute -bottom-4 left-0 sm:left-2 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 z-30 animate-float-reverse">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold text-xs">
                      98%
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">AI Match Score</p>
                      <p className="text-[10px] font-semibold text-emerald-600">Verified Technical Synergy</p>
                    </div>
                  </div>
                </div>

                {/* Floating UI Card 4: Offer Sent / Salary (Bottom Right) */}
                <div className="absolute -bottom-4 right-0 sm:right-2 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 z-30 animate-float-slow">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">Offer Accepted 🎉</p>
                      <p className="text-[10px] font-semibold text-indigo-600">$165,000 / yr • Placed</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom: 8-Step Interactive Hiring Workflow Sequence Bar */}
              <div className="pt-6 border-t border-slate-100 z-20">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Automated Hiring Journey Pipeline
                  </span>
                  <span className="text-xs font-bold text-indigo-600">
                    Step {activeStep + 1} of 8: {workflowSteps[activeStep].label}
                  </span>
                </div>

                {/* 8-Step Grid Nodes */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {workflowSteps.map((step, idx) => {
                    const isCompleted = idx < activeStep;
                    const isActive = idx === activeStep;

                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[64px] ${
                          isActive 
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-300 scale-105' 
                            : isCompleted
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-50 text-slate-500 border-slate-200/80 hover:bg-slate-100'
                        }`}
                      >
                        <div className="mb-1">
                          {isCompleted ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : step.icon}
                        </div>
                        <span className="text-[9px] font-extrabold leading-tight line-clamp-1">
                          {step.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
