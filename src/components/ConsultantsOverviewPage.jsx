import React from 'react';
import { 
  UserCheck, Target, Sparkles, ArrowRight, ShieldCheck, Zap, 
  Clock, Award, ChevronRight, Home, CheckCircle2, TrendingUp,
  FileText, MessageSquare, Briefcase, Star, Cpu, DollarSign
} from 'lucide-react';
import heroImg from '../assets/consultant_signup.png';

export default function ConsultantsOverviewPage({ onNavigate, isFullPage = true }) {
  const services = [
    {
      id: 'resume',
      title: "AI Resume Optimization",
      icon: FileText,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      badge: "ATS APPROVED",
      desc: "Instant AI scanning to restructure your resume with high-impact tech keywords and metric-driven achievements that pass enterprise ATS bots."
    },
    {
      id: 'matching',
      title: "Smart Career Matching",
      icon: Target,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      badge: "DIRECT MATCH",
      desc: "Neural matching engine that connects your verified tech stack directly with VPs of Engineering actively looking for your exact skills."
    },
    {
      id: 'prep',
      title: "AI Interview Preparation",
      icon: MessageSquare,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      badge: "MOCK SESSIONS",
      desc: "Practice with AI mock interviewers that evaluate system design, live coding syntax efficiency, and behavioral response clarity."
    },
    {
      id: 'assessment',
      title: "Skills Assessment & Portfolio",
      icon: CheckCircle2,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      badge: "VERIFIED BADGE",
      desc: "Earn verified skill badges in React, Java, AWS, Python, and GenAI to get top tier priority placement on employer shortlists."
    },
    {
      id: 'path',
      title: "Career Path Intelligence",
      icon: TrendingUp,
      color: "text-sky-600 bg-sky-50 border-sky-200",
      badge: "MARKET DATA",
      desc: "Real-time rate card benchmarks, market demand heatmaps, and personalized recommendations on high-paying tech stacks to learn next."
    },
    {
      id: 'branding',
      title: "Personal Branding & Marketing",
      icon: Award,
      color: "text-rose-600 bg-rose-50 border-rose-200",
      badge: "BRAND ACCELERATION",
      desc: "Optimize your LinkedIn, GitHub, and Hire2Hired dossier to convert employer profile views into direct contract interviews."
    }
  ];

  return (
    <div className={`bg-[#fafbfd] ${isFullPage ? 'pt-24 pb-20' : 'py-20 md:py-28'} border-b border-slate-200/80 min-h-[85vh]`}>
      <div className="container-main space-y-16">
        
        {/* Full Page Breadcrumbs */}
        {isFullPage && (
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-bold text-slate-500">
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 no-underline">
              <Home className="w-3.5 h-3.5" /> Home
            </a>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Consultants</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-extrabold">Overview</span>
          </div>
        )}

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> 100% FREE FOR CONSULTANTS
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
                  Empowering Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300">
                    Tech Consulting Career
                  </span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Get matched with top US enterprise clients, optimize your resume with AI, and command higher hourly contract rates with zero platform fees.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">50,000+</div>
                  <div className="text-xs text-slate-400 font-medium">Matched Talent</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">+32%</div>
                  <div className="text-xs text-slate-400 font-medium">Rate Uplift</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">6 Days</div>
                  <div className="text-xs text-slate-400 font-medium">Avg Placement</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => onNavigate('signup')}
                  className="px-7 py-3.5 rounded-xl btn-blue text-xs font-extrabold flex items-center gap-2 border-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  Join as Consultant for Free <ArrowRight className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => onNavigate('how-it-works')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 cursor-pointer transition"
                >
                  How It Works →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl max-w-sm group">
                <img 
                  src={heroImg} 
                  alt="Consultants Overview" 
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-extrabold text-white">Direct Enterprise Client Access</div>
                    <div className="text-[10px] text-slate-300">FAANG & Fortune 500 roles</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Consultant Services Grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">CAREER ACCELERATION TOOLS</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Services Designed for Tech Talent</h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-medium">
              Everything you need to showcase your skills, pass interviews, and land enterprise consulting roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const ServiceIcon = s.icon;
              return (
                <div key={s.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-indigo-400 hover:shadow-lg transition space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center font-bold shadow-xs`}>
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200">
                      {s.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mt-2">{s.desc}</p>
                  </div>

                  <button 
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.location.hash = `consultant-service-${s.id === 'resume' ? 'resume-optimization' : s.id === 'matching' ? 'career-matching' : s.id === 'prep' ? 'interview-prep' : s.id === 'assessment' ? 'skills-assessment' : s.id === 'path' ? 'career-path' : 'personal-branding'}`;
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-extrabold border-0 cursor-pointer transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    Explore {s.title} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Consultant Registration Card */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> READY TO BOOST YOUR RATE?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Join 50,000+ Consultants Today</h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Create your free profile in 3 minutes, upload your resume for automated AI optimization, and get matched with top remote client projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold border-0 cursor-pointer shadow-md transition flex items-center gap-2"
            >
              Sign Up as Consultant <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate('login')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 cursor-pointer transition"
            >
              Consultant Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
